<script lang="ts">
	import { Code, Transition } from '@animotion/core';
</script>

<Transition>
	<h2 class="text-4xl font-bold text-flisol-blue-600">Seguridad: GeoIP + Rate Limiting</h2>
</Transition>

<div class="mt-8 grid grid-cols-3 gap-5">
	<Transition order={1} class="border-flisol-blue-400/25 rounded-2xl border bg-white p-5 shadow-sm">
		<div class="mb-3 flex items-center gap-2">
			<span
				class="bg-flisol-blue-400/20 text-flisol-blue-300 flex h-8 w-8 items-center justify-center rounded-full font-bold"
				>1</span
			>
			<p class="text-flisol-blue-300 text-lg font-semibold">GeoIP</p>
		</div>
<p class="text-sm text-slate-600">
		<code class="rounded bg-white px-1">getCountryFromIP(event)</code> detecta el país de
		origen. Solo permite Paraguay (<code class="rounded bg-white px-1">PY</code>). Usa la IP
		real del cliente detrás de proxies (Railway, Cloudflare).
	</p>
	</Transition>

	<Transition order={2} class="border-flisol-orange-500/25 rounded-2xl border bg-white p-5 shadow-sm">
		<div class="mb-3 flex items-center gap-2">
			<span
				class="bg-flisol-orange-400/20 text-flisol-orange-400 flex h-8 w-8 items-center justify-center rounded-full font-bold"
				>2</span
			>
			<p class="text-flisol-orange-400 text-lg font-semibold">Rate Limit</p>
		</div>
<p class="text-sm text-slate-600">
		<code class="rounded bg-white px-1">rate-limiter-flexible</code> persistido, no en memoria. Key
		por IP. 15 minutos de cooldown tras múltiples intentos. Sobrevive reinicios y deploys.
	</p>
	</Transition>

	<Transition order={3} class="border-emerald-200 rounded-2xl border bg-white p-5 shadow-sm">
		<div class="mb-3 flex items-center gap-2">
			<span class="bg-emerald-100 text-emerald-700 flex h-8 w-8 items-center justify-center rounded-full font-bold">3</span>
			<p class="text-emerald-700 text-lg font-semibold">Valibot</p>
		</div>
		<p class="text-sm text-slate-600">
		Schema validation antes de cualquier operación de DB. Mismo schema en frontend (preflight) y
		backend (handler).
	</p>
	</Transition>
</div>
