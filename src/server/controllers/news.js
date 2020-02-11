const NewsAPI = require("newsapi");
const utils = require("../utils/news");

const API_KEY = process.env.API_KEY;
const DEFAULT_LANGUAGE = "en";
const DEFAULT_SORTING = "relevancy";

async function getTopNewsByCountry(country) {
  if (API_KEY) {
    const newsapi = new NewsAPI(API_KEY);
    const topNews = await newsapi.v2
      .topHeadlines({
        language: DEFAULT_LANGUAGE,
        country: country
      })
      .then(response => {
        if (response && response.articles) {
          return utils.parseNews(response.articles);
        } else {
          return [];
        }
      })
      .catch(err => null);
    return topNews;
  } else {
    return null;
  }
}

async function getAvailableCategoriesByCountry(country) {
  if (API_KEY) {
    const newsapi = new NewsAPI(API_KEY);
    const categories = await newsapi.v2
      .sources({
        language: "en",
        country: country
      })
      .then(response => {
        if (response && response.sources) {
          const categoriesInfo = utils.parseCategories(response.sources);
          const differentCategories = [
            ...new Set(response.sources.map(item => item.category))
          ];

          return { categoriesInfo, differentCategories };
        } else {
          return [];
        }
      })
      .catch(err => null);
    return categories;
  } else {
    return null;
  }
}

async function getTopFiveFromAllCategoriesByCountry({ categories, country }) {
  const newsByCategory = await Promise.all(
    categories.map(category =>
      getTopNewsByCategoryAndCountry({
        category,
        country,
        limit: 5
      })
    )
  );

  return await newsByCategory;
}

async function getTopNewsByCategoryAndCountry({ category, country, limit }) {
  if (API_KEY) {
    const newsapi = new NewsAPI(API_KEY);

    const topNews = await newsapi.v2
      .topHeadlines({
        language: DEFAULT_LANGUAGE,
        country,
        category,
        pageSize: limit
      })
      .then(response => {
        if (response && response.articles) {
          return utils.parseNews(response.articles);
        } else {
          return [];
        }
      })
      .catch(err => null);
    return { category: category, articles: topNews };
  } else {
    return [];
  }
}

async function getAllNewsBySourcesAndCountry({ sourcesByCategory, country }) {
  if (API_KEY) {
    const sourcesParam = sourcesByCategory.join(",");
    const newsapi = new NewsAPI(API_KEY);
    const filteredNews = await newsapi.v2
      .everything({
        sources: sourcesParam,
        language: DEFAULT_LANGUAGE,
        sortBy: DEFAULT_SORTING
      })
      .then(response => {
        if (response && response.articles) {
          return utils.parseNews(response.articles);
        } else {
          return [];
        }
      })
      .catch(err => null);
    return filteredNews;
  } else {
    return [];
  }
}

async function getNewsBySearchParam({ search }) {
  if (API_KEY) {
    const newsapi = new NewsAPI(API_KEY);
    const filteredNews = await newsapi.v2
      .everything({
        q: search,
        language: DEFAULT_LANGUAGE,
        sortBy: DEFAULT_SORTING
      })
      .then(response => {
        if (response && response.articles) {
          return utils.parseNews(response.articles);
        } else {
          return [];
        }
      })
      .catch(err => null);
    return filteredNews;
  } else {
    return [];
  }
}

module.exports = {
  getTopNewsByCountry: getTopNewsByCountry,
  getAvailableCategoriesByCountry: getAvailableCategoriesByCountry,
  getTopFiveFromAllCategoriesByCountry: getTopFiveFromAllCategoriesByCountry,
  getAllNewsBySourcesAndCountry: getAllNewsBySourcesAndCountry,
  getNewsBySearchParam: getNewsBySearchParam
};
