import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { space } from '../../styles/spacing';
import fonts from '../../styles/fonts';
import screen from '../../styles/screen';

const NavBarWrapper = styled.div``;

const Desktop = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  padding: ${space.x075} ${space.x2};
  border: 1px solid black;

  @media screen and (max-width: ${screen.m}) {
    display: none;
  }
`;

const DLink = styled(Link)`
  display: inline-block;
`;

const MLink = styled(Link)`
  padding: ${space.x1} ${space.x2};
  font-weight: bold;
  font-size: ${fonts.sizes.m};
`;

const Left = styled.div``;
const Right = styled.div``;
const MobileMenu = styled.ul`
  width: 80%;
  display: block;
  margin: auto;
  padding-top: ${space.x3};
`;
const MobileLink = styled.li`
  padding: ${space.x2} ${space.x2};
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Title = styled.div`
  background-color: ${({ lighted }) => ((lighted) ? 'red' : 'none')};
  padding: ${space.x1} ${space.x2};
  font-weight: bold;
  font-size: ${fonts.sizes.m};
`;

export {
  NavBarWrapper,
  Desktop,
  DLink,
  MLink,
  Left,
  Right,
  MobileMenu,
  MobileLink,
  Title,
};
