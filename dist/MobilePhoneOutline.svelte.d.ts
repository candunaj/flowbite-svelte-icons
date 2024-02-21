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
export type MobilePhoneOutlineProps = typeof __propDef.props;
export type MobilePhoneOutlineEvents = typeof __propDef.events;
export type MobilePhoneOutlineSlots = typeof __propDef.slots;
export default class MobilePhoneOutline extends SvelteComponentTyped<MobilePhoneOutlineProps, MobilePhoneOutlineEvents, MobilePhoneOutlineSlots> {
}
export {};
