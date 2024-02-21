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
export type ImageOutlineProps = typeof __propDef.props;
export type ImageOutlineEvents = typeof __propDef.events;
export type ImageOutlineSlots = typeof __propDef.slots;
export default class ImageOutline extends SvelteComponentTyped<ImageOutlineProps, ImageOutlineEvents, ImageOutlineSlots> {
}
export {};
