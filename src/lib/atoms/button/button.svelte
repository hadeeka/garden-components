<script>
    import Icon from '../icon/icon.svelte';

    // required properties
    export let label = '';
    export let solid = true;

    // optional properties
    export let icon = undefined;
</script>

<button
    class={[
        'flex',
        'items-center',
        icon ? 'justify-between' : 'justify-center',
        'w-72',
        'px-12',
        'py-2',
        solid ? 'bg-rose-600' : 'border border-rose-600',
        'text-sm',
        solid ? 'text-stone-50' : 'text-rose-600',
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
