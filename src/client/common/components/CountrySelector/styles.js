import styled from '@emotion/styled';

import { space } from '../../styles/spacing';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const CountryWrapper = styled.div`
  padding: ${space.x05} ${space.x1};
  text-align: center;
  cursor: pointer;
  background-color: ${({ active }) => ((active) ? 'red' : 'none')};
`;

const CountryTitle = styled.span`
  font-size: ${fonts.sizes.m};
  color: ${colors.black};
`;

export {
  CountryWrapper,
  CountryTitle,
};
