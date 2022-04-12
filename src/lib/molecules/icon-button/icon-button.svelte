<script>
    import Icon from '../../atoms/icon/icon.svelte';
    import Variant from '../../../enumerations/variant';
    import {handleVariant} from '../../../utils/handle-variant';

    export let data;
    export let scale;
    export let variant = Variant.SOLID;

    // console.log(Variant);

    //optional
    export let className = undefined;
</script>

<button
    class={[
        'flex',
        'justify-center',
        'items-center',
        handleVariant(variant),
        'rounded',
        'hover:shadow',
        'w-9',
        'aspect-square',
        className
    ].join(' ')}
>
    <Icon {data} {scale} />
</button>
