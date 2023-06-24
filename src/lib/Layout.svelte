<script lang="ts" context="module">
  import h1 from "$lib/Header.svelte";

  export { h1 };
</script>

<script lang="ts">
  import { hstack, vstack } from "styled-system/patterns";
</script>

<slot />

<p class={hstack({ color: "green.400" })}>
  <span>Lorem</span>
  <span>Ipsum</span>
</p>

<p class={vstack({ color: "red.800" })}>
  <span>Lorem</span>
  <span>Ipsum</span>
</p>
