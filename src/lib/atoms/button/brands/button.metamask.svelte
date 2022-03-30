<script>
    import Icon from '../../icon/icon.svelte';

    // required properties
    export let label = '';
    export let solid = true;

    // optional properties
    export let icon = undefined;
    export let metamask = undefined;
</script>

<button
    class={[
        'flex',
        'items-center',
        'justify-between',
        'w-72',
        'px-12',
        'py-2',
        'border border-[#F89C35]',
        'text-sm',
        'text-[#F89C35]',
        'rounded',
        'hover:shadow-md'
    ].join(' ')}
>
    {#if icon}
        <Icon data={icon} />
    {/if}
    {label.toLocaleUpperCase()}
</button>

<style>
</style>
