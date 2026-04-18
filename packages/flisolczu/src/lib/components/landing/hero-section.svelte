<script lang="ts">
	import { CalendarDotsIcon, MapPinIcon, UsersThreeIcon } from 'phosphor-svelte';
	import LogoHero from '$lib/assets/logo-hero.svg';

	const highlights = [
		{ label: 'Asistentes esperados', value: '100+' },
		{ label: 'Charlas, talleres y stands', value: '10' },
		{ label: 'Organizaciones invitadas', value: '4' }
	];
</script>

<section
	class="relative overflow-hidden rounded-[calc(var(--radius-card)+10px)] border border-flisol-blue-600/20 bg-linear-to-br from-white via-white to-flisol-blue-300/10 p-6 shadow-xl sm:p-10"
>
	<div
		class="absolute -top-16 -left-20 h-56 w-56 rounded-full bg-flisol-lime-400/30 blur-3xl"
	></div>
	<div
		class="absolute right-0 -bottom-20 h-60 w-60 rounded-full bg-flisol-orange-400/25 blur-3xl"
	></div>

	<div class="relative grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-center">
		<div class="space-y-6">
			<img src={LogoHero} alt="Logo de FLISOL Caaguazu 2026" class="w-180" />
			<p class="max-w-[58ch] text-base leading-relaxed text-slate-700 sm:text-lg">
				Un día para aprender, compartir y construir comunidad alrededor del software libre. Conecta
				con estudiantes, profesionales y veni a aprender de charlas, talleres y actividades
				prácticas sobre tecnología abierta.
			</p>

			<div class="flex flex-wrap gap-3">
				<a
					href="#agenda"
					class="inline-flex items-center justify-center rounded-full bg-flisol-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-flisol-orange-400"
				>
					Ver agenda
				</a>
				<a
					href="#registro"
					class="inline-flex items-center justify-center rounded-full border border-flisol-blue-600/30 bg-white px-5 py-2.5 text-sm font-semibold text-flisol-blue-600 transition hover:border-flisol-blue-600 hover:bg-flisol-blue-600/5"
				>
					Pedí tu certificado
				</a>
			</div>
		</div>

		<div
			class="space-y-5 rounded-[calc(var(--radius-card)+4px)] border border-flisol-blue-600/20 bg-white/90 p-6 shadow-sm backdrop-blur"
		>
			<div class="space-y-3">
				<p class="text-xs font-semibold tracking-[0.14em] text-flisol-blue-600 uppercase">
					Información del evento
				</p>
				<ul class="space-y-2 text-sm text-slate-700">
					<li class="flex items-center gap-2">
						<CalendarDotsIcon size={18} class="text-flisol-blue-600" />
						Sábado 25 de abril de 2026, 14:00 horas en adelante
					</li>
					<li class="flex items-center gap-2">
						<MapPinIcon size={18} class="text-flisol-blue-600" />
						Universidad Tecnológica Intercontinental UTIC, Caaguazú
					</li>
					<li class="flex items-center gap-2">
						<UsersThreeIcon size={18} class="text-flisol-blue-600" />
						Acceso libre para todos
					</li>
				</ul>
			</div>

			<div class="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
				{#each highlights as item (item.label)}
					<div class="rounded-2xl border border-flisol-blue-300/25 bg-flisol-blue-300/5 px-4 py-3">
						<p class="text-2xl font-semibold text-flisol-blue-600">{item.value}</p>
						<p class="text-xs font-medium text-slate-600">{item.label}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
