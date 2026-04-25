<script lang="ts">
	import { Code, Transition } from '@animotion/core';

	let code: ReturnType<typeof Code>;
</script>

<Transition>
	<h2 class="text-4xl font-bold text-flisol-blue-600">$derived, Valores computados</h2>
</Transition>

<div class="mt-8 grid grid-cols-2 gap-8">
	<div>
		<Transition>
			<div class="border-emerald-300 rounded-2xl border bg-white p-5 shadow-sm">
				<p class="text-flisol-blue-600 mb-3 text-xs tracking-wider uppercase">Svelte 5</p>
				<Code
					bind:this={code}
					lang="svelte"
					theme="vitesse-light"
					code={`
            <script>
              let count = $state(0)
              let double = $derived(count * 2)
            <\/script>

            <p>{count} x 2 = {double}</p>
          `}
					options={{ duration: 500, stagger: 0.2, containerStyle: false }}
					class="text-sm"
				/>
			</div>
		</Transition>
	</div>

	<div class="space-y-4">
		<Transition>
		<div class="rounded-xl border border-slate-200 bg-white p-4">
			<p class="mb-2 text-xs tracking-wider text-slate-500 uppercase">React — useMemo</p>
				<Code
					lang="ts"
					theme="vitesse-light"
					code={`const double = useMemo(() => count * 2, [count])`}
					options={{ duration: 400, stagger: 0.2, containerStyle: false }}
					class="text-xs"
				/>
			</div>
		</Transition>

		<Transition>
		<div class="rounded-xl border border-slate-200 bg-white p-4">
			<p class="mb-2 text-xs tracking-wider text-slate-500 uppercase">Laravel Livewire</p>
				<Code
					lang="php"
					theme="vitesse-light"
					code={`public function getDoubleProperty() {
  return $this->count * 2;
}`}
					options={{ duration: 400, stagger: 0.2, containerStyle: false }}
					class="text-xs"
				/>
			</div>
		</Transition>
	</div>
</div>

<Transition class="mt-6 text-center">
	<div class="border-emerald-200 bg-emerald-50 rounded-xl border p-4">
		<p class="text-emerald-600 text-base">
		<code class="rounded bg-white px-1 font-semibold">$derived</code> solo se recalcula si
		<code class="rounded bg-white px-1">count</code> cambia, granularidad exacta, sin arrays de dependencias
			manuales.
		</p>
	</div>
</Transition>
