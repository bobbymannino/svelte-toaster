import { SvelteComponentTyped } from "svelte";
import type { ToastType } from "./types";
declare const __propDef: {
    props: {
        toast: ToastType;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ToastProps = typeof __propDef.props;
export type ToastEvents = typeof __propDef.events;
export type ToastSlots = typeof __propDef.slots;
export default class Toast extends SvelteComponentTyped<ToastProps, ToastEvents, ToastSlots> {
}
export {};
