<script lang="ts">
	import { animate } from 'animejs';

	type SponsorImageModule = {
		default: string;
	};

	const sponsorsObj = import.meta.glob(
		'$lib/assets/sponsors/*.{avif,AVIF,gif,GIF,heif,HEIF,jpeg,JPEG,jpg,JPG,png,PNG,tiff,TIFF,webp,WEBP}',
		{
			eager: true,
			query: { enhanced: true, w: '560;280', format: 'avif;webp' }
		}
	) as Record<string, SponsorImageModule>;

	const sponsors = Object.values(sponsorsObj).map((module) => module.default);

	const loopedSponsors = [...sponsors, ...sponsors];
	let sponsorsAnimation: ReturnType<typeof animate> | null = null;

	const sponsorTicker = (node: HTMLDivElement) => {
		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

		const stop = () => {
			sponsorsAnimation?.cancel();
			sponsorsAnimation = null;
			node.scrollLeft = 0;
		};

		const start = () => {
			if (reducedMotion.matches) return;

			const resetPoint = node.scrollWidth / 2;

			sponsorsAnimation?.cancel();
			sponsorsAnimation = animate(node, {
				scrollLeft: [0, resetPoint],
				ease: 'linear',
				duration: 48000,
				loop: true
			});
		};

		const syncMotionPreference = () => {
			if (reducedMotion.matches) {
				stop();
				return;
			}

			start();
		};

		syncMotionPreference();
		reducedMotion.addEventListener('change', syncMotionPreference);

		return () => {
			reducedMotion.removeEventListener('change', syncMotionPreference);
			stop();
		};
	};

	const pauseAnimation = () => {
		sponsorsAnimation?.pause();
	};

	const resumeAnimation = () => {
		sponsorsAnimation?.play();
	};
</script>

<section aria-labelledby="patrocinadores" class="space-y-4">
	<div class="flex flex-wrap items-center justify-between gap-3">
		<h2 class="text-sm font-semibold tracking-[0.16em] text-flisol-blue-600 uppercase">
			Patrocinan esta edición
		</h2>
	</div>

	<div
		class="relative overflow-hidden rounded-3xl border border-flisol-blue-600/15 bg-white/85 sm:rounded-[calc(var(--radius-card)+8px)] sm:border-flisol-blue-600/20 sm:bg-white/90 sm:shadow-sm"
	>
		<div
			class="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-linear-to-r from-white via-white/90 to-transparent"
		></div>
		<div
			class="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-linear-to-l from-white via-white/90 to-transparent"
		></div>

		<div
			{@attach sponsorTicker}
			role="region"
			aria-label="Banda de patrocinadores con desplazamiento continuo"
			class="no-scrollbar flex gap-3 overflow-x-scroll px-3 py-4 sm:gap-4 sm:px-4 sm:py-5"
			onpointerenter={pauseAnimation}
			onpointerleave={resumeAnimation}
			onfocusin={pauseAnimation}
			onfocusout={resumeAnimation}
		>
			{#each loopedSponsors as sponsor, index (index)}
				<article class="flex min-w-56 items-center justify-center gap-3 overflow-clip px-4 py-3">
					<div>
						<enhanced:img
							src={sponsor}
							class="max-h-20 w-auto object-contain"
							alt="Logo de sponsor"
							loading="lazy"
						/>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
