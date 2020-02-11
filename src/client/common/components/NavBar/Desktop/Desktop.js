import React from "react";
import PropTypes from "prop-types";

import * as S from "./../styles";

const Desktop = ({ children }) => <S.Desktop>{children}</S.Desktop>;

Desktop.defaultProps = {
  children: null
};

Desktop.propTypes = {
  children: PropTypes.node
};

export default Desktop;
