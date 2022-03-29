<script>
    import {Meta, Template, Story} from '@storybook/addon-svelte-csf';
    import Headline from './headline.svelte';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta title="Atoms/Headline" component={Headline} />

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
    <Headline {...args} />
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story name="Default" args={{}} />

<Story name="Headline 1" args={{role: 'h1', text: 'Headline 1'}} />
<Story name="Headline 2" args={{role: 'h2', text: 'Headline 2'}} />
<Story name="Headline 3" args={{role: 'h3', text: 'Headline 3'}} />
<Story name="Headline 4" args={{role: 'h4', text: 'Headline 4'}} />
<Story name="Headline 5" args={{role: 'h5', text: 'Headline 5'}} />
<Story name="Headline 6" args={{role: 'h6', text: 'Headline 6'}} />
