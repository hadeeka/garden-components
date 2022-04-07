<script>
    import Icon from '../../atoms/icon/icon.svelte';
    import {default as search} from '../../../assets/icons/search';
</script>

<label class="relative block">
    <span class="sr-only">Search</span>
    <span class="absolute h-4 left-3 top-0 right-0 bottom-0 m-auto flex">
        <Icon class={['text-stone-600'].join(' ')} data={search} scale={1} />
    </span>
    <input
        class={[
            'placeholder:text-stone-600',
            'block',
            'bg-stone-200',
            'w-full',
            'rounded-md',
            'py-1.5',
            'pl-9',
            'pr-3',
            'focus:outline-none',
            'focus:border-gray-400',
            'focus:ring-gray-400',
            'focus:ring-1',
            'sm:text-sm'
        ].join(' ')}
        placeholder="Search for anything..."
        type="text"
        name="search"
    />
</label>
