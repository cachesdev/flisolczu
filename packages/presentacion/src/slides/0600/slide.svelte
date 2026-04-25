<script lang="ts">
	import { Transition } from '@animotion/core';
</script>

<Transition>
	<h2 class="text-4xl font-bold text-flisol-blue-600">Comparativa de stacks</h2>
</Transition>

<div class="mt-8 grid grid-cols-4 gap-5">
	<Transition order={1}>
		<div class="rounded-2xl border border-flisol-blue-300/15 bg-white p-5 shadow-sm">
			<p class="text-lg font-bold text-slate-500">LAMP</p>
			<ul class="mt-3 ml-2 space-y-2 text-sm leading-snug text-slate-500">
				<li>Apache + PHP</li>
				<li>mysqli / PDO</li>
				<li>Vanilla JS / jQuery</li>
				<li>Recarga de pagina</li>
				<li>$_SESSION + cookies</li>
				<li>SQL manual</li>
				<li>Validacion manual</li>
				<li class="text-flisol-orange-400/60">Sin type safety</li>
			</ul>
		</div>
	</Transition>

	<Transition order={2}>
		<div class="rounded-2xl border border-flisol-blue-300/15 bg-white p-5 shadow-sm">
			<p class="text-lg font-bold text-slate-500">Laravel</p>
			<ul class="mt-3 ml-2 space-y-2 text-sm leading-snug text-slate-500">
				<li>PHP-FPM + Artisan</li>
				<li>Eloquent ORM</li>
				<li>Blade + Alpine/Inertia</li>
				<li>Livewire (AJAX)</li>
				<li>Cache / Sesion</li>
				<li>artisan migrate</li>
				<li>Form Requests</li>
				<li class="text-flisol-orange-400/60">Type safety parcial</li>
			</ul>
		</div>
	</Transition>

	<Transition order={3}>
		<div class="rounded-2xl border border-flisol-blue-300/15 bg-white p-5 shadow-sm">
			<p class="text-lg font-bold text-slate-500">Next.js</p>
			<ul class="mt-3 ml-2 space-y-2 text-sm leading-snug text-slate-500">
				<li>Node.js / Vercel/Edge</li>
				<li>React + JSX</li>
				<li>useState / useReducer</li>
				<li>Context / Zustand</li>
				<li class="text-emerald-600/60">TS + prisma types</li>
			</ul>
		</div>
	</Transition>

	<Transition order={4}>
		<div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm">
			<p class="text-emerald-700 text-lg font-bold">SvelteKit</p>
			<ul class="text-emerald-600 mt-3 ml-2 space-y-2 text-sm leading-snug">
				<li>Node.js (o cualquier cloud, incluido vercel)</li>
				<li>Drizzle ORM</li>
				<li>Svelte 5 (compilado)</li>
				<li>$state (compilado)</li>
				<li>clases .svelte.ts</li>
				<li>node-pg-migrate</li>
				<li>Valibot</li>
			</ul>
		</div>
	</Transition>
</div>
