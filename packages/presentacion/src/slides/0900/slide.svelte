<script lang="ts">
	import { Code, Transition } from '@animotion/core';

	let todos = $state([
		{ text: 'Preparar el evento', done: true },
		{ text: 'Conseguir patrocinadores', done: true },
		{ text: 'Desplegar el sitio', done: true },
		{ text: 'Vender certificados', done: false }
	]);

	let newTodo = $state('');

	function addTodo() {
		todos.push({ text: newTodo.trim(), done: false });
		newTodo = '';
	}
</script>

<Transition>
	<h2 class="text-4xl font-bold text-flisol-blue-600">Reactividad profunda</h2>
	<p class="mt-2 text-lg text-slate-600">Mutaciones directas, sin spread</p>
</Transition>

<Transition>
	<div class="mt-8 grid grid-cols-2 gap-8">
		<div>
			<div class="border-flisol-blue-400/25 rounded-2xl border bg-white p-5 shadow-sm">
				<div class="mb-4 flex gap-2">
					<input
						type="text"
						bind:value={newTodo}
						onkeydown={(e: KeyboardEvent) => e.key === 'Enter' && addTodo()}
						placeholder="Nueva tarea..."
						class="focus:border-flisol-blue-400 flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-700 outline-none placeholder:text-slate-400"
					/>
					<button
						onclick={addTodo}
						class="bg-flisol-blue-400 rounded-lg px-4 py-2 text-sm font-semibold text-white"
					>
						Agregar
					</button>
				</div>

				<div class="space-y-2">
					{#each todos as todo}
						<label class="flex cursor-pointer items-center gap-3 rounded-lg bg-white px-4 py-3">
							<input
								type="checkbox"
								bind:checked={todo.done}
								class="accent-emerald-500 h-5 w-5"
							/>
							<span class={todo.done ? 'text-slate-400 line-through' : 'text-slate-700'}>
								{todo.text}
							</span>
						</label>
					{/each}
				</div>
			</div>
		</div>

		<div class="space-y-4">
			<Transition>
				<div class="border-emerald-200 bg-emerald-50 rounded-2xl border p-5">
					<p class="text-flisol-blue-600 mb-3 text-sm font-semibold">Codigo de la mutacion</p>
					<Code
						lang="ts"
						theme="vitesse-light"
						code={`todos.push({ text: 'Nueva tarea', done: false })
todos[2].done = !todos[2].done`}
						options={{ duration: 400, stagger: 0.2, containerStyle: false }}
						class="text-sm"
					/>
					<p class="mt-3 text-sm text-slate-600">
						No hay <code class="rounded bg-white px-1">setTodos([...todos, item])</code>. Svelte
						convierte arrays y objetos en proxies reactivos automaticamente.
					</p>
				</div>
			</Transition>
		</div>
	</div>
</Transition>
