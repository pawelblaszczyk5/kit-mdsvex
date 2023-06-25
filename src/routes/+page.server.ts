export const load = () => {
  const streamedData = new Promise<{ data: string }>((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve({ data: "streamed data" }) : reject();
    }, 3000);
  });

  return {
    streamed: {
      streamedData,
    },
  };
};
