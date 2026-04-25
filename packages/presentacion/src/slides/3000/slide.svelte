<script lang="ts">
	import { Code, Transition } from '@animotion/core';
</script>

<Transition>
	<h2 class="text-4xl font-bold text-flisol-blue-600">Docker + Deploy</h2>
	<p class="mt-2 text-lg text-slate-600">Dev local · VPS · Railway</p>
</Transition>

<div class="mt-8 grid grid-cols-2 gap-6">
	<Transition>
		<div class="border-flisol-blue-400/25 rounded-2xl border bg-white p-5 shadow-sm">
			<p class="text-flisol-blue-300 mb-3 text-xs tracking-wider uppercase">Dev — docker compose</p>
			<Code
				lang="bash"
				theme="vitesse-light"
				code={`# Desarrollo local
pnpm docker:dev:up      # Levanta DB
pnpm dev                 # Vite HMR
pnpm docker:dev:down     # Baja todo`}
				options={{ duration: 400, stagger: 0.2, containerStyle: false }}
				class="text-sm"
			/>
		</div>
	</Transition>

	<Transition>
		<div class="border-flisol-orange-500/25 rounded-2xl border bg-white p-5 shadow-sm">
			<p class="text-flisol-orange-400 mb-3 text-xs tracking-wider uppercase">Prod</p>
			<Code
				lang="bash"
				theme="vitesse-light"
				code={`# Build y deploy
pnpm docker:prod:build   # Imagen Node.js
pnpm docker:prod:up      # Levanta en VPS

# Alternativa: Railway
# Conectás el repo y hace deploy
`}
				options={{ duration: 400, stagger: 0.2, containerStyle: false }}
				class="text-sm"
			/>
		</div>
	</Transition>
</div>
