<script lang="ts">
	import { onMount } from 'svelte';
	import NumberFlow from '$lib/components/number-flow.svelte';
	import { eventState } from '$lib/state/event.svelte';

	const TWO_DIGITS = { minimumIntegerDigits: 2, useGrouping: false } as const;

	onMount(() => {
		eventState.startTicking();
		return () => eventState.stopTicking();
	});
</script>

<div>
	<h2 class="mb-4 text-sm font-semibold tracking-[0.16em] text-flisol-blue-600 uppercase">
		Cuenta regresiva
	</h2>
	<section
		class="relative overflow-hidden rounded-3xl border border-flisol-blue-300/20 bg-white/85 p-4 sm:rounded-[calc(var(--radius-card)+8px)] sm:border-flisol-blue-300/35 sm:bg-white/92 sm:p-7 sm:shadow-sm"
	>
		<div
			class="pointer-events-none absolute -top-18 -right-12 h-44 w-44 rounded-full bg-flisol-lime-400/24 blur-3xl"
		></div>
		<div
			class="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-flisol-blue-300/18 blur-3xl"
		></div>

		<div class="relative">
			<div
				class="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3"
				role="timer"
				aria-label="Tiempo restante para el inicio del FLISOL 2026 Caaguazú"
			>
				{#each [{ value: eventState.countdown.days, label: 'Días', format: { useGrouping: false } }, { value: eventState.countdown.hours, label: 'Horas', format: TWO_DIGITS }, { value: eventState.countdown.minutes, label: 'Minutos', format: TWO_DIGITS }, { value: eventState.countdown.seconds, label: 'Segundos', format: TWO_DIGITS }] as { value, label, format } (label)}
					<div
						class="rounded-2xl border border-flisol-blue-300/25 bg-white px-3 py-3 text-center sm:px-4 sm:py-4 sm:shadow-sm"
					>
						<p class="text-3xl leading-none font-semibold text-flisol-blue-600 sm:text-5xl">
							<NumberFlow {value} {format} />
						</p>
						<p class="mt-2 text-[0.65rem] font-semibold tracking-[0.14em] text-slate-500 uppercase">
							{label}
						</p>
					</div>
				{/each}
			</div>

			{#if eventState.hasStarted}
				<p
					class="mt-2 rounded-xl border border-flisol-lime-400/60 bg-flisol-lime-400/20 px-4 py-3 text-sm font-medium text-slate-800"
				>
					El evento ya comenzó. Te esperamos en la sede.
				</p>
			{/if}
		</div>
	</section>
</div>
