<script>
    import Icon from '../icon/icon.svelte';
    import Variant from '../../../enumerations/variant';
    import {handleVariant} from '../../../utils/handle-variant';

    // required properties
    export let label = '';
    export let variant = Variant.SOLID;

    // optional properties
    export let icon = undefined;
    export let width = 'full';
</script>

<button
    class={[
        'flex',
        'items-center',
        icon ? 'justify-between' : 'justify-center',
        `w-${width}`,
        'px-12',
        'py-1.5',
        handleVariant(variant),
        'text-sm',
        'rounded',
        'hover:shadow'
    ].join(' ')}
>
    {#if icon}
        <Icon data={icon} />
    {/if}
    {label.toLocaleUpperCase()}
</button>

<style>
</style>
