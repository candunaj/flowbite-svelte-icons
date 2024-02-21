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
export type ProfileCardOutlineProps = typeof __propDef.props;
export type ProfileCardOutlineEvents = typeof __propDef.events;
export type ProfileCardOutlineSlots = typeof __propDef.slots;
export default class ProfileCardOutline extends SvelteComponentTyped<ProfileCardOutlineProps, ProfileCardOutlineEvents, ProfileCardOutlineSlots> {
}
export {};
