<script>
    import IconButton from '../../molecules/icon-button/icon-button.svelte';
    import Variant from '../../../enumerations/variant';
    import SearchField from '../search-field/search-field.svelte';
</script>

<div class={['flex', 'justify-evenly', 'items-center', 'w-full', 'h-16', 'shadow-md'].join(' ')}>
    <IconButton variant={Variant.TEXT} />
    <SearchField />
    <IconButton variant={Variant.TEXT} />
</div>
