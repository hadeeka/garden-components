<script>
    import Icon from '../../atoms/icon/icon.svelte';
    import Variant from '../../../enumerations/variant';

    export let data;
    export let scale;
    export let variant = Variant.SOLID;

    // console.log(Variant);

    //optional
    export let className = undefined;

    const handleVariant = () => {
        switch (variant) {
            case Variant.SOLID:
                return 'bg-rose-600 text-white';
            case Variant.OUTLINE:
                return 'bg-stone-50 border border-rose-600 text-rose-600';
            case Variant.TEXT:
                return 'bg-stone-50 text-rose-600';
            default:
                return 'bg-rose-600 text-white';
        }
    };
</script>

<button
    class={[
        'flex',
        'justify-center',
        'items-center',
        handleVariant(),
        'rounded',
        'hover:shadow',
        'w-9',
        'aspect-square',
        className
    ].join(' ')}
>
    <Icon {data} {scale} />
</button>
