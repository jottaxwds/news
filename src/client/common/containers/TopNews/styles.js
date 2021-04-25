import styled from '@emotion/styled';

import { space } from '../../styles/spacing';
import fonts from '../../styles/fonts';
import screen from '../../styles/screen';

const TopNewsScreen = styled.div`
  padding: ${space.x2} ${space.x15};
  @media screen and (max-width: ${screen.s}) {
    padding: ${space.x15} ${space.x025};
  }
`;

const TopNewsScreenTitle = styled.h2`
  font-size: ${fonts.sizes.l};
`;

export {
  TopNewsScreen,
  TopNewsScreenTitle,
};
