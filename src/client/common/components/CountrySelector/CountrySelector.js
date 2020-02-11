import React from "react";
import PropTypes from "prop-types";

import * as S from "./styles";

const CountrySelector = ({
  active,
  isBlocked,
  onCountryChange,
  countryKey,
  countryTitle
}) => {
  return (
    <S.CountryWrapper
      data-testid={"country-sel"}
      active={active}
      onClick={() => {
        !isBlocked && onCountryChange(countryKey);
      }}
    >
      <S.CountryTitle data-testid={"change-country"}>
        {countryTitle}
      </S.CountryTitle>
    </S.CountryWrapper>
  );
};

CountrySelector.defaultProps = {
  active: false
};

CountrySelector.propTypes = {
  active: PropTypes.bool,
  onCountryChange: PropTypes.func.isRequired,
  isBlocked: PropTypes.bool.isRequired,
  countryKey: PropTypes.string.isRequired,
  countryTitle: PropTypes.string.isRequired
};

export default CountrySelector;
