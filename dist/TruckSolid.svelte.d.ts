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
export type TruckSolidProps = typeof __propDef.props;
export type TruckSolidEvents = typeof __propDef.events;
export type TruckSolidSlots = typeof __propDef.slots;
export default class TruckSolid extends SvelteComponentTyped<TruckSolidProps, TruckSolidEvents, TruckSolidSlots> {
}
export {};
