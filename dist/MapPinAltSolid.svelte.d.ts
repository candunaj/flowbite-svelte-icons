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
export type MapPinAltSolidProps = typeof __propDef.props;
export type MapPinAltSolidEvents = typeof __propDef.events;
export type MapPinAltSolidSlots = typeof __propDef.slots;
export default class MapPinAltSolid extends SvelteComponentTyped<MapPinAltSolidProps, MapPinAltSolidEvents, MapPinAltSolidSlots> {
}
export {};
