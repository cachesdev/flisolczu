<script lang="ts">
	import { Transition } from '@animotion/core';
	import NumberFlow from '$lib/demos/number-flow.svelte';
	import TextMorph from '../../../node_modules/torph/dist/svelte/TextMorph.svelte';

	let morphText = $state('FLISOL');
	let counterValue = $state(0);

	async function cycleText() {
		const texts = ['FLISOL', 'Caaguazu', '2026', 'Paraguay'];
		for (const t of texts) {
			await new Promise((r) => setTimeout(r, 600));
			morphText = t;
		}
	}

	function bumpCounter() {
		counterValue += 42;
	}
</script>

<Transition>
	<h2 class="text-4xl font-bold text-flisol-blue-600">Librerias de animacion</h2>
</Transition>

<div class="mt-10 grid grid-cols-2 gap-6">
	<Transition
		order={1}
		class="border-flisol-blue-400/25 rounded-2xl border bg-white p-6 text-center shadow-sm"
	>
		<p class="text-flisol-blue-300 text-lg font-semibold">NumberFlow</p>
		<div class="mt-4 text-5xl font-bold text-slate-800 tabular-nums">
			<NumberFlow value={counterValue} />
		</div>
		<p class="mt-3 text-sm text-slate-500">Digitos animados para contadores</p>
		<button
			onclick={bumpCounter}
			class="bg-flisol-blue-400/20 text-flisol-blue-300 hover:bg-flisol-blue-400/30 mt-3 cursor-pointer rounded-lg px-4 py-2 text-sm"
		>
			Sumar 42
		</button>
	</Transition>

	<Transition
		order={2}
		class="border-emerald-200 rounded-2xl border bg-white p-6 text-center shadow-sm"
	>
		<p class="text-emerald-700 text-lg font-semibold">TextMorph (torph)</p>
		<p class="mt-4 text-4xl font-bold text-slate-800">
			<TextMorph text={morphText} />
		</p>
		<p class="mt-3 text-sm text-slate-500">Transiciones suaves de texto</p>
		<button
			onclick={cycleText}
			class="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 mt-3 cursor-pointer rounded-lg px-4 py-2 text-sm"
		>
			Ciclar texto
		</button>
	</Transition>
</div>

<style>
	@keyframes bounce {
		to {
			transform: translateY(16px);
			opacity: 0.3;
		}
	}
</style>
