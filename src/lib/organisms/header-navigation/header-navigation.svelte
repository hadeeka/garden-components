<script>
    import Button from '../../atoms/button/button.svelte';
    import IconButton from '../../molecules/icon-button/icon-button.svelte';
    import Variant from '../../../enumerations/variant';
    import SearchField from '../../molecules/search-field/search-field.svelte';

    import {default as bars} from '../../../assets/icons/bars';
    import {default as user} from '../../../assets/icons/user';

    let searchFocus = false;

    const handleSearchFieldFocus = () => {
        searchFocus = true;
    };

    const handleSearchFieldBlur = () => {
        searchFocus = false;
    };
</script>

<div
    class={[
        'flex',
        'flex-none',
        'justify-between',
        'items-center',
        'w-full',
        'h-16',
        'shadow-md',
        'p-3',
        'bg-stone-50'
    ].join(' ')}
>
    {#if !searchFocus}
        <IconButton variant={Variant.TEXT} data={bars} scale={1.25} />
    {/if}
    <div class={[searchFocus ? 'w-full mr-1' : 'w-2/3'].join(' ')}>
        <SearchField on:searchFieldFocus={handleSearchFieldFocus} on:searchFieldBlur={handleSearchFieldBlur} />
    </div>
    {#if searchFocus}<Button width={'16'} label={'Cancel'} variant={Variant.TEXT} />{:else}
        <IconButton variant={Variant.TEXT} data={user} scale={1.25} />
    {/if}
</div>
