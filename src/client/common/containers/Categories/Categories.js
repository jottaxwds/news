import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { NewsContext } from "./../../../context";

import Api from "./../../../api/Api";

import {
  SET_CATEGORIZED,
  SET_ACTIVE_CATEGORY,
  SET_ACTIVE_ARTICLE,
  SET_PATH,
  DISABLE_COUNTRY_SELECTOR,
  SET_LOADING
} from "common/constants/actions";
import NoResultsMessage from "common/components/NoResultsMessage/NoResultsMessage";
import Slider from "common/components/Slider";
import Card from "common/components/Card/Card";
import Spinner from "common/components/Spinner/Spinner";

import * as S from "./styles";

const Categories = () => {
  const {
    state: {
      categorizedArticles: { country: currentCountry, categorized },
      country,
      globalLoading
    },
    dispatch
  } = useContext(NewsContext);

  let history = useHistory();

  useEffect(() => {
    const getTopNews = async () => {
      try {
        dispatch({ type: DISABLE_COUNTRY_SELECTOR, value: true });
        dispatch({ type: SET_LOADING, value: true });
        const {
          data: { topNewsByCategory }
        } = await Api.getTopFiveCategorized({ country });

        dispatch({
          type: SET_CATEGORIZED,
          value: { country, categorized: topNewsByCategory }
        });
        dispatch({ type: SET_LOADING, value: false });
        dispatch({ type: DISABLE_COUNTRY_SELECTOR, value: false });
      } catch (err) {
        console.log("Error...", err);
      }
    };
    currentCountry !== country && getTopNews();
  }, [country]);

  const openCategory = async ({ category: inputCategory }) => {
    try {
      dispatch({ type: SET_LOADING, value: true });
      const {
        data: { category, articles }
      } = await Api.getAllNewsByCategoryAndCountry({
        category: inputCategory,
        country: "gb"
      });
      dispatch({
        type: SET_ACTIVE_CATEGORY,
        value: { category, articles }
      });
      dispatch({ type: DISABLE_COUNTRY_SELECTOR, value: true });
      dispatch({
        type: SET_PATH,
        value: "/categories"
      });

      history.push("/categories/category");
    } catch (err) {
      console.log("Error...", err);
    }
  };

  const openArticle = ({ content, thumb, title, url }) => {
    dispatch({
      type: SET_ACTIVE_ARTICLE,
      value: { content, thumb, title, url }
    });
    dispatch({
      type: SET_PATH,
      value: "/categories"
    });
    dispatch({ type: DISABLE_COUNTRY_SELECTOR, value: true });
    history.push("/categories/article");
  };

  if (globalLoading) {
    return <Spinner />;
  } else if (categorized.length > 0) {
    return categorized.map(cat => {
      const { category, articles } = cat;
      const cards = articles.map(
        ({ description, content, thumb, title, url }, index) => (
          <Card
            key={`${category}_CAT_${index}`}
            title={title || ""}
            description={description || ""}
            thumb={thumb || ""}
            onCardOpen={() => {
              openArticle({ content, thumb, title, url });
            }}
          />
        )
      );
      return (
        <S.CategoryWrapper>
          <S.CategoryLabel
            onClick={() => {
              openCategory({ category });
            }}
          >
            {category}
          </S.CategoryLabel>
          <S.SliderWrapper>
            <Slider key={`${category}_sldr`} keyIndex={category}>
              {cards}
            </Slider>
          </S.SliderWrapper>
        </S.CategoryWrapper>
      );
    });
  } else {
    return (
      <NoResultsMessage message={"No categories to show..."}></NoResultsMessage>
    );
  }
};

export default Categories;
