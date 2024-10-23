export async function useHttpFetch<T>(key: string, url: string) {
  const asyncData = useAsyncData(key, () => {
    const promise = $fetch<T>(url, {
      headers: {
        Accept: "Application/json",
      },
    });

    return promise;
  });
  console.log(
    Object.fromEntries(
      Object.entries(asyncData).map(([key, val]) => [key, unref(val)])
    )
  );
  return asyncData;
}
