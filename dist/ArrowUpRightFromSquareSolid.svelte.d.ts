import { SvelteComponent } from "svelte";
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
export type ArrowUpRightFromSquareSolidProps = typeof __propDef.props;
export type ArrowUpRightFromSquareSolidEvents = typeof __propDef.events;
export type ArrowUpRightFromSquareSolidSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
 * ## Props
 * @props: size?:  'xs' | 'sm' | 'md' | 'lg' | 'xl'; = ctx.size || 'md';
 * @props:role?: string;
 * @props:class?: string;
 * @props:ariaLabel?:  string; = 'arrow up right from square solid,';
 */
export default class ArrowUpRightFromSquareSolid extends SvelteComponent<ArrowUpRightFromSquareSolidProps, ArrowUpRightFromSquareSolidEvents, ArrowUpRightFromSquareSolidSlots> {
}
export {};
