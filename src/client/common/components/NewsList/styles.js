import styled from '@emotion/styled';

import { space } from '../../styles/spacing';
import screen from '../../styles/screen';

export const NewsList = styled.ul`
  display: flex;
  flex-flow: row;
  margin: auto;
  justify-content: start;
  padding: ${space.x2} 0;
  flex-wrap: wrap;

  & > * {
    margin-left: ${space.x1};
    margin-right: ${space.x1};
    list-style: none;

    @media screen and (min-width: ${screen.xl}) {
      width: calc(100% * (1 / 4) - ${space.x2});
    }

    @media screen and (min-width: ${screen.m}) and (max-width: ${screen.xl}) {
      width: calc(100% * (1 / 3) - ${space.x2});
    }

    @media screen and (max-width: ${screen.m}) {
      width: calc(100% * (1 / 2) - ${space.x2});
    }

    @media screen and (max-width: ${screen.s}) {
      width: 100%;
    }
  }
`;
