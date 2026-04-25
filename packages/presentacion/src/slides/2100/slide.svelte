<script lang="ts">
	import { Transition } from '@animotion/core';
</script>

<Transition>
	<h2 class="text-4xl font-bold text-flisol-blue-600">Por que migraciones?</h2>
</Transition>

<div class="mt-10 grid grid-cols-2 gap-8">
	<Transition order={1}>
		<div class="border-flisol-orange-500/25 bg-flisol-orange-400/10 rounded-2xl border p-6">
			<p class="text-flisol-orange-400 text-xl font-semibold">Sin migraciones</p>
			<ul class="mt-4 space-y-3 text-base text-slate-700">
				<li class="flex items-start gap-2">
					<span>phpMyAdmin manual -- "ALTER TABLE y rezar"</span>
				</li>
				<li class="flex items-start gap-2">
					<span>"Che, pasame el script SQL por WhatsApp"</span>
				</li>
				<li class="flex items-start gap-2">
					<span>Drift entre dev, staging y produccion</span>
				</li>
				<li class="flex items-start gap-2">
					<span>Sin rollback -- errores en prod sin vuelta atras</span>
				</li>
			</ul>
		</div>
	</Transition>

	<Transition order={2}>
		<div class="border-emerald-200 bg-emerald-50 rounded-2xl border p-6">
			<p class="text-emerald-700 text-xl font-semibold">Con migraciones</p>
			<ul class="mt-4 space-y-3 text-base text-slate-700">
				<li class="flex items-start gap-2">
					<span>Cada cambio de schema es un archivo versionado en git</span>
				</li>
				<li class="flex items-start gap-2">
					<span
						>Rollback con <code class="rounded bg-white px-1">down</code> -- errores son seguros</span
					>
				</li>
				<li class="flex items-start gap-2">
					<span>3 devs sincronizados sin scripts manuales</span>
				</li>
				<li class="flex items-start gap-2">
					<span>CI/CD ejecuta migraciones automaticamente en deploy</span>
				</li>
			</ul>
		</div>
	</Transition>
</div>

<Transition class="mt-8 text-center">
	<p class="text-lg text-slate-500">
		En Laravel, <code class="rounded bg-white px-1">php artisan migrate</code> es el gold
		standard.
		<span class="text-emerald-600">Con node-pg-migrate tenes lo mismo en Node.js.</span>
	</p>
</Transition>
