import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        xPlacement?: "left" | "middle" | "right" | undefined;
        yPlacement?: "top" | "bottom" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ToasterProps = typeof __propDef.props;
export type ToasterEvents = typeof __propDef.events;
export type ToasterSlots = typeof __propDef.slots;
export default class Toaster extends SvelteComponentTyped<ToasterProps, ToasterEvents, ToasterSlots> {
}
export {};
