<script lang="ts" context="module">
  import { vstack } from "styled-system/patterns";

  const vstackClassName = vstack({ color: "red.800" });
</script>

<script lang="ts">
  import { hstack } from "styled-system/patterns";

  const hstackClassName = hstack({ color: "green.400" });
</script>

<h1>
  <slot />
</h1>

<p class={hstackClassName}>
  <span>Lorem</span>
  <span>Ipsum</span>
</p>

<p class={vstackClassName}>
  <span>Lorem</span>
  <span>Ipsum</span>
</p>
