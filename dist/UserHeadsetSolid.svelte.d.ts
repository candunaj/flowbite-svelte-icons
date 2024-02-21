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
export type UserHeadsetSolidProps = typeof __propDef.props;
export type UserHeadsetSolidEvents = typeof __propDef.events;
export type UserHeadsetSolidSlots = typeof __propDef.slots;
export default class UserHeadsetSolid extends SvelteComponentTyped<UserHeadsetSolidProps, UserHeadsetSolidEvents, UserHeadsetSolidSlots> {
}
export {};
