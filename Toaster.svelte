<script>import { fly } from "svelte/transition";
import { flip } from "svelte/animate";
import { cubicInOut } from "svelte/easing";
import { Toast, burn } from "./Toast";
export let placement = "bottom-left";
let easing = cubicInOut;
let duration = 300;
</script>

<div id="toaster" data-placement={placement}>
	{#each $Toast as { id, body, type, icon } (id)}
		<div
			class="toast"
			style:--color={type === "error" ? "#D22B2B" : type === "success" ? "#228B22" : type === "help" ? "#0047AB" : type === "warning" ? "#FFAA33" : ""}
			data-type={type}
			transition:fly={{ y: 0, x: placement.includes("left") ? -48 : placement.includes("right") ? 48 : 0, easing, duration }}
			animate:flip={{ duration, easing }}
		>
			{#if icon}
				<div class="toast__icon">
					<svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" height="48" width="48">
						{#if type === "error"}
							<path
								d="M15.75 32.25q.45.5 1.175.5.725 0 1.225-.5L24 26.4l5.95 5.9q.45.5 1.15.475.7-.025 1.2-.525.45-.45.45-1.175 0-.725-.45-1.225L26.4 24l5.95-5.95q.45-.45.425-1.15-.025-.7-.475-1.2-.5-.45-1.225-.45-.725 0-1.175.45L24 21.6l-5.9-5.95q-.45-.45-1.175-.425-.725.025-1.175.475-.5.5-.5 1.225 0 .725.5 1.175L21.6 24l-5.9 5.9q-.5.45-.475 1.175.025.725.525 1.175ZM24 45.05q-4.4 0-8.3-1.6-3.9-1.6-6.725-4.425Q6.15 36.2 4.55 32.3q-1.6-3.9-1.6-8.3 0-4.45 1.6-8.3 1.6-3.85 4.425-6.7Q11.8 6.15 15.7 4.525 19.6 2.9 24 2.9q4.45 0 8.3 1.625Q36.15 6.15 39 9q2.85 2.85 4.475 6.7Q45.1 19.55 45.1 24q0 4.4-1.625 8.3Q41.85 36.2 39 39.025q-2.85 2.825-6.7 4.425-3.85 1.6-8.3 1.6Z"
							/>
						{:else if type === "success"}
							<path
								d="m20.95 27.35-3.95-4q-.65-.6-1.6-.6-.95 0-1.55.6-.7.7-.7 1.65t.65 1.5l5.6 5.6q.55.65 1.525.65.975 0 1.625-.65L34 20.65q.6-.6.6-1.525 0-.925-.65-1.625-.7-.6-1.625-.6t-1.625.65Zm3.1 17.7q-4.45 0-8.35-1.6-3.9-1.6-6.725-4.425Q6.15 36.2 4.55 32.3q-1.6-3.9-1.6-8.35 0-4.4 1.6-8.25 1.6-3.85 4.425-6.7Q11.8 6.15 15.7 4.525 19.6 2.9 24.05 2.9q4.4 0 8.25 1.625Q36.15 6.15 39 9q2.85 2.85 4.475 6.7Q45.1 19.55 45.1 24q0 4.4-1.625 8.3Q41.85 36.2 39 39.025q-2.85 2.825-6.7 4.425-3.85 1.6-8.25 1.6Z"
							/>
						{:else if type === "warning"}
							<path
								d="M24.15 26.4q1 0 1.625-.625T26.4 24.1v-8.95q0-.85-.675-1.525-.675-.675-1.575-.675-1 0-1.65.625-.65.625-.65 1.625v8.95q0 .95.7 1.6.7.65 1.6.65ZM24 35.15q1.25 0 1.975-.675.725-.675.725-1.975 0-1.25-.7-2t-2-.75q-1.25 0-1.975.75-.725.75-.725 2t.7 1.95q.7.7 2 .7Zm0 9.9q-4.4 0-8.3-1.6-3.9-1.6-6.725-4.425Q6.15 36.2 4.55 32.3q-1.6-3.9-1.6-8.3 0-4.45 1.6-8.3 1.6-3.85 4.425-6.7Q11.8 6.15 15.7 4.525 19.6 2.9 24 2.9q4.45 0 8.3 1.625Q36.15 6.15 39 9q2.85 2.85 4.475 6.7Q45.1 19.55 45.1 24q0 4.4-1.625 8.3Q41.85 36.2 39 39.025q-2.85 2.825-6.7 4.425-3.85 1.6-8.3 1.6Z"
							/>
						{:else if type === "help"}
							<path
								d="M24.1 35.5q.85 0 1.55-.675.7-.675.7-1.525 0-.95-.675-1.6-.675-.65-1.575-.65-.9 0-1.575.65-.675.65-.675 1.55t.65 1.575q.65.675 1.6.675Zm-.05-19.7q1.35 0 2.2.775.85.775.85 1.975 0 .85-.5 1.75t-1.65 1.75q-1.35 1.2-2.075 2.5-.725 1.3-.725 2.3 0 .65.5 1.05t1.1.4q.7 0 1.275-.425t.775-1.225q.15-.8.625-1.5t1.325-1.4q1.35-1.1 2.025-2.4.675-1.3.675-2.85 0-2.7-1.625-4.4-1.625-1.7-4.425-1.7-2.05 0-3.675.825T17.9 15.5q-.45.65-.35 1.4.1.75.6 1.1.65.35 1.425.275.775-.075 1.325-.825.5-.75 1.35-1.2.85-.45 1.8-.45ZM24 45.05q-4.45 0-8.275-1.6t-6.7-4.425Q6.15 36.2 4.55 32.3q-1.6-3.9-1.6-8.3 0-4.45 1.6-8.3 1.6-3.85 4.475-6.7Q11.9 6.15 15.75 4.525 19.6 2.9 24 2.9q4.35 0 8.2 1.625Q36.05 6.15 38.925 9q2.875 2.85 4.525 6.7 1.65 3.85 1.65 8.3 0 4.4-1.65 8.3-1.65 3.9-4.525 6.725Q36.05 41.85 32.2 43.45q-3.85 1.6-8.2 1.6Z"
							/>
						{/if}
					</svg>
				</div>
			{/if}
			<p class="toast__body">{body}</p>
			<button on:click={() => burn(id)} class="toast__close">
				<svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="48" width="48">
					<path
						d="m24 27.2-9.9 9.9q-.7.7-1.625.7t-1.575-.7q-.7-.65-.7-1.575 0-.925.7-1.575L20.8 24l-9.9-9.9q-.65-.65-.65-1.6 0-.95.65-1.6.6-.65 1.55-.65.95 0 1.65.65l9.9 9.95 9.95-10q.65-.65 1.575-.65.925 0 1.625.65.65.7.65 1.625t-.65 1.575l-9.95 9.9 9.9 9.95q.7.7.7 1.625t-.7 1.575q-.65.7-1.6.7-.95 0-1.55-.7Z"
					/>
				</svg>
			</button>
		</div>
	{/each}
</div>

<style>
	#toaster {
		position: fixed;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: min(100%, 24rem);
		max-width: calc(100% - 2rem);
	}

	#toaster[data-placement="top-left"] {
		top: 1rem;
		left: 1rem;
	}

	#toaster[data-placement="top-middle"] {
		top: 1rem;
		left: 50%;
		transform: translateX(-50%);
	}

	#toaster[data-placement="top-right"] {
		top: 1rem;
		right: 1rem;
	}

	#toaster[data-placement="bottom-left"] {
		bottom: 1rem;
		left: 1rem;
	}

	#toaster[data-placement="bottom-middle"] {
		bottom: 1rem;
		left: 50%;
		transform: translateX(-50%);
	}

	#toaster[data-placement="bottom-right"] {
		bottom: 1rem;
		right: 1rem;
	}

	.toast {
		display: flex;
		box-shadow: 0 0.125rem 0.25rem #55555588;
		background-color: #fff;
		border-radius: 0.5rem;
	}

	.toast:not(:has(.toast__icon)) {
		border-left: 0.25rem solid var(--color);
		border-right: 0.25rem solid var(--color);
	}

	.toast__icon {
		border-top-left-radius: 0.5rem;
		border-bottom-left-radius: 0.5rem;
		padding: 0.5rem;
		background-color: var(--color);
		color: #fff;
		display: grid;
		place-content: center;
	}

	.toast__icon svg {
		display: block;
		width: 2.4rem;
		height: 2.4rem;
	}

	.toast__body {
		width: 100%;
		padding: 0.5rem;
		align-self: center;
		color: #555;
	}

	.toast__close {
		align-self: flex-start;
		background-color: transparent;
		cursor: pointer;
		border: none;
		color: #555;
		padding: 0.5rem;
	}

	.toast__close svg {
		display: block;
		width: 1.5rem;
		height: 1.5rem;
	}

	.toast__close:hover svg {
		color: var(--color);
	}
</style>
