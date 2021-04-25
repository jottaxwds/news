import styled from '@emotion/styled';

import { space } from '../../../styles/spacing';
import fonts from '../../../styles/fonts';
import screen from '../../../styles/screen';

const OpenButton = styled.button`
  cursor: pointer;
  font-size: ${fonts.sizes.m};
  padding: ${space.x15} ${space.x15};
`;

const Mobile = styled.div`
  display: none;

  @media screen and (max-width: ${screen.m}) {
    display: flex;
    flex-flow: row;
    width: 100%;
    background: none;
    padding: ${space.x075} ${space.x2};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  font-size: ${fonts.sizes.l};
  cursor: pointer;
  padding: ${space.x15} ${space.x15};
`;

const Menu = styled.div`
  position: absolute;
  height: 100%;
  padding: ${space.x1} ${space.x1};
  width: 100%;
  background-color: white;
  display: ${({ isOpen }) => ((isOpen) ? 'inline-block' : 'none')};
  top: 0;
  left: 0;
  z-index: 999;
`;

export {
  OpenButton,
  Mobile,
  CloseButton,
  Menu,
};
