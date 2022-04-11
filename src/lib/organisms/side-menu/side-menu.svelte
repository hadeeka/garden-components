<script>
    import Overlay from '../../atoms/overlay/overlay.svelte';
    import Icon from '../../atoms/icon/icon.svelte';

    import {default as trash} from '../../../assets/icons/trash';
    import {default as gear} from '../../../assets/icons/gear';
    import {default as circleQuestion} from '../../../assets/icons/circle-question';
    import {default as box} from '../../../assets/icons/box';
    import {default as moonOutline} from '../../../assets/icons/moon-outline';
</script>

<div
    class={[
        'absolute',
        'inset-0',
        'bg-stone-50',
        'w-5/6',
        'max-w-xs',
        'p-9',
        'z-20',
        'flex',
        'flex-col',
        'space-y-6'
    ].join(' ')}
>
    <div class={['flex', 'justify-between', 'items-center', 'text-rose-600'].join(' ')}>
        <a href="#a"
            ><span class={['text-xs', 'tracking-widest'].join(' ')}>HADEEKA</span>
            <span class={['text-xl', 'font-medium'].join(' ')}>GARDEN</span></a
        >
        <Icon data={moonOutline} />
    </div>
    <ul class={['text-rose-600', 'flex', 'flex-col', 'space-y-6', 'font-medium', 'text-sm'].join(' ')}>
        <li>
            <a class={['flex', 'flex-row', 'items-center'].join(' ')} href="#a"
                ><Icon data={trash} /><span class={['ml-2.5'].join(' ')}>TRASH</span></a
            >
        </li>
        <li>
            <a class={['flex', 'flex-row', 'items-center'].join(' ')} href="#a"
                ><Icon data={gear} /><span class={['ml-2.5'].join(' ')}>SETTINGS</span></a
            >
        </li>
        <li>
            <a class={['flex', 'flex-row', 'items-center'].join(' ')} href="#a"
                ><Icon data={circleQuestion} scale={0.875} /><span class={['ml-2.5'].join(' ')}>HELP & FEEDBACK</span
                ></a
            >
        </li>
        <li>
            <a class={['flex', 'flex-row', 'items-center'].join(' ')} href="#a"
                ><Icon data={box} /><span class={['ml-2.5'].join(' ')}>STORAGE</span></a
            >
        </li>
    </ul>
</div>
