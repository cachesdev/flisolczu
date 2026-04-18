<script lang="ts">
	import {
		BuildingOffice,
		Circuitry,
		Cloud,
		Code,
		Database,
		GlobeHemisphereWest
	} from 'phosphor-svelte';
	import { animate } from 'animejs';
	import { MediaQuery } from 'svelte/reactivity';

	const sponsors = [
		{ name: 'Kernel Labs', area: 'Infraestructura abierta', icon: Cloud },
		{ name: 'AndesDB', area: 'Datos y observabilidad', icon: Database },
		{ name: 'LibreWave', area: 'Conectividad comunitaria', icon: GlobeHemisphereWest },
		{ name: 'OpenNode', area: 'Cloud para estudiantes', icon: BuildingOffice },
		{ name: 'BitSur', area: 'Dev tools', icon: Code },
		{ name: 'Circuita', area: 'Hardware libre', icon: Circuitry }
	] as const;

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
			duration: 24000,
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
			class="flex gap-4 overflow-x-scroll px-4 py-5"
			onpointerenter={pauseAnimation}
			onpointerleave={resumeAnimation}
			onfocusin={pauseAnimation}
			onfocusout={resumeAnimation}
		>
			{#each loopedSponsors as sponsor, index (`${sponsor.name}-${index}`)}
				{@const Icon = sponsor.icon}
				<article
					class="flex min-w-56 items-center gap-3 rounded-2xl border border-flisol-blue-300/30 bg-white px-4 py-3 shadow-sm"
				>
					<div
						class="grid h-10 w-10 place-items-center rounded-xl bg-flisol-blue-600/10 text-flisol-blue-600"
					>
						<Icon size={20} weight="duotone" />
					</div>
					<div>
						<p class="text-sm font-semibold text-slate-800">{sponsor.name}</p>
						<p class="text-xs text-slate-500">{sponsor.area}</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
