<script lang="ts">
	import NumberFlow from './number-flow.svelte';
	const EVENT_START_MS = Date.parse('2026-04-26T14:00:00-03:00');
	const SECOND_MS = 1000;
	const TWO_DIGITS = { minimumIntegerDigits: 2, useGrouping: false } as const;

	let now = $state(Date.now());

	$effect(() => {
		const interval = setInterval(() => {
			now = Date.now();
		}, SECOND_MS);
		return () => clearInterval(interval);
	});

	const countdown = $derived.by(() => {
		const ms = Math.max(EVENT_START_MS - now, 0);
		return {
			days: Math.floor(ms / 86400000),
			hours: Math.floor((ms % 86400000) / 3600000),
			minutes: Math.floor((ms % 3600000) / 60000),
			seconds: Math.floor((ms % 60000) / 1000)
		};
	});

	const hasStarted = $derived(now >= EVENT_START_MS);
</script>

<div>
	<h2 class="text-flisol-blue-600 mb-4 text-sm font-semibold tracking-[0.16em] uppercase">
		Cuenta regresiva
	</h2>
	<section
		class="border-flisol-blue-300/20 relative overflow-hidden rounded-3xl border bg-white p-4 sm:p-7"
	>
		<div
			class="bg-flisol-lime-400/15 pointer-events-none absolute -top-18 -right-12 h-44 w-44 rounded-full blur-3xl"
		></div>
		<div
			class="bg-flisol-blue-300/10 pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full blur-3xl"
		></div>

		<div class="relative">
			<div class="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3" role="timer">
				{#each [{ value: countdown.days, label: 'Dias', format: { useGrouping: false } }, { value: countdown.hours, label: 'Horas', format: TWO_DIGITS }, { value: countdown.minutes, label: 'Minutos', format: TWO_DIGITS }, { value: countdown.seconds, label: 'Segundos', format: TWO_DIGITS }] as unit (unit.label)}
					<div
						class="border-flisol-blue-300/20 rounded-2xl border bg-white px-3 py-3 text-center shadow-sm sm:px-4 sm:py-4"
					>
						<p
							class="text-flisol-blue-600 text-3xl leading-none font-semibold tabular-nums sm:text-5xl"
						>
							<NumberFlow value={unit.value.toLocaleString('es-PY', unit.format)} />
						</p>
						<p class="mt-2 text-[0.65rem] font-semibold tracking-[0.14em] text-slate-500 uppercase">
							{unit.label}
						</p>
					</div>
				{/each}
			</div>

			{#if hasStarted}
				<p
					class="mt-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-slate-800"
				>
					El evento ya comenzo. Te esperamos en la sede.
				</p>
			{/if}
		</div>
	</section>
</div>
