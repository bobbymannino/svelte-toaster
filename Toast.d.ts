type SliceType = {
    id: string;
    body: string;
    duration: number;
    type: "warning" | "error" | "success" | "help";
    icon: boolean;
};
export declare const Toast: import("svelte/store").Writable<SliceType[]>;
export declare class Slice {
    constructor({ body, type, duration, icon }: {
        icon?: SliceType["icon"];
        body: SliceType["body"];
        type?: SliceType["type"];
        duration?: SliceType["duration"];
    });
}
export declare const burn: (id: string) => void;
export {};
