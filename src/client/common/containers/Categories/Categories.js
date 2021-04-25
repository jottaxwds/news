import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import {
  SET_CATEGORIZED,
  SET_ACTIVE_CATEGORY,
  SET_ACTIVE_ARTICLE,
  SET_PATH,
  DISABLE_COUNTRY_SELECTOR,
  SET_LOADING,
} from '../../constants/actions';
import NoResultsMessage from '../../components/NoResultsMessage/NoResultsMessage';
import Slider from '../../components/Slider';
import Card from '../../components/Card/Card';
import Spinner from '../../components/Spinner/Spinner';
import Api from '../../../api/Api';
import { NewsContext } from '../../../context';
import * as S from './styles';

const Categories = () => {
  const { state: { categorizedArticles: { country: currentCountry, categorized },
    country,
    globalLoading },
  dispatch } = useContext(NewsContext);

  const history = useHistory();

  useEffect(() => {
    const getTopNews = async () => {
      try {
        dispatch({ type: DISABLE_COUNTRY_SELECTOR, value: true });
        dispatch({ type: SET_LOADING, value: true });
        const { topNewsByCategory } = await Api.getTopFiveCategorized({ country });

        dispatch({
          type: SET_CATEGORIZED,
          value: { country, categorized: topNewsByCategory },
        });
        dispatch({ type: SET_LOADING, value: false });
        dispatch({ type: DISABLE_COUNTRY_SELECTOR, value: false });
      } catch (err) {
        console.log('Error...', err); // eslint-disable-line no-console
      }
    };
    if (currentCountry === country) { return; }
    getTopNews();
  }, [country]);

  const openCategory = async ({ category: inputCategory }) => {
    try {
      dispatch({ type: SET_LOADING, value: true });
      const { category, articles } = await Api.getAllNewsByCategoryAndCountry({
        category: inputCategory,
        country: 'gb',
      });
      dispatch({
        type: SET_ACTIVE_CATEGORY,
        value: { category, articles },
      });
      dispatch({ type: DISABLE_COUNTRY_SELECTOR, value: true });
      dispatch({
        type: SET_PATH,
        value: '/categories',
      });

      history.push('/categories/category');
    } catch (err) {
      console.log('Error...', err); // eslint-disable-line no-console
    }
  };

  const openArticle = ({ content, thumb, title, url }) => {
    dispatch({
      type: SET_ACTIVE_ARTICLE,
      value: { content, thumb, title, url },
    });
    dispatch({
      type: SET_PATH,
      value: '/categories',
    });
    dispatch({ type: DISABLE_COUNTRY_SELECTOR, value: true });
    history.push('/categories/article');
  };

  if (globalLoading) {
    return <Spinner />;
  } if (categorized.length > 0) {
    return categorized.map((cat) => {
      const { category, articles } = cat;
      const cards = articles.map(
        ({ description, content, thumb, title, url }, index) => (
          <Card
            key={`${category}_CAT_${index}`}
            title={title || ''}
            description={description || ''}
            thumb={thumb || ''}
            onCardOpen={() => {
              openArticle({ content, thumb, title, url });
            }}
          />
        ),
      );
      return (
        <S.CategoryWrapper key={`${category}_sldr-wrapper`}>
          <S.CategoryLabel key={`${category}_cat-label`}
            onClick={() => {
              openCategory({ category });
            }}
          >
            {category}
          </S.CategoryLabel>
          <S.SliderWrapper key={`${category}_cat-wrapper`}>
            <Slider key={`${category}_sldr`} keyIndex={category}>
              {cards}
            </Slider>
          </S.SliderWrapper>
        </S.CategoryWrapper>
      );
    });
  }
  return (
    <NoResultsMessage message="No categories to show..." />
  );
};

export default Categories;
