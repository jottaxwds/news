import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { NewsContext } from "./../../../context";

import {
  CLEAR_ACTIVE_CATEGORY,
  CLEAR_PATH,
  SET_ACTIVE_ARTICLE,
  SET_PATH,
  DISABLE_COUNTRY_SELECTOR
} from "common/constants/actions";

import * as S from "./styles";
import SectionTitle from "common/components/SectionTitle/SectionTitle";
import NewsList from "common/components/NewsList/NewsList";
import Card from "common/components/Card/Card";

const FullCategoryScreen = () => {
  let history = useHistory();
  const {
    state: {
      activeCategory: { category, articles },
      latestPath,
      country
    },
    dispatch
  } = useContext(NewsContext);

  const closeFullCategory = () => {
    dispatch({ type: DISABLE_COUNTRY_SELECTOR, value: false });
    dispatch({
      type: CLEAR_ACTIVE_CATEGORY,
      value: {}
    });

    history.push(latestPath);
  };

  const openArticle = ({ content, thumb, title, url }) => {
    dispatch({ type: DISABLE_COUNTRY_SELECTOR, value: true });
    dispatch({
      type: SET_ACTIVE_ARTICLE,
      value: { content, thumb, title, url }
    });
    dispatch({
      type: SET_PATH,
      value: "/categories/category"
    });
    history.push("/categories/article");
  };
  return (
    <S.FullCategoryScreen>
      <SectionTitle message={`Top ${category} news from ${country}`} />
      <NewsList>
        {articles && articles.length > 0 ? (
          articles.map(({ description, content, thumb, title, url }, index) => (
            <Card
              key={`news_${index}`}
              title={title || ""}
              description={description || ""}
              thumb={thumb || ""}
              onCardOpen={() => {
                openArticle({ content, thumb, title, url });
              }}
            />
          ))
        ) : (
          <NoResultsMessage message={"No news to show..."}></NoResultsMessage>
        )}
      </NewsList>
    </S.FullCategoryScreen>
  );
};

export default FullCategoryScreen;
