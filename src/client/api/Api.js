import RESTClient from "./RESTClient";

const BASE_URL = `http://localhost:${process.env.SERVER_PORT || 9001}`;

const client = new RESTClient({ baseURL: BASE_URL });

const DEFAULT_COUNTRY = "gb";

/**
 * It consumes the Rest client methods
 */
const API = {
  getTopFiveCategorized: ({ country = DEFAULT_COUNTRY }) =>
    client.get(`/api/news/categories/${country}`),
  getTopNewsByCountry: ({ country }) =>
    client.get(`/api/news/topnews/${country}`),
  getAllNewsByCategoryAndCountry: ({ category, country = DEFAULT_COUNTRY }) =>
    client.get(`/api/news/category/${country}/${category}`),
  searchTopNewsByTerm: ({ country = DEFAULT_COUNTRY, searchParam }) =>
    client.get(`/api/news/search/${country}/${encodeURI(searchParam)}`)
};

export default API;
