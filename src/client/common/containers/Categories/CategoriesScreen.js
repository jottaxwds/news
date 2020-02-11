import React, { useContext } from "react";
import * as S from "./styles";
import SectionTitle from "common/components/SectionTitle/SectionTitle";
import Categories from "./Categories";
import { NewsContext } from "./../../../context";

const CategoriesScreen = () => {
  const {
    state: { country },
    dispatch
  } = useContext(NewsContext);

  return (
    <S.CategoryScreen>
      <SectionTitle message={`Top five news by categories from: ${country}`} />
      <Categories />
    </S.CategoryScreen>
  );
};

export default CategoriesScreen;
