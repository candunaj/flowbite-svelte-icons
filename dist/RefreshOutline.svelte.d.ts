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
export type RefreshOutlineProps = typeof __propDef.props;
export type RefreshOutlineEvents = typeof __propDef.events;
export type RefreshOutlineSlots = typeof __propDef.slots;
export default class RefreshOutline extends SvelteComponentTyped<RefreshOutlineProps, RefreshOutlineEvents, RefreshOutlineSlots> {
}
export {};
