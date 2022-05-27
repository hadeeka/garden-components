<script>
    import Button from '../../Atoms/Button/Button.svelte';
    import Icon from '../../Atoms/icon/icon.svelte';
    import IconButton from '../../Molecules/IconButton/IconButton';
    import Variant from '../../../enumerations/variant';
    import SearchField from '../../Molecules/SearchField/SearchField.svelte';

    import {default as bars} from '../../../assets/icons/bars';
    import {default as user} from '../../../assets/icons/user';
    import {default as circle} from '../../../assets/icons/circle';
    import {default as chevronRight} from '../../../assets/icons/chevron-right';
    import {createEventDispatcher} from 'svelte';

    let searchFocus = false;

    const dispatch = createEventDispatcher();

    const handleMenuClick = () => {
        dispatch('menuclick');
    };

    const handleSearchFieldFocus = () => {
        searchFocus = true;
    };

    const handleSearchFieldBlur = () => {
        searchFocus = false;
    };
</script>

<div class={`h-auto flex flex-col shadow-md bg-stone-50 ${searchFocus ? 'absolute p-3' : 'px-3'}  w-full`}>
    <div class="flex flex-none justify-between items-center w-full h-16">
        {#if !searchFocus}
            <IconButton variant={Variant.TEXT} data={bars} scale={1.25} on:click={handleMenuClick} />
        {/if}
        <div class={[searchFocus ? 'w-full mr-1 flex flex-col' : 'w-2/3'].join(' ')}>
            <SearchField on:searchFieldFocus={handleSearchFieldFocus} on:searchFieldBlur={handleSearchFieldBlur} />
        </div>
        {#if searchFocus}<Button width={'16'} label={'Cancel'} variant={Variant.TEXT} />{:else}
            <IconButton variant={Variant.TEXT} data={user} scale={1.25} />
        {/if}
    </div>
    {#if searchFocus}
        <div class="flex justify-between items-center">
            <div class="flex flex-row items-center pt-3 pb-1.5">
                <span class="text-sm font-medium">640:477 Intro to Probability</span><Icon
                    class="mx-2"
                    data={chevronRight}
                    scale={0.66}
                />
                <span class="text-sm">Homework 1</span>
            </div>
            <Icon data={circle} class="text-red-300" scale={0.75} />
        </div>
        <div class="flex justify-between items-center border-b border-b-stone-300">
            <div class="flex flex-row items-center pt-1.5 pb-3">
                <span class="text-sm font-medium">640:477 Intro to Probability</span><Icon
                    class="mx-2"
                    data={chevronRight}
                    scale={0.66}
                />
                <span class="text-sm">Homework 2</span>
            </div>
            <Icon data={circle} class="text-red-300" scale={0.75} />
        </div>
        <div class="flex items-center pt-3">
            <Icon data={circle} class="text-red-300" scale={2} />
            <span class="ml-2 text-sm font-medium">640:477 Intro to Probability</span>
        </div>
    {/if}
</div>
