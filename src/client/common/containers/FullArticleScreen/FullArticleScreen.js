import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { NewsContext } from "./../../../context";

import {
  CLEAR_ACTIVE_ARTICLE,
  CLEAR_PATH,
  DISABLE_COUNTRY_SELECTOR
} from "common/constants/actions";

import * as S from "./styles";
import FullArticle from "common/components/FullArticle/FullArticle";

const FullArticleScreen = () => {
  let history = useHistory();
  const {
    state: {
      activeArticle: { content, thumb, title, url },
      latestPath
    },
    dispatch
  } = useContext(NewsContext);

  const closeFullArticle = () => {
    dispatch({
      type: CLEAR_ACTIVE_ARTICLE,
      value: {}
    });
    dispatch({ type: DISABLE_COUNTRY_SELECTOR, value: false });
    history.push(latestPath);
  };

  return (
    <S.FullArticleScreen>
      <FullArticle
        content={content || ""}
        imgUrl={thumb || ""}
        title={title || ""}
        url={url || "#"}
        onClose={() => {
          closeFullArticle();
        }}
      />
    </S.FullArticleScreen>
  );
};

export default FullArticleScreen;
