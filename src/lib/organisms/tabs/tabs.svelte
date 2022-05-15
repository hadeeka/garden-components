<script>
    import Icon from '../../atoms/icon/icon.svelte';
    import {default as house} from '../../../assets/icons/house';
    import {default as clock} from '../../../assets/icons/clock';
    import {default as star} from '../../../assets/icons/star';
    import {default as trash} from '../../../assets/icons/trash';

    let sliderPos = 0;

    const handleSlide = ev => {
        sliderPos = ev.target.dataset['p'];
    };
</script>

<ul class="relative flex flex-none justify-between items-center w-full h-16 shadow-md">
    <div
        class={[
            'inline-block',
            'absolute',
            sliderPos > 0 ? `left-${sliderPos}/4` : 'left-0',
            'top-0',
            'w-1/4',
            'h-1',
            'bg-rose-600',
            'transition-all'
        ].join(' ')}
    />
    <li class="flex w-1/4 h-full justify-center items-center" on:click={handleSlide}>
        <a href="#a" class="w-full h-full flex justify-center items-center" data-p="0"
            ><Icon class="text-rose-600" data={house} /></a
        >
    </li>
    <li class="flex w-1/4 h-full justify-center items-center" on:click={handleSlide}>
        <a href="#a" class="w-full h-full flex justify-center items-center" data-p="1"
            ><Icon class="text-rose-600" data={clock} /></a
        >
    </li>
    <li class="flex w-1/4 h-full justify-center items-center" on:click={handleSlide}>
        <a href="#a" class="w-full h-full flex justify-center items-center" data-p="2"
            ><Icon class="text-rose-600" data={star} /></a
        >
    </li>
    <li class="flex w-1/4 h-full justify-center items-center" on:click={handleSlide}>
        <a href="#a" class="w-full h-full flex justify-center items-center" data-p="3"
            ><Icon class="text-rose-600" data={trash} /></a
        >
    </li>
</ul>
