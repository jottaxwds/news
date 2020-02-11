import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { NewsContext } from "./../../../context";
import * as S from "./styles";

import {
  SET_ACTIVE_ARTICLE,
  SET_PATH,
  SET_LOADING,
  DISABLE_COUNTRY_SELECTOR
} from "common/constants/actions";

import NoResultsMessage from "common/components/NoResultsMessage/NoResultsMessage";
import NewsList from "common/components/NewsList/NewsList";
import Card from "common/components/Card/Card";
import Spinner from "common/components/Spinner/Spinner";

const Search = ({ articles }) => {
  const {
    state: { globalLoading, country },
    dispatch
  } = useContext(NewsContext);

  let history = useHistory();

  const openArticle = ({ content, thumb, title, url }) => {
    dispatch({ type: DISABLE_COUNTRY_SELECTOR, value: true });
    dispatch({
      type: SET_ACTIVE_ARTICLE,
      value: { content, thumb, title, url }
    });
    dispatch({
      type: SET_PATH,
      value: "/search"
    });
    history.push("/search/article");
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
          <NoResultsMessage message={""}></NoResultsMessage>
        )}
      </NewsList>
    );
  }
};

Search.defaultProps = {
  articles: []
};

Search.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      content: PropTypes.string,
      thumb: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string
    })
  ).isRequired
};

export default Search;
