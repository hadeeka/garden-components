<script>
    import Icon from '../../Atoms/icon/icon.svelte';
    import IconButton from '../IconButton/IconButton';
    import {default as search} from '../../../assets/icons/search';
    import {default as circleXMark} from '../../../assets/icons/circle-xmark';
    import {createEventDispatcher} from 'svelte';

    let inputFocus = false;

    const dispatch = createEventDispatcher();

    const handleSearchFocus = () => {
        dispatch('searchFieldFocus');
        inputFocus = true;
    };

    const handleSearchBlur = () => {
        inputFocus = false;
        dispatch('searchFieldBlur');
    };
</script>

<label class="relative block">
    <span class="sr-only">Search</span>
    <span
        class="absolute h-4 left-3 top-0 right-3 bottom-0 m-auto flex justify-between pointer-events-none text-stone-600"
    >
        <Icon data={search} scale={1} />
        {#if inputFocus} <Icon data={circleXMark} scale={1} /> {/if}
    </span>
    <input
        class="placeholder:text-stone-600 block bg-stone-200 w-full rounded-md py-1 pl-9 pr-8 focus:outline-none focus:border-gray-400 focus:ring-gray-400 focus:ring-1 sm:text-sm"
        on:focus={handleSearchFocus}
        on:blur={handleSearchBlur}
        placeholder="Search for anything..."
        type="text"
        name="search"
    />
</label>
