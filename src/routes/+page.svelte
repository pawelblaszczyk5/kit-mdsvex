<script lang="ts">
  import Component, { metadata } from "$lib/test.svx";
  import { css } from "styled-system/css";
</script>

<h1 class={css({ color: "blue.500" })}>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<Component />

{JSON.stringify(metadata)}
