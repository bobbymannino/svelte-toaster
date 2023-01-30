# **Svelte Toaster**

## **Description**

A notification system that's:

-   **TypeScript First**
-   **Customizable**
-   **Easy To Use**
-   **Animated**

---

## **Demo**

[Demo Site](https://bobbymannino.vercel.app/npm-packages/svelte-toaster)

---

## **Installation**

```
npm install --save-dev @bobbymannino/svelte-toaster
```

---

## **Usage**

```html
<!-- +layout.svelte -->

<script lang="ts">
	import { Toaster } from "@bobbymannino/svelte-toaster";
</script>

<Toaster />
```

```html
<!-- +page.svelte -->

<script lang="ts">
	import { toaster } from "@bobbymannino/svelte-toaster";

	function newToast() {
		toaster.toast("DON'T BURN ME!");
	}
</script>

<button on:click="{newToast}">Toasty!</button>
```

---

## **Configuration**

```html
<!-- +layout.svelte -->

<Toaster xPlacement="right" yPlacement="top" />
```

| Property Name | Property Type                 | Property Default |
| :------------ | :---------------------------- | :--------------- |
| xPlacement    | 'left' \| 'middle' \| 'right' | 'left'           |
| yPlacement    | 'bottom' \| 'top'             | 'bottom'         |

```html
<!-- +page.svelte -->

<script lang="ts">
	function newToast() {
		toaster.toast("hi there", { type: "error", icon: false, duration: 10000, colorful: true });
	}
</script>
```

| Property Name | Property Type                               | Property Default |
| :------------ | :------------------------------------------ | :--------------- |
| type          | 'error' \| 'success' \| 'warning' \| 'help' | 'help'           |
| icon          | boolean                                     | true             |
| duration      | number                                      | 7000             |
| colorful      | boolean                                     | false            |

---

## **Bugs & Features**

Submit all bugs and/or feature requests to the [issues panel](https://github.com/bobbymannino/svelte-toaster/issues) panel on GitHub
