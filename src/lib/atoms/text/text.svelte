<script>
    export let role = 'h1';
</script>

{#if 'h1' === role}
    <h1>Headline 1</h1>
{:else if 'h2' === role}
    <h2>Headline 2</h2>
{:else}
    <h4>Default Case</h4>
{/if}
