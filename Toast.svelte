<script>import { colors, icons, toaster } from "./toast";
import { onMount } from "svelte";
export let toast;
onMount(() => {
  let timer = setTimeout(() => toaster.burn(toast.id), toast.options.duration);
  return () => {
    if (timer)
      clearTimeout(timer);
  };
});
</script>

<div class="toast" style:--accent={colors[toast.options.type]} data-colorful={toast.options.colorful}>
	{#if toast.options.icon}
		<div class="toast__icon">
			<svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="48" width="48">
				<path d={icons[toast.options.type]} />
			</svg>
		</div>
	{/if}
	<p class="toast__body">{toast.body}</p>
	<button class="toast__close" on:click={() => toaster.burn(toast.id)}>
		<svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="48" width="48">
			<path
				d="m24 27.2-9.9 9.9q-.7.7-1.625.7t-1.575-.7q-.7-.65-.7-1.575 0-.925.7-1.575L20.8 24l-9.9-9.9q-.65-.65-.65-1.6 0-.95.65-1.6.6-.65 1.55-.65.95 0 1.65.65l9.9 9.95 9.95-10q.65-.65 1.575-.65.925 0 1.625.65.65.7.65 1.625t-.65 1.575l-9.95 9.9 9.9 9.95q.7.7.7 1.625t-.7 1.575q-.65.7-1.6.7-.95 0-1.55-.7Z"
			/>
		</svg>
	</button>
</div>

<style>
	.toast {
		display: flex;
		gap: 0.5rem;
		box-shadow: 0 0.125rem 0.25rem #22222288;
		background-color: var(--toast-background-color);
		border-radius: 0.5rem;
		overflow: hidden;
		padding: 0.5rem;

		--toast-background-color: #fff;
		--toast-text-color: #444;
		--toast-button-color: var(--accent);
		--toast-icon-color: var(--accent);
	}

	.toast[data-colorful="true"] {
		--toast-background-color: var(--accent);
		--toast-text-color: #fff;
		--toast-button-color: #fff;
		--toast-icon-color: #fff;
	}

	.toast__icon {
		color: var(--toast-icon-color);
		display: grid;
		place-content: center;
	}

	.toast__icon svg {
		display: block;
		width: 2rem;
		height: 2rem;
	}

	.toast__body {
		width: 100%;
		line-height: 1.25;
		align-self: center;
		color: var(--toast-text-color);
	}

	.toast__close {
		align-self: flex-start;
		background-color: transparent;
		cursor: pointer;
		border: none;
		color: var(--toast-button-color);
		opacity: 0.25;
	}

	.toast__close svg {
		display: block;
		width: 1.5rem;
		height: 1.5rem;
	}

	.toast__close:hover {
		opacity: 0.5;
	}
</style>
