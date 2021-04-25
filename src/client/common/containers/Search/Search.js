import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  SET_ACTIVE_ARTICLE,
  SET_PATH,
  DISABLE_COUNTRY_SELECTOR,
} from '../../constants/actions';
import NoResultsMessage from '../../components/NoResultsMessage/NoResultsMessage';
import NewsList from '../../components/NewsList/NewsList';
import Card from '../../components/Card/Card';
import Spinner from '../../components/Spinner/Spinner';
import { NewsContext } from '../../../context';

const Search = ({ articles }) => {
  const { state: { globalLoading }, dispatch } = useContext(NewsContext);
  const history = useHistory();

  const openArticle = ({ content, thumb, title, url }) => {
    dispatch({ type: DISABLE_COUNTRY_SELECTOR, value: true });
    dispatch({
      type: SET_ACTIVE_ARTICLE,
      value: { content, thumb, title, url },
    });
    dispatch({
      type: SET_PATH,
      value: '/search',
    });
    history.push('/search/article');
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
        <NoResultsMessage message="" />
      )}
    </NewsList>
  );
};

Search.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      content: PropTypes.string,
      thumb: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
    }),
  ).isRequired,
};

export default Search;
