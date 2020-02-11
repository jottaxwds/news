import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import Api from "./../../../api/Api";
import {
  SET_TOPNEWS,
  SET_ACTIVE_ARTICLE,
  SET_PATH,
  SET_LOADING,
  DISABLE_COUNTRY_SELECTOR
} from "common/constants/actions";

import { NewsContext } from "./../../../context";
import Spinner from "common/components/Spinner/Spinner";
import Card from "common/components/Card/Card";
import NoResultsMessage from "common/components/NoResultsMessage/NoResultsMessage";
import NewsList from "common/components/NewsList/NewsList";

import * as S from "./styles";

const TopNews = () => {
  const {
    state: {
      topNewsByCountry: { country: currentCountry, articles },
      globalLoading,
      country
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
          data: { topNews }
        } = await Api.getTopNewsByCountry({ country });
        dispatch({ type: SET_TOPNEWS, value: { country, articles: topNews } });
        dispatch({ type: SET_LOADING, value: false });
        dispatch({ type: DISABLE_COUNTRY_SELECTOR, value: false });
      } catch (err) {
        console.log("Error...", err);
      }
    };

    currentCountry !== country && getTopNews();
  }, [country]);

  const openArticle = ({ content, thumb, title, url }) => {
    dispatch({ type: DISABLE_COUNTRY_SELECTOR, value: true });
    dispatch({
      type: SET_ACTIVE_ARTICLE,
      value: { content, thumb, title, url }
    });
    dispatch({
      type: SET_PATH,
      value: "/topnews"
    });
    history.push("/topnews/article");
  };

  if (globalLoading) {
    return <Spinner />;
  } else {
    return (
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
    );
  }
};

export default TopNews;
