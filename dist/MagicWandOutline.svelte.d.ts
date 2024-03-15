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
export type MagicWandOutlineProps = typeof __propDef.props;
export type MagicWandOutlineEvents = typeof __propDef.events;
export type MagicWandOutlineSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
 * ## Props
 * @props: size?:  'xs' | 'sm' | 'md' | 'lg' | 'xl'; = ctx.size || 'md';
 * @props:role?: string;
 * @props:class?: string;
 * @props:ariaLabel?:  string; = 'magic wand outline,';
 */
export default class MagicWandOutline extends SvelteComponent<MagicWandOutlineProps, MagicWandOutlineEvents, MagicWandOutlineSlots> {
}
export {};
