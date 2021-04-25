import React, { useContext, useEffect } from 'react';

import {
  SET_SEARCH_RESULTS,
  SET_LOADING,
  DISABLE_COUNTRY_SELECTOR,
} from '../../constants/actions';
import SearchBar from '../../components/SearchBar/SearchBar';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import * as S from './styles';
import { NewsContext } from '../../../context';
import Api from '../../../api/Api';
import Search from './Search';

const SearchScreen = () => {
  const { state: { searchResults: { articles }, country }, dispatch } = useContext(NewsContext);

  useEffect(() => {
    dispatch({ type: SET_LOADING, value: false });
  }, [country]);

  const handleSearch = async (searchValue) => {
    dispatch({ type: DISABLE_COUNTRY_SELECTOR, value: true });
    dispatch({ type: SET_LOADING, value: true });

    const { filteredNews } = await Api.searchTopNewsByTerm({
      country,
      searchParam: searchValue,
    });

    dispatch({
      type: SET_SEARCH_RESULTS,
      value: { searchParam: searchValue, country, articles: filteredNews },
    });

    dispatch({ type: SET_LOADING, value: false });
    dispatch({ type: DISABLE_COUNTRY_SELECTOR, value: false });
  };

  return (
    <S.SearchScreen>
      <SectionTitle message={`Search top news from ${country} by term:`} />

      <S.SearchBarWrapper>
        <SearchBar onSearch={handleSearch} />
      </S.SearchBarWrapper>

      {articles && articles.length > 0 && <Search articles={articles} />}
    </S.SearchScreen>
  );
};

export default SearchScreen;
