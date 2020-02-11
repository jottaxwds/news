import React, { useContext } from "react";
import * as S from "./styles";
import SectionTitle from "common/components/SectionTitle/SectionTitle";
import TopNews from "./TopNews";
import { NewsContext } from "./../../../context";

const TopNewsScreen = () => {
  const {
    state: { country },
    dispatch
  } = useContext(NewsContext);
  return (
    <S.TopNewsScreen>
      <SectionTitle message={`Top News from: ${country}`} />
      <TopNews />
    </S.TopNewsScreen>
  );
};

export default TopNewsScreen;
