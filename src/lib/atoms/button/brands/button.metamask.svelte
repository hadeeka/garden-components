<script>
    import Icon from '../../icon/icon.svelte';
    import {default as fox} from '../../../../assets/icons/metamask/fox';
    // required properties
    export let label = '';
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
        'hover:shadow'
    ].join(' ')}
>
    <Icon data={fox} />
    {label.toLocaleUpperCase()}
</button>

<style>
</style>
