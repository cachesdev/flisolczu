<script lang="ts">
	import NumberFlowBase, {
		type Format,
		type NumberFlowElement,
		type Trend,
		type Value
	} from '@number-flow/svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	// INFO: Componente temporal hasta que los maintainers de number-flow reparen el tipado de los props, vease: https://github.com/barvian/number-flow/issues/182

	type NumberFlowBaseProps = {
		value: Value;
		locales?: Intl.LocalesArgument;
		format?: Format;
		prefix?: string;
		suffix?: string;
		nonce?: string;
		willChange?: boolean;
		transformTiming?: NumberFlowElement['transformTiming'];
		spinTiming?: NumberFlowElement['spinTiming'];
		opacityTiming?: NumberFlowElement['opacityTiming'];
		animated?: NumberFlowElement['animated'];
		respectMotionPreference?: NumberFlowElement['respectMotionPreference'];
		trend?: Trend;
		plugins?: NumberFlowElement['plugins'];
		digits?: NumberFlowElement['digits'];
		el?: NumberFlowElement;
	};

	export type NumberFlowProps = NumberFlowBaseProps &
		Omit<HTMLAttributes<HTMLElement>, keyof NumberFlowBaseProps>;

	let {
		value,
		locales,
		format,
		prefix,
		suffix,
		nonce,
		willChange,
		transformTiming,
		spinTiming,
		opacityTiming,
		animated,
		respectMotionPreference,
		trend,
		plugins,
		digits,
		el = $bindable<NumberFlowElement | undefined>(),
		...rest
	}: NumberFlowProps = $props();
</script>

<NumberFlowBase
	{value}
	{locales}
	{format}
	{prefix}
	{suffix}
	{nonce}
	{willChange}
	{transformTiming}
	{spinTiming}
	{opacityTiming}
	{animated}
	{respectMotionPreference}
	{trend}
	{plugins}
	{digits}
	bind:el
	{...rest}
	on:animationsstart
	on:animationsfinish
/>
