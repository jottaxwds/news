import React from 'react';

import * as S from './styles';

const Slide = ({ slideNumber, slide, children }) => (
  <S.Slide isCurrent={slideNumber === slide}>
    {children || null}
  </S.Slide>
);

export default Slide;
