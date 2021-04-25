import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import {
  SET_TOPNEWS,
  SET_ACTIVE_ARTICLE,
  SET_PATH,
  SET_LOADING,
  DISABLE_COUNTRY_SELECTOR,
} from '../../constants/actions';
import Spinner from '../../components/Spinner/Spinner';
import Card from '../../components/Card/Card';
import NoResultsMessage from '../../components/NoResultsMessage/NoResultsMessage';
import NewsList from '../../components/NewsList/NewsList';
import { NewsContext } from '../../../context';
import Api from '../../../api/Api';

const TopNews = () => {
  const { state: { topNewsByCountry: { country: currentCountry, articles },
    globalLoading,
    country },
  dispatch } = useContext(NewsContext);

  const history = useHistory();

  useEffect(() => {
    const getTopNews = async () => {
      try {
        dispatch({ type: DISABLE_COUNTRY_SELECTOR, value: true });
        dispatch({ type: SET_LOADING, value: true });
        const { topNews } = await Api.getTopNewsByCountry({ country });
        dispatch({ type: SET_TOPNEWS, value: { country, articles: topNews } });
        dispatch({ type: SET_LOADING, value: false });
        dispatch({ type: DISABLE_COUNTRY_SELECTOR, value: false });
      } catch (err) {
        console.log('Error...', err); // eslint-disable-line no-console
      }
    };
    if (currentCountry === country) {
      return;
    }
    getTopNews();
  }, [country]);

  const openArticle = ({ content, thumb, title, url }) => {
    dispatch({ type: DISABLE_COUNTRY_SELECTOR, value: true });
    dispatch({
      type: SET_ACTIVE_ARTICLE,
      value: { content, thumb, title, url },
    });
    dispatch({
      type: SET_PATH,
      value: '/topnews',
    });
    history.push('/topnews/article');
  };

  if (globalLoading) {
    return <Spinner />;
  }
  return (
    <NewsList>
      { (articles && articles.length > 0) ? (
        articles.map(({ description, content, thumb, title, url }, index) => (
          <Card
            key={`news_${index}`}
            title={title || ''}
            description={description || ''}
            thumb={thumb || ''}
            onCardOpen={() => {
              openArticle({ content, thumb, title, url });
            }}
          />
        ))
      ) : (
        <NoResultsMessage message="No news to show..." />
      )}
    </NewsList>
  );
};

export default TopNews;
