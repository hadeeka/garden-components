<script>
    export let role = '';
    export let text = '';
</script>

{#if 'h1' === role}
    <h1>{text}</h1>
{:else if 'h2' === role}
    <h2>{text}</h2>
{:else if 'h3' === role}
    <h3>{text}</h3>
{:else if 'h4' === role}
    <h4>{text}</h4>
{:else if 'h5' === role}
    <h5>{text}</h5>
{:else if 'h6' === role}
    <h6>{text}</h6>
{:else}
    <h6>{text}</h6>
{/if}
