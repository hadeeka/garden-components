<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import IconButton from './IconButton.svelte';
    import Variant from '../../../enumerations/variant';

    import {default as plus} from '../../../assets/icons/plus';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta title="Molecules/Icon Button" component={IconButton} />

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
    <IconButton {...args} />
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story name="Default" args={{}} />

<Story name="Solid" args={{data: plus, scale: 1.5, variant: Variant.SOLID}} />
<Story name="Outline" args={{data: plus, scale: 1.5, variant: Variant.OUTLINE}} />
<Story name="Text" args={{data: plus, scale: 1.5, variant: Variant.TEXT}} />
