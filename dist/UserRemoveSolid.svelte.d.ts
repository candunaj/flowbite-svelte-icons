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
export type UserRemoveSolidProps = typeof __propDef.props;
export type UserRemoveSolidEvents = typeof __propDef.events;
export type UserRemoveSolidSlots = typeof __propDef.slots;
export default class UserRemoveSolid extends SvelteComponentTyped<UserRemoveSolidProps, UserRemoveSolidEvents, UserRemoveSolidSlots> {
}
export {};
