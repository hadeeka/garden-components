<script>
    import Button from '../../atoms/button/button.svelte';
    import Icon from '../../atoms/icon/icon.svelte';
    import IconButton from '../../molecules/icon-button/icon-button.svelte';
    import Variant from '../../../enumerations/variant';
    import SearchField from '../../molecules/search-field/search-field.svelte';

    import {default as bars} from '../../../assets/icons/bars';
    import {default as user} from '../../../assets/icons/user';
    import {default as circle} from '../../../assets/icons/circle';
    import {default as chevronRight} from '../../../assets/icons/chevron-right';

    let searchFocus = false;

    const handleSearchFieldFocus = () => {
        searchFocus = true;
    };

    const handleSearchFieldBlur = () => {
        searchFocus = false;
    };
</script>

<div class="h-auto flex flex-col shadow-md bg-stone-50 p-3 w-full">
    <div class={['flex', 'flex-none', 'justify-between', 'items-center', 'w-full', 'h-16'].join(' ')}>
        {#if !searchFocus}
            <IconButton variant={Variant.TEXT} data={bars} scale={1.25} />
        {/if}
        <div class={[searchFocus ? 'w-full mr-1 flex flex-col' : 'w-2/3'].join(' ')}>
            <SearchField on:searchFieldFocus={handleSearchFieldFocus} on:searchFieldBlur={handleSearchFieldBlur} />
        </div>
        {#if searchFocus}<Button width={'16'} label={'Cancel'} variant={Variant.TEXT} />{:else}
            <IconButton variant={Variant.TEXT} data={user} scale={1.25} />
        {/if}
    </div>
    <div class="flex justify-between items-center">
        <div class="flex flex-row items-center">
            <span class="mr-2">640:477</span><Icon data={chevronRight} scale={0.75} />
            <span class="ml-2">Homework 1</span>
        </div>
        <Icon data={circle} scale={0.75} />
    </div>
</div>
