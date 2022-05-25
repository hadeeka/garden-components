<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import AddMenu from './AddMenu.svelte';
    import Overlay from '../../atoms/Overlay/Overlay.svelte';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta title="Organisms/Add Menu" component={AddMenu} />

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
    <Overlay />
    <AddMenu {...args} />
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story name="Default" args={{}} />
