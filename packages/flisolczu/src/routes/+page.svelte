<script lang="ts">
	import CountdownSection from '$lib/components/landing/countdown.svelte';
	import HeroSection from '$lib/components/landing/hero-section.svelte';
	import ScheduleSection from '$lib/components/landing/schedule-section.svelte';
	import SiteFooter from '$lib/components/landing/site-footer.svelte';
	import SponsorBand from '$lib/components/landing/sponsor-band.svelte';
	import CertificationRegistrationSection from '../lib/components/landing/certification-registration-section.svelte';

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

		<CertificationRegistrationSection />
	</main>
</div>

<SiteFooter />
