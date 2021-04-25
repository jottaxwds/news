import React, { useContext } from 'react';

import SectionTitle from '../../components/SectionTitle/SectionTitle';
import * as S from './styles';
import Categories from './Categories';
import { NewsContext } from '../../../context';

const CategoriesScreen = () => {
  const { state: { country } } = useContext(NewsContext);

  return (
    <S.CategoryScreen>
      <SectionTitle message={`Top five news by categories from: ${country}`} />
      <Categories />
    </S.CategoryScreen>
  );
};

export default CategoriesScreen;
