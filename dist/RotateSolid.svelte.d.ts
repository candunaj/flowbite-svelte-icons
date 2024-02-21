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
export type RotateSolidProps = typeof __propDef.props;
export type RotateSolidEvents = typeof __propDef.events;
export type RotateSolidSlots = typeof __propDef.slots;
export default class RotateSolid extends SvelteComponentTyped<RotateSolidProps, RotateSolidEvents, RotateSolidSlots> {
}
export {};
