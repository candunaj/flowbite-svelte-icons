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
export type ProfileCardSolidProps = typeof __propDef.props;
export type ProfileCardSolidEvents = typeof __propDef.events;
export type ProfileCardSolidSlots = typeof __propDef.slots;
export default class ProfileCardSolid extends SvelteComponentTyped<ProfileCardSolidProps, ProfileCardSolidEvents, ProfileCardSolidSlots> {
}
export {};
