<script>
    import HeaderNavigation from '../../organisms/header-navigation/header-navigation.svelte';
    import Clusters from '../../organisms/clusters/clusters.svelte';
    import Tabs from '../../organisms/tabs/tabs.svelte';

    let clustersWidth;
    let clustersHeight;
</script>

<div class={['h-full', 'w-full', 'flex', 'flex-col', 'justify-between', 'items-center'].join(' ')}>
    <HeaderNavigation />
    <div
        bind:clientWidth={clustersWidth}
        bind:clientHeight={clustersHeight}
        class={['h-full', 'w-full', 'flex', 'justify-center', 'items-center'].join(' ')}
    >
        <Clusters width={clustersWidth} height={clustersHeight} />
    </div>
    <Tabs />
</div>
