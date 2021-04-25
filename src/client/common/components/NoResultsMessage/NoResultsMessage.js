import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const NoResultsMessage = ({ message }) => <S.Message>{message}</S.Message>;

NoResultsMessage.defaultProps = {
  message: '',
};

NoResultsMessage.propTypes = {
  message: PropTypes.string,
};

export default NoResultsMessage;
