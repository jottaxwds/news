import styled from '@emotion/styled';

import { space } from '../../styles/spacing';

const CountryMenu = styled.div`
  margin: ${space.x15} ${space.x1} 0 0;
  display: flex;
  flex-flow: row;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 999;
`;

export {
  CountryMenu,
};
