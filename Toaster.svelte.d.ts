import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        placement?: "top-left" | "top-middle" | "top-right" | "bottom-left" | "bottom-middle" | "bottom-right" | undefined;
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
