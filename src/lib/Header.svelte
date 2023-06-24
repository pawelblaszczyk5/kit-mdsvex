<script>
  import { hstack, vstack } from "styled-system/patterns";
</script>

<h1>
  <slot />
</h1>

<p class={hstack({ color: "green.400" })}>
  <span>Lorem</span>
  <span>Ipsum</span>
</p>

<p class={vstack({ color: "red.800" })}>
  <span>Lorem</span>
  <span>Ipsum</span>
</p>
