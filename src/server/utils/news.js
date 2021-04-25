/**
 * Method that takes unformatted news and return
 * an array with formatted news (only fields desired)
 *  Formatted Article structure:
 *  {
 *    description
      content
      title
      sourceId
      url
      thumb
    }
 * @param {Array} news
 * @returns {Array} formattedArticles
 */

function parseNews(news) {
  const formattedArticles = news.reduce((newArticles, current) => {
    const article = {
      description: current.description,
      content: current.content,
      title: current.title,
      sourceId: current.source.id,
      url: current.url,
      thumb: current.urlToImage,
    };
    newArticles.push(article);
    return newArticles;
  }, []);
  return formattedArticles;
}

/**
 * Method that takes unformatted categories and return
 * an array with existing categories (only fields desired):
 * category structure:
 *  {
 *      id
 *      category
 *      url
 *  }
 *  @param {Array} categories
 *  @returns {Array} formattedCategories
 */
function parseCategories(allCategories) {
  const categories = (allCategories && allCategories.length > 0)
    ? [
      ...new Set(
        allCategories.map((item) => ({ categoryId: item.category, source: item.id })),
      ),
    ]
    : [];
  return categories;
}

module.exports = {
  parseNews,
  parseCategories,
};
