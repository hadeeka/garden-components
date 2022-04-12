<script>
    import HeaderNavigation from '../../organisms/header-navigation/header-navigation.svelte';
    import Clusters from '../../organisms/clusters/clusters.svelte';
    import Tabs from '../../organisms/tabs/tabs.svelte';
</script>

<div class={['h-full', 'w-full', 'flex', 'flex-col', 'justify-between', 'items-center'].join(' ')}>
    <HeaderNavigation />
    <Clusters />
    <Tabs />
</div>
