import axios from 'axios';

const API_KEY = '45663713-dfa6ca74103c7ea350b6beef4';
const BASE_URL = 'https://pixabay.com/api/';

let currentPage = 1;
export const perPage = 15;

export async function fetchImages(query) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: perPage,
  });

  try {
    const response = await axios.get(BASE_URL, { params: searchParams });
    return response.data;
  } catch (error) {
    throw new Error(error.response.status);
  }
}

export function incrementPage() {
  currentPage += 1;
}

export function resetPage() {
  currentPage = 1;
}
