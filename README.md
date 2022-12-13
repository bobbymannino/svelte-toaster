# **Svelte Toaster**

## **Description**

A notification system that's:

-   **TypeScript First**
-   **Customizable**
-   **Easy To Use**
-   **Animated**

---

## **Demo**

[Demo Site](https://bobbymannino.vercel.app/svelte-toaster)

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
	import { Slice } from "@bobbymannino/svelte-toaster";

	function newToast() {
		new Slice({ body: "Hi there!" });
	}
</script>

<button on:click="{newToast}">Toasty!</button>
```

---

## **Configuration**

```html
<!-- +layout.svelte -->

<Toaster placement="top-left" />
```

| Property Name | Property Type                                                                                   | Property Default |
| :------------ | :---------------------------------------------------------------------------------------------- | :--------------- |
| placement     | 'top-left' \| 'top-right' \| 'middle-left' \| 'middle-right' \| 'bottom-left' \| 'bottom-right' | 'bottom-left'    |

```html
<!-- +page.svelte -->

<script lang="ts">
	function newToast() {
		new Slice({ body: "Hi there!", type: "error", icon: false, duration: 10000 });
	}
</script>
```

| Property Name | Property Type                               | Property Default |
| :------------ | :------------------------------------------ | :--------------- |
| type          | 'error' \| 'success' \| 'warning' \| 'help' | 'help'           |
| icon          | boolean                                     | true             |
| duration      | number                                      | 7000             |

---

## **Bugs & Features**

Submit all bugs and/or feature requests to the [issues panel](https://github.com/bobbymannino/svelte-toaster/issues) panel on GitHub
