<script lang="ts">
	import { CalendarDotsIcon, MapPinIcon, UsersThreeIcon } from 'phosphor-svelte';
	import LogoHero from '$lib/assets/logo-hero.svg';
	import { MediaQuery } from 'svelte/reactivity';

	const sm = new MediaQuery('min-width: 640px');

	const eventInfo = [
		{
			label: 'Fecha y horario',
			value: 'Sábado 25 de abril de 2026, 14:00 horas en adelante',
			icon: CalendarDotsIcon
		},
		{
			label: 'Sede',
			value: 'Universidad Tecnológica Intercontinental UTIC, Caaguazú',
			icon: MapPinIcon
		},
		{
			label: 'Acceso',
			value: 'Acceso libre para todos',
			icon: UsersThreeIcon
		}
	] as const;

	const highlights = [
		{ label: 'Asistentes esperados', value: '100+' },
		{ label: 'Charlas, talleres y stands', value: '10' },
		{ label: 'Organizaciones invitadas', value: '4' }
	] as const;
</script>

<section
	class="relative overflow-hidden rounded-3xl border border-flisol-blue-600/20 bg-linear-to-br from-white via-white to-flisol-blue-300/8 px-4 py-6 sm:rounded-[calc(var(--radius-card)+10px)] sm:p-10 sm:shadow-xl"
>
	<div
		class="pointer-events-none absolute -top-20 -left-16 h-56 w-56 rounded-full bg-flisol-lime-400/26 blur-3xl"
	></div>
	<div
		class="pointer-events-none absolute right-0 -bottom-24 h-64 w-64 rounded-full bg-flisol-orange-400/26 blur-3xl"
	></div>
	<div class="hero-lines pointer-events-none absolute inset-0 opacity-70"></div>
	<div
		class="pointer-events-none absolute inset-y-0 right-0 hidden w-[38%] bg-linear-to-l from-flisol-blue-600/8 to-transparent sm:block"
	></div>

	<div class="relative grid gap-7 sm:gap-10 lg:grid-cols-2 lg:items-center">
		<div class="space-y-5 sm:space-y-6">
			<div class="flex flex-col space-y-4">
				<img
					src={LogoHero}
					alt="Logo de FLISOL Caaguazu 2026"
					class="w-full max-w-86 self-center sm:w-130 sm:max-w-none"
				/>
				<p class="max-w-[58ch] text-base leading-relaxed text-slate-700 sm:text-lg">
					Un día para aprender, compartir y construir comunidad alrededor del software libre.
					{sm.current
						? 'Conecta con estudiantes, profesionales y veni a aprender de charlas, talleres y actividades prácticas sobre tecnología abierta.'
						: ''}
				</p>
			</div>

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

		<div class="lg:pl-4">
			<aside
				class="h-full p-0 sm:rounded-[calc(var(--radius-card)+6px)] sm:border sm:border-flisol-blue-600/25 sm:bg-white/95 sm:p-7 sm:shadow-md"
			>
				<h2 class="text-xl leading-tight font-semibold text-slate-900 sm:text-2xl">
					Información del evento
				</h2>

				<dl class="mt-5 divide-y divide-flisol-blue-300/30 border-y border-flisol-blue-300/30">
					{#each eventInfo as item (item.label)}
						{@const Icon = item.icon}
						<div class="grid grid-cols-[2rem_1fr] items-start gap-3 py-2.5 sm:py-3">
							<div
								class="grid h-8 w-8 place-items-center rounded-lg bg-flisol-blue-300/10 text-flisol-blue-600"
							>
								<Icon size={17} weight="duotone" />
							</div>
							<div>
								<dt class="text-[0.62rem] font-semibold tracking-[0.14em] text-slate-500 uppercase">
									{item.label}
								</dt>
								<dd class="mt-1 text-sm leading-relaxed text-slate-800">{item.value}</dd>
							</div>
						</div>
					{/each}
				</dl>

				<div class="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
					{#each highlights as item (item.label)}
						<div
							class="rounded-xl border border-flisol-blue-300/25 bg-white/80 px-3 py-3 sm:bg-white/85"
						>
							<p class="text-2xl leading-none font-semibold text-flisol-blue-600">{item.value}</p>
							<p class="mt-1 text-xs font-medium text-slate-600">{item.label}</p>
						</div>
					{/each}
				</div>
			</aside>
		</div>
	</div>
</section>

<style>
	.hero-lines {
		background-image: repeating-linear-gradient(
			115deg,
			color-mix(in oklab, var(--flisol-blue-300) 11%, transparent) 0 1px,
			transparent 1px 18px
		);
		mask-image: linear-gradient(180deg, rgb(0 0 0 / 0.92), rgb(0 0 0 / 0.4) 60%, transparent 85%);
	}
</style>
