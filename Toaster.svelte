<script>import { toaster } from "./toast";
import Toast from "./Toast.svelte";
import { quadInOut } from "svelte/easing";
import { fly } from "svelte/transition";
import { flip } from "svelte/animate";
const ANIMATION_DURATION = 250;
const ANIMATION_TIMING = quadInOut;
const ANIMATION_X = 32;
export let xPlacement = "left";
export let yPlacement = "bottom";
</script>

<ul data-x-placement={xPlacement} data-y-placement={yPlacement}>
	{#each $toaster as toast (toast.id)}
		<li
			in:fly={{ duration: ANIMATION_DURATION, easing: ANIMATION_TIMING, x: -1 * ANIMATION_X }}
			out:fly={{ duration: ANIMATION_DURATION, easing: ANIMATION_TIMING, x: -1 * ANIMATION_X }}
			animate:flip={{ duration: ANIMATION_DURATION, easing: ANIMATION_TIMING }}
		>
			<Toast {toast} />
		</li>
	{/each}
</ul>

<style>
	ul {
		position: fixed;
		width: min(100%, 24rem);
		max-width: calc(100% - 2rem);
		z-index: 9999;
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	ul[data-x-placement="left"] {
		left: 1rem;
	}

	ul[data-x-placement="middle"] {
		left: 50%;
		transform: translateX(-50%);
	}

	ul[data-x-placement="right"] {
		right: 1rem;
	}

	ul[data-y-placement="bottom"] {
		bottom: 1rem;
	}

	ul[data-y-placement="top"] {
		top: 1rem;
	}
</style>
