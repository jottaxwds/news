import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const SectionTitle = ({ message }) => <S.Message>{message}</S.Message>;

SectionTitle.defaultProps = {
  message: ""
};

SectionTitle.propTypes = {
  message: PropTypes.string
};

export default SectionTitle;
