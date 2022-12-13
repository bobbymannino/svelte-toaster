import { writable } from "svelte/store";
export const Toast = writable([]);
export class Slice {
    constructor({ body, type = "help", duration = 7000, icon = true }) {
        Toast.update((slices) => {
            if (slices.length >= 5)
                slices.shift();
            const slice = { body, type, id: crypto.randomUUID(), duration, icon };
            setTimeout(() => burn(slice.id), slice.duration);
            return [...slices, slice];
        });
    }
}
export const burn = (id) => Toast.update((slices) => [...slices.filter((slice) => slice.id !== id)]);
