import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { NewsContext } from "./../../../context";
import CountrySelector from "common/components/CountrySelector/CountrySelector";

import * as S from "./styles";
import { SET_COUNTRY, SET_LOADING } from "../../constants/actions";

const CountryMenu = () => {
  const {
    state: { country, countrySelectorDisabled },
    dispatch
  } = useContext(NewsContext);

  const handleCountryChange = newCountry => {
    dispatch({ type: SET_LOADING, value: true });
    dispatch({ type: SET_COUNTRY, value: newCountry });
  };

  const BLOCKER_PATHS = [
    "/categories/category",
    "/categories/article",
    "topnews/article",
    "search/article"
  ];
  const lockByNavPath =
    location && location.pathname && BLOCKER_PATHS.includes(location.pathname);

  const blockCountrySwitch = countrySelectorDisabled || lockByNavPath;

  return (
    <S.CountryMenu>
      <CountrySelector
        active={country === "gb"}
        isBlocked={blockCountrySwitch}
        countryKey={"gb"}
        countryTitle={"GB"}
        onCountryChange={handleCountryChange}
      />
      <CountrySelector
        active={country === "us"}
        isBlocked={blockCountrySwitch}
        countryKey={"us"}
        countryTitle={"US"}
        onCountryChange={handleCountryChange}
      />
    </S.CountryMenu>
  );
};

CountryMenu.defaultProps = {
  location: {
    pathname: ""
  }
};

CountryMenu.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

export default withRouter(CountryMenu);
