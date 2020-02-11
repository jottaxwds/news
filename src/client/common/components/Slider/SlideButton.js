import React from "react";
import * as S from "./styles";

const SlideButton = ({ onClick, children }) => (
  <S.SlideButton data-testid={"slide-it"} onClick={onClick}>
    {children}
  </S.SlideButton>
);

export default SlideButton;
