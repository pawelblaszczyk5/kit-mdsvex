<script lang="ts">
  import { css } from "styled-system/css";

  export let data;
</script>

<h1 class={css({ color: "blue.500" })}>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<svelte:component this={data.component} />

<pre>{JSON.stringify(data.metadata, null, 2)}</pre>
