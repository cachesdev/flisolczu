<script lang="ts">
	import { Code, Action, Transition } from '@animotion/core';

	let code: ReturnType<typeof Code>;
	let step = $state(0);
</script>

<Transition>
	<h2 class="text-4xl font-bold text-flisol-blue-600">Relations API v2</h2>
	<p class="mt-2 text-lg text-slate-600">Queries relacionales sin escribir JOINs a mano</p>
</Transition>

<Transition class="mt-4">
	<div class="border-emerald-200 bg-emerald-50 rounded-xl border p-4">
		<p class="text-emerald-600 mb-3 text-sm">
			Uso en queries — sin JOINs manuales, resultado tipado
		</p>
		<Code
			lang="ts"
			theme="vitesse-light"
			code={`// findMany con datos anidados — tipado automático
const postsWithAuthor = await db.query.posts.findMany({
  with: {
    author: true,
    comments: { with: { author: true } },
  },
  where: (posts, { eq }) => eq(posts.published, true),
  orderBy: (posts, { desc }) => [desc(posts.createdAt)],
  limit: 10,
})`}
			options={{ duration: 400, stagger: 0.2, containerStyle: false }}
			class="text-sm"
		/>
	</div>
</Transition>
