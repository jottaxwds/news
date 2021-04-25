const express = require('express');

const router = express.Router();
const newsController = require('../../controllers/news');

const DEFAULT_COUNTRY = 'gb';

// @route   GET api/news/topnews
// @desc    Get topnews by given country
// @access  Public
router.get('/topnews/:country?', async (req, res) => {
  const { params: { country = DEFAULT_COUNTRY } } = req;
  const topNews = await newsController.getTopNewsByCountry(country);

  res.json({ topNews } || { err: 'NO_NEWS', msg: 'No news found' });
});

// @route   GET api/news/categories
// @desc    Get top 5 news by given category and country
// @access  Public
router.get('/categories/:country?', async (req, res) => {
  const { params: { country = DEFAULT_COUNTRY } } = req;

  const { differentCategories } = await newsController.getAvailableCategoriesByCountry(country);

  const topNewsByCategory = await newsController.getTopFiveFromAllCategoriesByCountry(
    {
      categories: differentCategories,
      country,
    },
  );
  res.json(
    { topNewsByCategory } || {
      err: 'NO_CATEGORIES',
      msg: 'No categories found',
    },
  );
});

// @route   GET api/news/category
// @desc    Get all news by given category and country
// @access  Public
router.get('/category/:country/:category', async (req, res) => {
  const { params: { country = DEFAULT_COUNTRY, category = '' } } = req;

  const { categoriesInfo } = await newsController.getAvailableCategoriesByCountry(country);

  const sourcesByCategory = categoriesInfo.reduce(
    (sources, { categoryId, source }) => {
      if (category === categoryId) { sources.push(source); }
      return sources;
    },
    [],
  );

  const newsBySources = await newsController.getAllNewsBySourcesAndCountry({
    sourcesByCategory,
    country,
  });

  res.json(
    { category, articles: [...newsBySources] } || {
      err: 'NO_CATEGORIES',

      msg: 'No categories found',
    },
  );
});

// @route   GET api/news/search
// @desc    Search news in country by given search param
// @access  Public
router.get('/search/:country?/:searchParam?', async (req, res) => {
  const { params: { searchParam = '' } } = req;

  const filteredNews = await newsController.getNewsBySearchParam({
    search: searchParam,
  });

  res.json(
    { filteredNews } || { err: 'NO_ARTICLES', msg: 'No articles found' },
  );
});

router.get('/test', (req, res) => {
  res.json({ msg: 'COOL!' });
});

module.exports = router;
