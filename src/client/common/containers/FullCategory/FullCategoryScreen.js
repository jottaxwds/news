import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import {
  SET_ACTIVE_ARTICLE,
  SET_PATH,
  DISABLE_COUNTRY_SELECTOR,
} from '../../constants/actions';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import NewsList from '../../components/NewsList/NewsList';
import Card from '../../components/Card/Card';
import NoResultsMessage from '../../components/NoResultsMessage/NoResultsMessage';
import * as S from './styles';
import { NewsContext } from '../../../context';

const FullCategoryScreen = () => {
  const history = useHistory();
  const { state: { activeCategory: { category, articles }, country }, dispatch } = useContext(NewsContext);

  const openArticle = ({ content, thumb, title, url }) => {
    dispatch({ type: DISABLE_COUNTRY_SELECTOR, value: true });
    dispatch({
      type: SET_ACTIVE_ARTICLE,
      value: { content, thumb, title, url },
    });
    dispatch({
      type: SET_PATH,
      value: '/categories/category',
    });
    history.push('/categories/article');
  };
  return (
    <S.FullCategoryScreen>
      <SectionTitle message={`Top ${category} news from ${country}`} />
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
    </S.FullCategoryScreen>
  );
};

export default FullCategoryScreen;
