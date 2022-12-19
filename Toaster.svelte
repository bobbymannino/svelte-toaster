<script>import { toaster } from "./toast";
import Toast from "./Toast.svelte";
import { quadInOut } from "svelte/easing";
import { flip } from "svelte/animate";
import { grow } from "./transitions";
const options = {
  duration: 300,
  easing: quadInOut
};
export let xPlacement = "left";
export let yPlacement = "bottom";
</script>

<ul data-x-placement={xPlacement} data-y-placement={yPlacement}>
	{#each $toaster as toast (toast.id)}
		<li transition:grow={{ ...options, y: 24 }} animate:flip={options}>
			<Toast {toast} />
		</li>
	{/each}
</ul>

<style>
	ul {
		position: fixed;
		z-index: 9999;
		list-style: none;
		display: flex;
		gap: 0.5rem;
	}

	ul[data-x-placement="left"] {
		left: 1rem;
		align-items: flex-start;
	}

	ul[data-x-placement="middle"] {
		left: 50%;
		transform: translateX(-50%);
		align-items: center;
	}

	ul[data-x-placement="right"] {
		right: 1rem;
		align-items: flex-end;
	}

	ul[data-y-placement="bottom"] {
		bottom: 1rem;
		flex-direction: column-reverse;
	}

	ul[data-y-placement="top"] {
		top: 1rem;
		flex-direction: column;
	}
</style>
