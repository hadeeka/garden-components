<script>
    import IconButton from '../../Molecules/IconButton/IconButton.svelte';
    import Variant from '../../../enumerations/variant';

    import {default as trash} from '../../../assets/icons/trash';
    import {default as gear} from '../../../assets/icons/gear';
    import {default as circleQuestion} from '../../../assets/icons/circle-question';
    import {default as box} from '../../../assets/icons/box';
    import {default as moonOutline} from '../../../assets/icons/moon-outline';
</script>

<div class="w-full h-40 absolute bg-stone-50 z-20 inset-x-0 bottom-0 flex flex-col items-center py-3">
    <span class="text-rose-600">Add</span>
    <ul class="text-rose-600 flex flex-grow items-center justify-between font-medium text-sm w-full px-20">
        <li>
            <a class={['flex', 'flex-col', 'items-center'].join(' ')} href="#a"
                ><span class="mb-1.5">FOLDER</span><IconButton data={trash} variant={Variant.OUTLINE} /></a
            >
        </li>
        <li>
            <a class={['flex', 'flex-col', 'items-center'].join(' ')} href="#a"
                ><span class="mb-1.5">NOTE</span><IconButton data={gear} variant={Variant.OUTLINE} /></a
            >
        </li>
    </ul>
</div>
