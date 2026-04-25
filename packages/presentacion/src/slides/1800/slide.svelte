<script lang="ts">
	import { Code, Transition } from '@animotion/core';

	let mode = $state<'a' | 'b' | 'c'>('a');

	const boxClasses = $derived(
		mode === 'a'
			? 'rounded-none bg-gray-500 scale-100'
			: mode === 'b'
				? 'rounded-3xl bg-flisol-blue-600 scale-110'
				: 'rounded-3xl bg-flisol-orange-500 scale-100 rotate-6'
	);
</script>

<Transition>
	<h2 class="text-4xl font-bold text-flisol-blue-600">Tailwind CSS 4</h2>
	<p class="mt-2 text-lg text-slate-600">Utility-first -- CSS sin hojas de estilo separadas</p>
</Transition>

<div class="mt-10 grid grid-cols-2 items-center gap-8">
	<div class="space-y-4">
		<Transition>
			<p class="text-base text-slate-700">
				En vez de escribir 10 lineas de CSS con nombres de clases inventados:
			</p>
		</Transition>
		<Transition>
			<div
				class="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-12"
			>
				<div
					class="grid h-40 w-40 place-content-center {boxClasses} font-bold text-white transition-all duration-700"
				>
					FLISOL
				</div>
			</div>
		</Transition>
		<Transition>
			<div class="flex gap-3">
				<button
					onclick={() => (mode = 'b')}
					class="bg-flisol-blue-600/30 text-flisol-blue-300 hover:bg-flisol-blue-600/40 cursor-pointer rounded-lg px-3 py-1.5 text-xs"
					>Tailwind</button
				>
				<button
					onclick={() => (mode = 'c')}
					class="bg-flisol-orange-500/30 text-flisol-orange-400 hover:bg-flisol-orange-500/40 cursor-pointer rounded-lg px-3 py-1.5 text-xs"
					>+ Variantes</button
				>
			</div>
		</Transition>
	</div>

	<div class="space-y-4">
		<Transition>
			<div class="border-emerald-200 bg-emerald-50 rounded-xl border p-5">
				<p class="text-emerald-600 text-sm font-semibold">Ventajas clave</p>
				<ul class="mt-3 space-y-2 text-sm text-slate-600">
					<li class="flex items-center gap-2">
						<span class="text-emerald-600">+</span> Consistencia visual en todo el proyecto
					</li>
					<li class="flex items-center gap-2">
						<span class="text-emerald-600">+</span> Design system implicito -- sin archivos de diseno
					</li>
					<li class="flex items-center gap-2">
						<span class="text-emerald-600">+</span> Responsive nativo:
						<code class="rounded bg-white px-1">sm:</code>,
						<code class="rounded bg-white px-1">md:</code>,
						<code class="rounded bg-white px-1">lg:</code>
					</li>
					<li class="flex items-center gap-2">
						<span class="text-emerald-600">+</span> Motor CSS nativo (v4) -- sin PostCSS
					</li>
					<li class="flex items-center gap-2">
						<span class="text-emerald-600">+</span> Tree-shaking automatico en produccion
					</li>
				</ul>
			</div>
		</Transition>

		<Transition>
			<div class="rounded-xl border border-slate-200 bg-white p-5">
				<p class="mb-2 text-sm font-semibold text-slate-700">El codigo</p>
				<Code
					lang="html"
					theme="vitesse-light"
					code={`<div class="flex items-center justify-center
     rounded-3xl bg-flisol-blue-600
     p-12 text-white font-bold">
  FLISOL
</div>`}
					options={{ duration: 400, stagger: 0.2, containerStyle: false }}
					class="text-sm"
				/>
			</div>
		</Transition>
	</div>
</div>
