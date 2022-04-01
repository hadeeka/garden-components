<script>
    import Icon from '../../atoms/icon/icon.svelte';

    export let data;
    export let scale;

    //optional
    export let className = undefined;
</script>

<button
    class={[
        'flex',
        'justify-center',
        'items-center',
        'bg-rose-600',
        'rounded',
        'hover:shadow',
        'w-9',
        'aspect-square',
        className
    ].join(' ')}
>
    <Icon class={['text-white'].join(' ')} {data} {scale} />
</button>
