import styled from "@emotion/styled";
import { space } from "common/styles/spacing";
import fonts from "common/styles/fonts";
import screen from "common/styles/screen";
import { Link } from "react-router-dom";

export const NavBarWrapper = styled.div``;

export const Desktop = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  padding: ${space.x075} ${space.x2};
  border: 1px solid black;

  @media screen and (max-width: ${screen.m}) {
    display: none;
  }
`;

export const DLink = styled(Link)`
  display: inline-block;
`;

export const MLink = styled(Link)`
  padding: ${space.x1} ${space.x2};
  font-weight: bold;
  font-size: ${fonts.sizes.m};
`;

export const Left = styled.div``;
export const Right = styled.div``;
export const MobileMenu = styled.ul`
  width: 80%;
  display: block;
  margin: auto;
  padding-top: ${space.x3};
`;
export const MobileLink = styled.li`
  padding: ${space.x2} ${space.x2};
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Title = styled.div`
  background-color: ${({ lighted }) => (lighted ? "red" : "none")};
  padding: ${space.x1} ${space.x2};
  font-weight: bold;
  font-size: ${fonts.sizes.m};
`;
