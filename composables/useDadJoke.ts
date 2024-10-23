export function useDadJoke() {
  const resp = useHttpFetch<{ id: string; joke: string; status: number }>(
    "dadjoke",
    "https://icanhazdadjoke.com"
  );
  return resp;
}
