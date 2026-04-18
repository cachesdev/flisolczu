<script lang="ts">
	import { animate } from 'animejs';
	import { MediaQuery } from 'svelte/reactivity';

	const sponsorsObj = import.meta.glob('$lib/assets/sponsors/*', {
		eager: true,
		import: 'default'
	});
	const sponsors = Object.values(sponsorsObj) as string[];

	const loopedSponsors = [...sponsors, ...sponsors];
	const reducedMotion = new MediaQuery('(prefers-reduced-motion: reduce)', false);

	let viewport = $state<HTMLDivElement | null>(null);
	let sponsorsAnimation: ReturnType<typeof animate> | null = null;

	const pauseAnimation = () => {
		sponsorsAnimation?.pause();
	};

	const resumeAnimation = () => {
		sponsorsAnimation?.play();
	};

	$effect(() => {
		if (!viewport) return;

		if (reducedMotion.current) {
			sponsorsAnimation?.cancel();
			sponsorsAnimation = null;
			return;
		}

		const resetPoint = viewport.scrollWidth / 2;

		sponsorsAnimation?.cancel();
		sponsorsAnimation = animate(viewport, {
			scrollLeft: [0, resetPoint],
			ease: 'linear',
			duration: 48000,
			loop: true
		});

		return () => {
			sponsorsAnimation?.cancel();
			sponsorsAnimation = null;
		};
	});
</script>

<section aria-labelledby="patrocinadores" class="space-y-4">
	<div class="flex flex-wrap items-center justify-between gap-3">
		<h2
			id="patrocinadores"
			class="text-sm font-semibold tracking-[0.16em] text-flisol-blue-600 uppercase"
		>
			Patrocinan esta edición
		</h2>
	</div>

	<div
		class="relative overflow-hidden rounded-[calc(var(--radius-card)+8px)] border border-flisol-blue-600/20 bg-white/90 shadow-sm"
	>
		<div
			class="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-linear-to-r from-white via-white/90 to-transparent"
		></div>
		<div
			class="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-linear-to-l from-white via-white/90 to-transparent"
		></div>

		<div
			bind:this={viewport}
			role="region"
			aria-label="Banda de patrocinadores con desplazamiento continuo"
			class="no-scrollbar flex gap-4 overflow-x-scroll px-4 py-5"
			onpointerenter={pauseAnimation}
			onpointerleave={resumeAnimation}
			onfocusin={pauseAnimation}
			onfocusout={resumeAnimation}
		>
			{#each loopedSponsors as sponsor, index (index)}
				<article class="flex min-w-56 items-center justify-center gap-3 overflow-clip px-4 py-3">
					<div>
						<img src={sponsor} class="max-h-20" alt="Logo de sponsor" />
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
