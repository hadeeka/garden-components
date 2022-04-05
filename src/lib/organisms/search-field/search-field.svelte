<script>
    import Icon from '../../atoms/icon/icon.svelte';
    import {default as search} from '../../../assets/icons/search';
</script>

<label class="relative block">
    <span class="sr-only">Search</span>
    <span class="absolute inset-y-2 left-2 left-0">
        <Icon class={['text-stone-600'].join(' ')} data={search} scale={1} />
    </span>
    <input
        class={[
            'placeholder:text-stone-600',
            'placeholder:text-center',
            'block',
            'bg-gray-100',
            'w-full',
            'border',
            'border-gray-200',
            'rounded-md',
            'py-2',
            'pl-9',
            'pr-3',
            'shadow-sm',
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
