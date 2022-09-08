export async function fetchJson() {
  return fetch("src/data/data.json")
    .then((res) => res.json())
    .then((data) => data);
}
