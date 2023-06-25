export const load = async ({ data }) => {
  const blog = await import("$lib/test.svx");

  return {
    ...data,
    component: blog.default,
    metadata: blog.metadata,
  };
};
