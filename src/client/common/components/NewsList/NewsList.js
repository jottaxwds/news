import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const NewsList = ({ children }) => <S.NewsList>{children}</S.NewsList>;

NewsList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NewsList;
