import styled from "@emotion/styled";
import { space } from "common/styles/spacing";
import colors from "common/styles/colors";
import fonts from "common/styles/fonts";

export const CountryWrapper = styled.div`
  padding: ${space.x05} ${space.x1};
  text-align: center;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "red" : "none")};
`;

export const CountryTitle = styled.span`
  font-size: ${fonts.sizes.m};
  color: ${colors.black};
`;
