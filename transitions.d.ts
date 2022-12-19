import type { EasingFunction } from "svelte/transition";
declare function grow(node: HTMLElement, options?: {
    duration?: number;
    easing?: EasingFunction;
    delay?: number;
    x?: number;
    y?: number;
}): {
    delay: number | undefined;
    duration: number | undefined;
    easing: EasingFunction | undefined;
    css: (t: number, u: number) => string;
};
export { grow };
