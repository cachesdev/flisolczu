<script lang="ts">
	import { ArrowSquareOutIcon } from 'phosphor-svelte';
	import CountdownSection from '$lib/components/landing/countdown.svelte';
	import HeroSection from '$lib/components/landing/hero-section.svelte';
	import ScheduleSection from '$lib/components/landing/schedule-section.svelte';
	import SiteFooter from '$lib/components/landing/site-footer.svelte';
	import SponsorBand from '$lib/components/landing/sponsor-band.svelte';
</script>

<svelte:head>
	<title>FLISOL 2026 Caaguazu</title>
	<meta
		name="description"
		content="Festival Latinoamericano de Instalación de Software Libre - Cumbre Estudiantil de Código Abierto 2026 en Caaguazu. Un día para aprender, compartir y construir comunidad alrededor del software libre. Conecta con estudiantes, maintainers y organizaciones que están impulsando proyectos abiertos en Paraguay."
	/>
</svelte:head>

<div
	class="min-h-screen bg-[radial-gradient(circle_at_0%_0%,color-mix(in_oklab,var(--flisol-lime-400)_20%,white),transparent_40%),radial-gradient(circle_at_100%_0%,color-mix(in_oklab,var(--flisol-orange-400)_20%,white),transparent_42%),linear-gradient(180deg,#ffffff_0%,#f8fbff_60%,#ffffff_100%)] font-sans"
>
	<main
		class="mx-auto flex max-w-(--layout-home-width) flex-col gap-10 px-4 py-8 sm:px-8 sm:py-12 lg:gap-14 lg:px-12"
	>
		<HeroSection />

		<SponsorBand />

		<CountdownSection />

		<ScheduleSection />

		<section
			id="registro"
			class="grid gap-6 rounded-[calc(var(--radius-card)+10px)] border border-flisol-blue-600/20 bg-flisol-blue-600 px-6 py-8 text-white shadow-lg sm:px-8 md:grid-cols-[1fr_auto] md:items-center"
		>
			<div>
				<h2 class="mt-3 text-2xl leading-tight font-semibold sm:text-3xl">
					¿Querés tu certificado de participación?
				</h2>
				<p class="mt-2 max-w-[50ch] text-sm leading-relaxed text-white/85 sm:text-base">
					Registrate para obtener tu certificado de participación. El certificado es una constancia
					oficial que acredita tu asistencia y participación en el FLISOL 2026 Caaguazu.
				</p>
			</div>

			<a
				href="https://flisol.info"
				target="_blank"
				rel="noreferrer"
				class="inline-flex items-center justify-center gap-2 rounded-full bg-flisol-lime-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white"
			>
				Ir al formulario
				<ArrowSquareOutIcon size={18} weight="bold" />
			</a>
		</section>
	</main>
</div>

<SiteFooter />
