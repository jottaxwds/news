import styled from '@emotion/styled';

import { space } from '../../styles/spacing';
import fonts from '../../styles/fonts';

const CategoryScreen = styled.div`
  padding: ${space.x15};
`;

const CategoryScreenTitle = styled.h2`
  font-size: ${fonts.sizes.l};
`;

const CategoryWrapper = styled.div``;

const CategoryLabel = styled.h3`
  margin-top: ${space.x2};
  font-size: ${fonts.sizes.m};
  padding: 0 ${space.x1};
  text-transform: capitalize;
`;
const SliderWrapper = styled.div``;

export {
  CategoryScreen,
  CategoryScreenTitle,
  CategoryWrapper,
  CategoryLabel,
  SliderWrapper,
};
