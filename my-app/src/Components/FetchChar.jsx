const API_URL = 'https://jsonplaceholder.typicode.com/photos';

export async function FetchCharacters() {
  try {
    // Add the _limit query parameter to limit the number of photos to 10
    const response = await fetch(`${API_URL}?_limit=10`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
