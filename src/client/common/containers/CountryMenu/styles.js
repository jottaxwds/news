import styled from "@emotion/styled";
import { space } from "common/styles/spacing";
import colors from "common/styles/colors";
import fonts from "common/styles/fonts";
import screen from "common/styles/screen";

export const CountryMenu = styled.div`
  margin: ${space.x15} ${space.x1} 0 0;
  display: flex;
  flex-flow: row;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 999;
`;
