declare module "*.svx" {
  const component: import("svelte").ComponentType<
    import("svelte").SvelteComponent<Record<string, never>>
  >;

  const metadata: Record<string, unknown>;

  export { metadata };

  export default component;
}
