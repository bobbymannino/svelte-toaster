import type { ToastType } from "./types";
export declare const toaster: {
    toast: (body: ToastType["body"], options?: {
        icon?: ToastType["options"]["icon"];
        duration?: ToastType["options"]["duration"];
        type?: ToastType["options"]["type"];
        colorful?: ToastType["options"]["colorful"];
    }) => void;
    burn: (id: ToastType["id"]) => void;
    subscribe: (this: void, run: import("svelte/store").Subscriber<ToastType[]>, invalidate?: ((value?: ToastType[] | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
};
export declare const icons: {
    error: string;
    success: string;
    warning: string;
    help: string;
};
export declare const colors: {
    error: string;
    success: string;
    help: string;
    warning: string;
};
