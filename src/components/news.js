const API_KEY = '';
const URL = ``;

export async function getNews() {
  let result = await fetch(URL).then(response => response.json());
  return result.articles;
}