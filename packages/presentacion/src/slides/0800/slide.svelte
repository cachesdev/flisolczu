<script lang="ts">
	import { Code, Transition } from '@animotion/core';

	let count = $state(0);
</script>

<Transition>
	<h2 class="text-4xl font-bold text-flisol-blue-600">$state, Reactividad al estilo Svelte</h2>
</Transition>

<div class="mt-8 grid grid-cols-[1fr_1fr] gap-8">
	<div class="space-y-6">
		<Transition>
			<div class="border-emerald-300 rounded-2xl border bg-white p-6 shadow-sm">
				<p class="text-flisol-blue-600 mb-3 text-xs tracking-wider uppercase">Svelte</p>
				<Code
					lang="svelte"
					theme="vitesse-light"
					code={`
            <script>
              let count = $state(0)
            <\/script>

            <button onclick={() => count++}>
              {count}
            </button>
          `}
					options={{ duration: 500, stagger: 0.2, containerStyle: false }}
					class="text-sm"
				/>
			</div>
		</Transition>

		<div class="flex items-center gap-6">
			<button
				onclick={() => count++}
				class="bg-flisol-orange-500 hover:bg-flisol-orange-400 rounded-full px-8 py-4 text-2xl font-bold text-white transition"
			>
				Incrementar
			</button>
			<div class="rounded-2xl border border-slate-200 px-8 py-4">
				<span class="text-5xl font-bold text-slate-800 tabular-nums">
					{count}
				</span>
			</div>
		</div>
	</div>

	<div class="space-y-4">
		<Transition>
			<div class="rounded-xl border border-slate-200 bg-white p-4">
				<p class="text-sm font-semibold text-slate-700">
					React <span class="text-slate-400">— usando useState</span>
				</p>
				<Code
					lang="tsx"
					theme="vitesse-light"
					code={`const [count, setCount] = useState(0)

<button onClick={() => setCount(c => c + 1)}>`}
					options={{ duration: 400, stagger: 0.2, containerStyle: false }}
					class="text-xs"
				/>
			</div>
		</Transition>
		<Transition>
			<div class="rounded-xl border border-slate-200 bg-white p-4">
				<p class="text-sm font-semibold text-slate-700">
					PHP / LAMP <span class="text-slate-400">— sin JS</span>
				</p>
				<Code
					lang="php"
					theme="vitesse-light"
					code={`<?php $count = $_SESSION['count'] ?? 0; ?>
<form method="post">
  <button>Recargar pagina</button>
</form>`}
					options={{ duration: 400, stagger: 0.2, containerStyle: false }}
					class="text-xs"
				/>
			</div>
		</Transition>

		<Transition>
			<div class="border-emerald-200 bg-emerald-50 rounded-xl border p-4">
				<p class="text-emerald-600 text-sm">
					<code class="font-semibold">count</code> es una variable normal — no un getter ni setter.
					La reactividad está <em>compilada</em>.
				</p>
			</div>
		</Transition>
	</div>
</div>
