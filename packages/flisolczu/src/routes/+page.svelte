<script lang="ts">
	import { ArrowSquareOutIcon } from 'phosphor-svelte';
	import CountdownSection from '$lib/components/landing/countdown.svelte';
	import HeroSection from '$lib/components/landing/hero-section.svelte';
	import ScheduleSection from '$lib/components/landing/schedule-section.svelte';
	import SiteFooter from '$lib/components/landing/site-footer.svelte';
	import SponsorBand from '$lib/components/landing/sponsor-band.svelte';

	const SITE_URL = 'https://flisolczu.org';
	const PAGE_URL = `${SITE_URL}/`;
	const PAGE_TITLE = 'FLISOL 2026 Caaguazu | Festival de Software Libre en Paraguay';
	const PAGE_DESCRIPTION =
		'FLISOL 2026 en Caaguazu, Paraguay: charlas, talleres y stands sobre software libre para estudiantes, profesionales y la comunidad tecnológica.';
</script>

<svelte:head>
	<title>{PAGE_TITLE}</title>
	<meta name="description" content={PAGE_DESCRIPTION} />
	<meta name="robots" content="index, follow, max-image-preview:large" />
	<link rel="canonical" href={PAGE_URL} />

	<meta property="og:locale" content="es_PY" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="FLISOL Caaguazu" />
	<meta property="og:title" content={PAGE_TITLE} />
	<meta property="og:description" content={PAGE_DESCRIPTION} />
	<meta property="og:url" content={PAGE_URL} />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={PAGE_TITLE} />
	<meta name="twitter:description" content={PAGE_DESCRIPTION} />

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Event",
			"name": "FLISOL 2026 Caaguazu",
			"description": "Festival Latinoamericano de Instalacion de Software Libre en Caaguazu, Paraguay, con charlas, talleres y stands para la comunidad.",
			"startDate": "2026-04-25T14:00:00-04:00",
			"eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
			"eventStatus": "https://schema.org/EventScheduled",
			"inLanguage": "es-PY",
			"isAccessibleForFree": true,
			"url": "https://flisolczu.org/",
			"location": {
				"@type": "Place",
				"name": "Universidad Tecnologica Intercontinental (UTIC)",
				"address": {
					"@type": "PostalAddress",
					"addressLocality": "Caaguazu",
					"addressCountry": "PY"
				}
			},
			"organizer": {
				"@type": "Organization",
				"name": "Comunidad FLISOL Caaguazu",
				"url": "https://flisolczu.org"
			}
		}
	</script>
</svelte:head>

<div
	class="min-h-screen bg-[radial-gradient(circle_at_0%_0%,color-mix(in_oklab,var(--flisol-lime-400)_20%,white),transparent_40%),radial-gradient(circle_at_100%_0%,color-mix(in_oklab,var(--flisol-orange-400)_20%,white),transparent_42%),linear-gradient(180deg,#ffffff_0%,#f8fbff_60%,#ffffff_100%)] font-sans"
>
	<main
		class="mx-auto flex max-w-(--layout-home-width) flex-col gap-8 px-2 py-5 sm:gap-10 sm:px-8 sm:py-12 lg:gap-14 lg:px-12"
	>
		<HeroSection />

		<SponsorBand />

		<CountdownSection />

		<ScheduleSection />

		<section
			class="grid gap-5 rounded-3xl border border-flisol-blue-600/15 bg-flisol-blue-600 px-4 py-6 text-white sm:gap-6 sm:rounded-[calc(var(--radius-card)+10px)] sm:border-flisol-blue-600/20 sm:px-8 sm:py-7 sm:shadow-lg md:grid-cols-[1fr_auto] md:items-center"
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
				href="https://flisolczu.org/"
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
