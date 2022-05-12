<script>
    import HeaderNavigation from '../../organisms/header-navigation/header-navigation.svelte';
    import Clusters from '../../organisms/clusters/clusters.svelte';
    import Tabs from '../../organisms/tabs/tabs.svelte';
    import SideMenu from '../../organisms/side-menu/side-menu.svelte';
    import IconButton from '../../molecules/IconButton/IconButton.svelte';
    import Overlay from '../../atoms/Overlay/Overlay.svelte';

    import Variant from '../../../enumerations/variant';

    import {default as plus} from '../../../assets/icons/plus';

    let sideMenu = false;
</script>

<div class="h-full w-full flex flex-col justify-between items-center">
    <HeaderNavigation on:menuclick={() => (sideMenu = true)} />
    <Clusters />

    <div class="relative w-full">
        <Tabs />
        <IconButton class="absolute bottom-20 right-6" data={plus} scale={1.5} variant={Variant.SOLID} />
    </div>
</div>
{#if sideMenu}
    <Overlay on:click={() => (sideMenu = false)} />
    <SideMenu />
{/if}
