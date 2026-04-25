// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare module 'torph/dist/svelte/TextMorph.svelte' {
	import type { SvelteComponent } from 'svelte';
	export default class TextMorph extends SvelteComponent<{ text: string }> {}
}

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
