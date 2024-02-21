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
export type ArchiveArrowDownOutlineProps = typeof __propDef.props;
export type ArchiveArrowDownOutlineEvents = typeof __propDef.events;
export type ArchiveArrowDownOutlineSlots = typeof __propDef.slots;
export default class ArchiveArrowDownOutline extends SvelteComponentTyped<ArchiveArrowDownOutlineProps, ArchiveArrowDownOutlineEvents, ArchiveArrowDownOutlineSlots> {
}
export {};
