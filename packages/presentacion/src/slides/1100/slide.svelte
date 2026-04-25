<script lang="ts">
	import { Code, Transition } from '@animotion/core';
</script>

<Transition>
	<h2 class="text-4xl font-bold text-flisol-blue-600">$props + snippets</h2>
</Transition>

<div class="mt-8 grid grid-cols-2 gap-6">
	<Transition order={1}>
		<div class="border-flisol-blue-400/25 rounded-xl border bg-white p-5 shadow-sm">
			<p class="text-flisol-blue-300 mb-3 text-xs tracking-wider uppercase">Svelte 5 — $props()</p>
			<Code
				lang="svelte"
				theme="vitesse-light"
				code={`<script lang="ts">
  let { title, count }: {
    title: string, count: number
  } = $props()
<\/script>

<h2>{title}</h2>
<p>Total: {count}</p>

<Card title="Evento" count={42} />`}
				options={{ duration: 400, stagger: 0.2, containerStyle: false }}
				class="text-sm"
			/>
		</div>
	</Transition>

	<Transition order={2}>
		<div class="rounded-xl border border-slate-200 bg-white p-5">
			<p class="mb-3 text-xs tracking-wider text-slate-500 uppercase">React — interface + FC</p>
			<Code
				lang="tsx"
				theme="vitesse-light"
				code={`interface CardProps {
  title: string
  count: number
}

const Card: React.FC<CardProps> = ({
  title, count
}) => {
  return <div>...</div>
}`}
				options={{ duration: 400, stagger: 0.2, containerStyle: false }}
				class="text-sm"
			/>
		</div>
	</Transition>

	<Transition order={3}>
		<div class="border-flisol-orange-500/25 rounded-xl border bg-white p-5 shadow-sm">
			<p class="text-flisol-orange-400 mb-3 text-xs tracking-wider uppercase">
				Snippets — reemplazan slots
			</p>
			<Code
				lang="svelte"
				theme="vitesse-light"
				code={`{#snippet header()}
  <h2>FLISOL 2026</h2>
{/snippet}

<Card>
  {@render header()}
</Card>`}
				options={{ duration: 400, stagger: 0.2, containerStyle: false }}
				class="text-sm"
			/>
		</div>
	</Transition>

	<Transition order={4}>
		<div class="rounded-xl border border-slate-200 bg-white p-5">
			<p class="mb-3 text-xs tracking-wider text-slate-500 uppercase">Laravel Blade — @yield</p>
			<Code
				lang="php"
				theme="vitesse-light"
				code={`{{-- layout --}}
@section('header')
  <h2>FLISOL 2026</h2>
@endsection

@yield('header')`}
				options={{ duration: 400, stagger: 0.2, containerStyle: false }}
				class="text-sm"
			/>
		</div>
	</Transition>
</div>
