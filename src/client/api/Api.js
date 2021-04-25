import { fetchGetWithJson } from '../lib/fetchHelper';

const BASE_URL = `http://localhost:${process.env.SERVER_PORT || 9001}`;

const DEFAULT_COUNTRY = 'gb';

const API = {
  getTopFiveCategorized: ({ country = DEFAULT_COUNTRY }) => fetchGetWithJson(`${BASE_URL}/api/news/categories/${country}`),
  getTopNewsByCountry: ({ country }) => fetchGetWithJson(`${BASE_URL}/api/news/topnews/${country}`),
  getAllNewsByCategoryAndCountry: ({ category, country = DEFAULT_COUNTRY }) => fetchGetWithJson(`${BASE_URL}/api/news/category/${country}/${category}`),
  searchTopNewsByTerm: ({ country = DEFAULT_COUNTRY, searchParam }) => fetchGetWithJson(`${BASE_URL}/api/news/search/${country}/${encodeURI(searchParam)}`),
};

export default API;
