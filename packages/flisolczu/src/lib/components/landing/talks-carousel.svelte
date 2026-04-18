<script lang="ts">
	import { onMount } from 'svelte';
	import {
		ArrowLeft,
		ArrowRight,
		Bug,
		GitFork,
		RocketLaunch,
		TerminalWindow
	} from 'phosphor-svelte';

	const talks = [
		{
			title: 'Contribuir sin miedo a tu primer issue',
			speaker: 'Ana Soliz',
			track: 'Comunidad',
			duration: '25 min',
			icon: GitFork,
			summary:
				'Cómo encontrar proyectos accesibles, comunicarte con maintainers y enviar tu primer PR.'
		},
		{
			title: 'Debugging real en producción estudiantil',
			speaker: 'Martín Paredes',
			track: 'Backend',
			duration: '30 min',
			icon: Bug,
			summary:
				'Errores comunes en despliegues académicos y estrategias para resolver incidentes rápido.'
		},
		{
			title: 'Roadmap para tu carrera open source',
			speaker: 'Camila Rojas',
			track: 'Carrera',
			duration: '20 min',
			icon: RocketLaunch,
			summary:
				'Pasos concretos para construir reputación técnica y oportunidades laborales globales.'
		},
		{
			title: 'Terminal y automatización para equipos pequeños',
			speaker: 'Diego Condori',
			track: 'Productividad',
			duration: '25 min',
			icon: TerminalWindow,
			summary:
				'Comandos y workflows prácticos para colaborar mejor en grupos de estudio y hack clubs.'
		}
	] as const;

	let viewport = $state<HTMLDivElement | null>(null);
	let isPaused = $state(false);
	let timer: ReturnType<typeof setInterval> | null = null;

	const setViewport = (node: HTMLDivElement) => {
		viewport = node;

		return () => {
			if (viewport === node) {
				viewport = null;
			}
		};
	};

	const next = () => {
		if (!viewport) return;

		const step = Math.max(viewport.clientWidth * 0.75, 280);
		const maxScrollLeft = viewport.scrollWidth - viewport.clientWidth;
		const reachesEnd = viewport.scrollLeft >= maxScrollLeft - step * 0.4;

		if (reachesEnd) {
			viewport.scrollTo({ left: 0, behavior: 'smooth' });
			return;
		}

		viewport.scrollBy({ left: step, behavior: 'smooth' });
	};

	const previous = () => {
		if (!viewport) return;

		const step = Math.max(viewport.clientWidth * 0.75, 280);
		const nextLeft = Math.max(viewport.scrollLeft - step, 0);
		viewport.scrollTo({ left: nextLeft, behavior: 'smooth' });
	};

	onMount(() => {
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduceMotion) return;

		timer = setInterval(() => {
			if (!isPaused) next();
		}, 4200);

		return () => {
			if (timer) {
				clearInterval(timer);
			}
		};
	});
</script>

<section aria-labelledby="charlas-destacadas" class="space-y-4">
	<div class="flex flex-wrap items-end justify-between gap-3">
		<div>
			<h2 id="charlas-destacadas" class="text-2xl font-semibold text-flisol-blue-600 sm:text-3xl">
				Charlas destacadas
			</h2>
			<p class="mt-1 text-sm text-slate-600">
				Carrusel con avance automático y desplazamiento manual.
			</p>
		</div>
		<div class="flex items-center gap-2">
			<button
				type="button"
				class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-flisol-blue-600/25 bg-white text-flisol-blue-600 transition hover:border-flisol-blue-600 hover:bg-flisol-blue-600 hover:text-white"
				onclick={previous}
				aria-label="Ver charla anterior"
			>
				<ArrowLeft size={18} />
			</button>
			<button
				type="button"
				class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-flisol-blue-600/25 bg-white text-flisol-blue-600 transition hover:border-flisol-blue-600 hover:bg-flisol-blue-600 hover:text-white"
				onclick={next}
				aria-label="Ver siguiente charla"
			>
				<ArrowRight size={18} />
			</button>
		</div>
	</div>

	<div
		{@attach setViewport}
		role="region"
		aria-label="Carrusel de charlas destacadas"
		class="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
		onpointerenter={() => (isPaused = true)}
		onpointerleave={() => (isPaused = false)}
		onfocusin={() => (isPaused = true)}
		onfocusout={() => (isPaused = false)}
	>
		{#each talks as talk (talk.title)}
			{@const Icon = talk.icon}
			<article
				class="min-w-[18rem] snap-start rounded-[calc(var(--radius-card)+8px)] border border-flisol-blue-300/30 bg-white p-5 shadow-sm sm:min-w-88"
			>
				<div class="mb-4 flex items-start justify-between gap-3">
					<div
						class="grid h-11 w-11 place-items-center rounded-xl bg-flisol-orange-400/20 text-flisol-orange-500"
					>
						<Icon size={22} weight="duotone" />
					</div>
					<div class="flex items-center gap-2 text-xs font-semibold text-slate-500">
						<span class="rounded-full bg-flisol-blue-600/10 px-2.5 py-1 text-flisol-blue-600"
							>{talk.track}</span
						>
						<span>{talk.duration}</span>
					</div>
				</div>

				<h3 class="text-lg leading-snug font-semibold text-slate-900">{talk.title}</h3>
				<p class="mt-2 text-sm leading-relaxed text-slate-600">{talk.summary}</p>

				<p class="mt-4 text-xs font-medium tracking-wide text-slate-500 uppercase">
					{talk.speaker}
				</p>
			</article>
		{/each}
	</div>
</section>
