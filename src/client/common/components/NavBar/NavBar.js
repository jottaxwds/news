import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as S from './styles';
import Desktop from './Desktop/Desktop';
import Mobile from './Mobile/Mobile';

const NavBar = ({ location: { pathname } }) => {
  const highlight = (routePath, matcher) => {
    const re = new RegExp(matcher, 'g');
    return routePath.match(re);
  };
  return (
    <S.NavBarWrapper>
      <Desktop>
        <S.Left>
          <S.DLink to="/topnews">
            <S.Title lighted={highlight(pathname, 'topnews')}>Top News</S.Title>
          </S.DLink>
          <S.DLink to="/categories">
            <S.Title lighted={highlight(pathname, 'categories')}>
              Categories
            </S.Title>
          </S.DLink>
          <S.DLink to="/search">
            <S.Title lighted={highlight(pathname, 'search')}>Search</S.Title>
          </S.DLink>
        </S.Left>
      </Desktop>

      <Mobile>
        <S.MobileMenu>
          <S.MobileLink>
            <S.MLink to="/topnews">Top News</S.MLink>
          </S.MobileLink>
          <S.MobileLink>
            <S.MLink to="/categories">Categories</S.MLink>
          </S.MobileLink>
          <S.MobileLink>
            <S.MLink to="/search">Search</S.MLink>
          </S.MobileLink>
        </S.MobileMenu>
      </Mobile>
    </S.NavBarWrapper>
  );
};

NavBar.defaultProps = {
  location: {
    pathname: 'gb',
  },
};

NavBar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

export default withRouter(NavBar);
