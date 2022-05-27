<script>
    import HeaderNavigation from '../../Organisms/HeaderNavigation/HeaderNavigation.svelte';
    import Clusters from '../../Organisms/Clusters/Clusters.svelte';
    import Tabs from '../../Organisms/Tabs/Tabs.svelte';
    import SideMenu from '../../Organisms/SideMenu/SideMenu.svelte';
    import AddMenu from '../../Organisms/AddMenu/AddMenu.svelte';
    import IconButton from '../../Molecules/IconButton/IconButton.svelte';
    import Overlay from '../../Atoms/Overlay/Overlay.svelte';

    import Variant from '../../../enumerations/variant';

    import {default as plus} from '../../../assets/icons/plus';

    let sideMenu = false;
    let addMenu = false;
</script>

<div class="h-full w-full flex flex-col justify-between items-center">
    <HeaderNavigation on:menuclick={() => (sideMenu = true)} />
    <Clusters />

    <div class="relative w-full">
        <Tabs />
        <IconButton
            class="absolute bottom-20 right-6"
            data={plus}
            scale={1.5}
            variant={Variant.SOLID}
            on:click={() => (addMenu = true)}
        />
    </div>
</div>
{#if sideMenu}
    <Overlay on:click={() => (sideMenu = false)} />
    <SideMenu />
{/if}
{#if addMenu}
    <Overlay on:click={() => (addMenu = false)} />
    <AddMenu />
{/if}
