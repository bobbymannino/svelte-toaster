function grow(node, options) {
    return {
        delay: options?.delay,
        duration: options?.duration,
        easing: options?.easing,
        css: (t, u) => `transform: scale(${Math.min(1, t * 1.5)}) translate(${u * (options?.x ?? 0)}px, ${u * (options?.y ?? 0)}px);
opacity: ${t};`,
    };
}
export { grow };
