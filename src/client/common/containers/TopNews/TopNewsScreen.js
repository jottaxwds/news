import React, { useContext } from 'react';

import SectionTitle from '../../components/SectionTitle/SectionTitle';
import * as S from './styles';
import TopNews from './TopNews';
import { NewsContext } from '../../../context';

const TopNewsScreen = () => {
  const { state: { country } } = useContext(NewsContext);
  return (
    <S.TopNewsScreen>
      <SectionTitle message={`Top News from: ${country}`} />
      <TopNews />
    </S.TopNewsScreen>
  );
};

export default TopNewsScreen;
