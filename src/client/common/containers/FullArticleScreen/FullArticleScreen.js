import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import {
  CLEAR_ACTIVE_ARTICLE,
  DISABLE_COUNTRY_SELECTOR,
} from '../../constants/actions';
import FullArticle from '../../components/FullArticle/FullArticle';
import { NewsContext } from '../../../context';
import * as S from './styles';

const FullArticleScreen = () => {
  const history = useHistory();
  const { state: { activeArticle: { content, thumb, title, url },
    latestPath },
  dispatch } = useContext(NewsContext);

  const closeFullArticle = () => {
    dispatch({
      type: CLEAR_ACTIVE_ARTICLE,
      value: {},
    });
    dispatch({ type: DISABLE_COUNTRY_SELECTOR, value: false });
    history.push(latestPath);
  };

  return (
    <S.FullArticleScreen>
      <FullArticle
        content={content || ''}
        imgUrl={thumb || ''}
        title={title || ''}
        url={url || '#'}
        onClose={() => {
          closeFullArticle();
        }}
      />
    </S.FullArticleScreen>
  );
};

export default FullArticleScreen;
