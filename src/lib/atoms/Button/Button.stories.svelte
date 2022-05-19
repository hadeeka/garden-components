<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import Button from './button.svelte';
    import {default as fox} from '../../../assets/icons/metamask/fox';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta title="Atoms/Button" component={Button} />

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
    <Button {...args} />
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story name="Default" args={{}} />
<Story name="Solid w/ Label" args={{label: 'Solid Button'}} />
<Story name="Outline w/ Label" args={{label: 'Outline Button', solid: false}} />
