<script>
    import IconButton from '../../molecules/icon-button/icon-button.svelte';
    import Variant from '../../../enumerations/variant';
    import SearchField from '../../molecules/search-field/search-field.svelte';

    import {default as bars} from '../../../assets/icons/bars';
    import {default as user} from '../../../assets/icons/user';
</script>

<div class={['flex', 'justify-between', 'items-center', 'w-full', 'h-16', 'shadow-md', 'p-3', 'bg-stone-50'].join(' ')}>
    <IconButton variant={Variant.TEXT} data={bars} scale={1.25} />
    <div class={['w-2/3'].join(' ')}><SearchField /></div>
    <IconButton variant={Variant.TEXT} data={user} scale={1.25} />
</div>
