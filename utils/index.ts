export default function fetcher(
  input: RequestInfo,
  init?: RequestInit | undefined
) {
  return fetch(input, init).then((res) => res.json())
}
