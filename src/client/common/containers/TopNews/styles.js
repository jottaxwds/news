import styled from "@emotion/styled";
import { space } from "common/styles/spacing";
import fonts from "common/styles/fonts";
import screen from "common/styles/screen";

export const TopNewsScreen = styled.div`
  padding: ${space.x2} ${space.x15};
  @media screen and (max-width: ${screen.s}) {
    padding: ${space.x15} ${space.x025};
  }
`;

export const TopNewsScreenTitle = styled.h2`
  font-size: ${fonts.sizes.l};
`;
