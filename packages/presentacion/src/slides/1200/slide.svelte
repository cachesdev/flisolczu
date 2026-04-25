<script lang="ts">
	import { Code, Transition } from '@animotion/core';
</script>

<Transition>
	<h2 class="text-flisol-blue-600 text-4xl font-bold">Remote Functions</h2>
	<p class="mt-2 text-lg text-slate-600">
		Funciones que se llaman del cliente, pero corren en el servidor
	</p>
</Transition>

<div class="mt-8 grid grid-cols-2 gap-6">
	<Transition>
		<div class="border-flisol-blue-400/25 rounded-2xl border bg-white p-5 shadow-sm">
			<p class="text-flisol-blue-300 mb-3 text-xs tracking-wider uppercase">
				data.remote.ts -- servidor
			</p>
			<Code
				lang="ts"
				theme="vitesse-light"
				code={`// Archivo .remote.ts, todo corre en el server
import { query, form, command } from '$app/server'
import * as db from '$lib/server/database'

export const getPosts = query(async () => {
  const posts = await db.sql\`
    SELECT title, slug FROM post
    ORDER BY published_at DESC
  \`
  return posts
})
`}
				options={{ duration: 500, stagger: 0.2, containerStyle: false }}
				class="text-sm"
			/>
		</div>
	</Transition>

	<div class="space-y-4">
		<Transition>
			<div class="rounded-xl border border-emerald-300 bg-white p-5 shadow-sm">
				<p class="text-flisol-blue-600 mb-2 text-xs tracking-wider uppercase">Cliente</p>
				<Code
					lang="svelte"
					theme="vitesse-light"
					code={`<script>
  import { getPosts, createPost } from './data.remote'

<\/script>

<svelte:boundary>
  <ul>
    {#each await getPosts() as post}
      <li><a href="/blog/{post.slug}">
        {post.title}
      </a></li>
    {/each}
  </ul>

  {#snippet pending()}
    <p>Cargando posts...</p>
  {/snippet}
</svelte:boundary>
`}
					options={{ duration: 400, stagger: 0.2, containerStyle: false }}
					class="text-xs"
				/>
			</div>
		</Transition>
	</div>
</div>
