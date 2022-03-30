<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import MetamaskButton from './button.metamask.svelte';
    import {default as fox} from '../../../../assets/icons/metamask/fox';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta title="Atoms/Metamask Button" component={MetamaskButton} />

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
    <MetamaskButton {...args} />
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story name="Default" args={{}} />
<Story name="Connect to Metamask" args={{icon: fox, label: 'Connect to Metamask', solid: false, metamask: true}} />
