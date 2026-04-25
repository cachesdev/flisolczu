<script lang="ts">
	import { Transition } from '@animotion/core';
</script>

<Transition>
	<h2 class="text-4xl font-bold text-flisol-blue-600">Theme tokens FLISOL</h2>
	<p class="mt-2 text-lg text-slate-600">Consistencia visual entre el sitio y esta presentación</p>
</Transition>

<div class="mt-10 grid grid-cols-3 gap-6">
	{#each [{ name: 'flisol-blue-600', value: 'rgb(0 44 128)', label: 'Azul oscuro', tailwind: 'bg-flisol-blue-600' }, { name: 'flisol-blue-400', value: 'rgb(0 85 212)', label: 'Azul medio', tailwind: 'bg-flisol-blue-400' }, { name: 'flisol-blue-300', value: 'rgb(0 113 222)', label: 'Azul claro', tailwind: 'bg-flisol-blue-300' }, { name: 'flisol-lime-400', value: 'rgb(204 255 0)', label: 'Verde lima', tailwind: 'bg-flisol-lime-400' }, { name: 'flisol-orange-400', value: 'rgb(255 163 65)', label: 'Naranja claro', tailwind: 'bg-flisol-orange-400' }, { name: 'flisol-orange-500', value: 'rgb(255 142 42)', label: 'Naranja', tailwind: 'bg-flisol-orange-500' }] as { name, value, label, tailwind }}
		<Transition>
			<div class="rounded-2xl border border-slate-200 bg-white p-5">
				<div class="h-16 rounded-xl bg-{name}"></div>
				<p class="mt-3 text-sm font-semibold text-slate-700">{label}</p>
				<p class="font-mono text-xs text-slate-400">{value}</p>
				<code class="mt-1 inline-block rounded bg-white px-2 py-0.5 text-xs text-slate-500"
					>{tailwind}</code
				>
			</div>
		</Transition>
	{/each}
</div>
