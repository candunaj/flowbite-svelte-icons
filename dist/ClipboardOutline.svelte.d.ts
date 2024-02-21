import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        size?: "xs" | "sm" | "md" | "lg" | "xl" | undefined;
        role?: string | undefined;
        class?: string | undefined;
        ariaLabel?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ClipboardOutlineProps = typeof __propDef.props;
export type ClipboardOutlineEvents = typeof __propDef.events;
export type ClipboardOutlineSlots = typeof __propDef.slots;
export default class ClipboardOutline extends SvelteComponentTyped<ClipboardOutlineProps, ClipboardOutlineEvents, ClipboardOutlineSlots> {
}
export {};
