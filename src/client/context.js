import React, { useReducer } from "react";
import {
  SET_CATEGORIZED,
  SET_SEARCH_RESULTS,
  SET_TOPNEWS,
  CLEAR_SEARCH_RESULTS,
  SET_ACTIVE_ARTICLE,
  CLEAR_ACTIVE_ARTICLE,
  SET_ACTIVE_CATEGORY,
  CLEAR_ACTIVE_CATEGORY,
  SET_PATH,
  CLEAR_PATH,
  SET_COUNTRY,
  SET_LOADING,
  DISABLE_COUNTRY_SELECTOR
} from "common/constants/actions";

const initialState = {
  categorizedArticles: { country: "", categorized: [] },
  topNewsByCountry: { country: "", articles: [] },
  searchResults: { searchParam: "", country: "", articles: [] },
  activeArticle: {},
  country: "gb",
  latestPath: "",
  globalLoading: false,
  countrySelectorDisabled: false
};

const NewsContext = React.createContext(initialState);

let reducer = (state, action) => {
  switch (action.type) {
    case SET_COUNTRY:
      return { ...state, country: action.value };
    case SET_CATEGORIZED:
      return { ...state, categorizedArticles: action.value };
    case SET_TOPNEWS:
      return { ...state, topNewsByCountry: action.value };
    case CLEAR_SEARCH_RESULTS:
      return { ...state, searchResults: [] };
    case SET_SEARCH_RESULTS:
      return { ...state, searchResults: action.value };
    case SET_ACTIVE_ARTICLE:
      return { ...state, activeArticle: action.value };
    case CLEAR_ACTIVE_ARTICLE:
      return { ...state, activeArticle: {} };
    case SET_ACTIVE_CATEGORY:
      return { ...state, activeCategory: action.value };
    case CLEAR_ACTIVE_CATEGORY:
      return { ...state, activeCategory: {} };
    case SET_PATH:
      return { ...state, latestPath: action.value };
    case CLEAR_PATH:
      return { ...state, latestPath: "" };
    case SET_LOADING:
      return { ...state, globalLoading: action.value };
    case DISABLE_COUNTRY_SELECTOR:
      return { ...state, countrySelectorDisabled: action.value };
    default:
      return;
  }
};

function NewsProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <NewsContext.Provider value={{ state, dispatch }}>
      {props.children}
    </NewsContext.Provider>
  );
}
export { NewsContext, NewsProvider };
