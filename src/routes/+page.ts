export const load = async () => {
  const blog = await import("$lib/test.svx");

  return {
    component: blog.default,
    metadata: blog.metadata,
  };
};
