<script>
    import Icon from '../../atoms/icon/icon.svelte';
    import {default as house} from '../../../assets/icons/house';
</script>

<ul class={['relative', 'flex', 'justify-between', 'items-center', 'w-full', 'h-16', 'shadow-md'].join(' ')}>
    <div class={['absolute', 'left-0/4', 'top-0', 'w-1/4', 'h-1', 'bg-rose-600'].join(' ')} />
    <li class={['flex', 'w-1/4', 'justify-center', 'items-center'].join(' ')}>
        <a href="#a"><Icon class={['text-rose-600'].join(' ')} data={house} /></a>
    </li>
    <li class={['flex', 'w-1/4', 'justify-center', 'items-center'].join(' ')}>
        <a href="#a"><Icon class={['text-rose-600'].join(' ')} data={house} /></a>
    </li>
    <li class={['flex', 'w-1/4', 'justify-center', 'items-center'].join(' ')}>
        <a href="#a"><Icon class={['text-rose-600'].join(' ')} data={house} /></a>
    </li>
    <li class={['flex', 'w-1/4', 'justify-center', 'items-center'].join(' ')}>
        <a href="#a"><Icon class={['text-rose-600'].join(' ')} data={house} /></a>
    </li>
</ul>
