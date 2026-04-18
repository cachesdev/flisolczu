<script lang="ts">
	import { onMount } from 'svelte';
	import NumberFlow from '$lib/components/number-flow.svelte';

	const EVENT_TIME_ZONE = 'America/Asuncion';
	const SECOND_MS = 1000;
	const MINUTE_MS = 60 * SECOND_MS;
	const HOUR_MS = 60 * MINUTE_MS;
	const DAY_MS = 24 * HOUR_MS;

	type DatePartName = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second';

	const getZonedParts = (timestamp: number, timeZone: string): Record<DatePartName, number> => {
		const formatter = new Intl.DateTimeFormat('en-CA', {
			timeZone,
			hourCycle: 'h23',
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit'
		});

		const values: Record<DatePartName, number> = {
			year: 0,
			month: 0,
			day: 0,
			hour: 0,
			minute: 0,
			second: 0
		};

		for (const part of formatter.formatToParts(new Date(timestamp))) {
			if (part.type in values) {
				const key = part.type as DatePartName;
				values[key] = Number(part.value);
			}
		}

		return values;
	};

	const getOffsetMs = (timestamp: number, timeZone: string): number => {
		const zoned = getZonedParts(timestamp, timeZone);
		const asUtcTimestamp = Date.UTC(
			zoned.year,
			zoned.month - 1,
			zoned.day,
			zoned.hour,
			zoned.minute,
			zoned.second
		);

		return asUtcTimestamp - timestamp;
	};

	const getUtcTimestampForZonedDateTime = (dateTime: {
		year: number;
		month: number;
		day: number;
		hour: number;
		minute: number;
		second: number;
		timeZone: string;
	}): number => {
		const utcGuess = Date.UTC(
			dateTime.year,
			dateTime.month - 1,
			dateTime.day,
			dateTime.hour,
			dateTime.minute,
			dateTime.second
		);

		const initialOffset = getOffsetMs(utcGuess, dateTime.timeZone);
		let exactTimestamp = utcGuess - initialOffset;
		const correctedOffset = getOffsetMs(exactTimestamp, dateTime.timeZone);

		if (correctedOffset !== initialOffset) {
			exactTimestamp = utcGuess - correctedOffset;
		}

		return exactTimestamp;
	};

	const EVENT_START_MS = getUtcTimestampForZonedDateTime({
		year: 2026,
		month: 4,
		day: 25,
		hour: 14,
		minute: 0,
		second: 0,
		timeZone: EVENT_TIME_ZONE
	});

	type CountdownState = {
		ended: boolean;
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
	};

	const EMPTY_COUNTDOWN: CountdownState = {
		ended: false,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	};

	const getCountdownState = (targetMs: number, nowMs = Date.now()): CountdownState => {
		const diff = Math.max(targetMs - nowMs, 0);

		return {
			ended: diff === 0,
			days: Math.floor(diff / DAY_MS),
			hours: Math.floor((diff % DAY_MS) / HOUR_MS),
			minutes: Math.floor((diff % HOUR_MS) / MINUTE_MS),
			seconds: Math.floor((diff % MINUTE_MS) / SECOND_MS)
		};
	};

	const TWO_DIGITS_FORMAT = { minimumIntegerDigits: 2, useGrouping: false } as const;

	let countdown = $state<CountdownState | null>(null);
	const countdownDisplay = $derived(countdown ?? EMPTY_COUNTDOWN);

	onMount(() => {
		const tick = () => {
			countdown = getCountdownState(EVENT_START_MS);
		};

		tick();
		const intervalId = window.setInterval(tick, SECOND_MS);

		return () => {
			window.clearInterval(intervalId);
		};
	});
</script>

<section
	id="cuenta-regresiva"
	class="relative overflow-hidden rounded-[calc(var(--radius-card)+8px)] border border-flisol-blue-300/35 bg-white/92 p-6 shadow-sm sm:p-7"
>
	<div
		class="pointer-events-none absolute -top-18 -right-12 h-44 w-44 rounded-full bg-flisol-lime-400/24 blur-3xl"
	></div>
	<div
		class="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-flisol-blue-300/18 blur-3xl"
	></div>

	<div class="relative">
		<h2 class="mb-2 text-sm font-semibold tracking-[0.16em] text-flisol-blue-600 uppercase">
			Countdown
		</h2>

		<div
			class="grid grid-cols-2 gap-3 sm:grid-cols-4"
			role="timer"
			aria-label="Tiempo restante para el inicio del FLISOL 2026 Caaguazú"
		>
			<div
				class="rounded-2xl border border-flisol-blue-300/30 bg-white px-4 py-4 text-center shadow-sm"
			>
				<p class="text-4xl leading-none font-semibold text-flisol-blue-600 sm:text-5xl">
					<NumberFlow value={countdownDisplay.days} format={{ useGrouping: false }} />
				</p>
				<p class="mt-2 text-[0.65rem] font-semibold tracking-[0.14em] text-slate-500 uppercase">
					Días
				</p>
			</div>

			<div
				class="rounded-2xl border border-flisol-blue-300/30 bg-white px-4 py-4 text-center shadow-sm"
			>
				<p class="text-4xl leading-none font-semibold text-flisol-blue-600 sm:text-5xl">
					<NumberFlow value={countdownDisplay.hours} format={TWO_DIGITS_FORMAT} />
				</p>
				<p class="mt-2 text-[0.65rem] font-semibold tracking-[0.14em] text-slate-500 uppercase">
					Horas
				</p>
			</div>

			<div
				class="rounded-2xl border border-flisol-blue-300/30 bg-white px-4 py-4 text-center shadow-sm"
			>
				<p class="text-4xl leading-none font-semibold text-flisol-blue-600 sm:text-5xl">
					<NumberFlow value={countdownDisplay.minutes} format={TWO_DIGITS_FORMAT} />
				</p>
				<p class="mt-2 text-[0.65rem] font-semibold tracking-[0.14em] text-slate-500 uppercase">
					Minutos
				</p>
			</div>

			<div
				class="rounded-2xl border border-flisol-blue-300/30 bg-white px-4 py-4 text-center shadow-sm"
			>
				<p class="text-4xl leading-none font-semibold text-flisol-blue-600 sm:text-5xl">
					<NumberFlow value={countdownDisplay.seconds} format={TWO_DIGITS_FORMAT} />
				</p>
				<p class="mt-2 text-[0.65rem] font-semibold tracking-[0.14em] text-slate-500 uppercase">
					Segundos
				</p>
			</div>
		</div>

		{#if countdownDisplay.ended}
			<p
				class="mt-2 rounded-xl border border-flisol-lime-400/60 bg-flisol-lime-400/20 px-4 py-3 text-sm font-medium text-slate-800"
			>
				El evento ya comenzó. Te esperamos en la sede.
			</p>
		{/if}
	</div>
</section>
