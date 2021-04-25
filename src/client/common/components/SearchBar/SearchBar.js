import React, { useState } from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <S.SearchBarWrapper>
      <S.SearchInput
        data-testid="search-input"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value || '');
        }}
        placeholder="Search term..."
      />
      <S.SearchCTA
        data-testid="search-cta"
        onClick={() => {
          onSearch(searchValue);
        }}
      >
        Search!
      </S.SearchCTA>
    </S.SearchBarWrapper>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
