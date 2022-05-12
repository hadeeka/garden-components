<script>
    import HeaderNavigation from '../../organisms/header-navigation/header-navigation.svelte';
    import Clusters from '../../organisms/clusters/clusters.svelte';
    import Tabs from '../../organisms/tabs/tabs.svelte';
    import IconButton from '../../molecules/icon-button/icon-button.svelte';

    import Variant from '../../../enumerations/variant';

    import {default as plus} from '../../../assets/icons/plus';
</script>

<div class="h-full w-full flex flex-col justify-between items-center">
    <HeaderNavigation />
    <Clusters />
    <IconButton class="absolute bottom-20 right-6" data={plus} scale={1.5} variant={Variant.SOLID} />
    <Tabs />
</div>
