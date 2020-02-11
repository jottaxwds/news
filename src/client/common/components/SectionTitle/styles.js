import styled from "@emotion/styled";
import { space } from "common/styles/spacing";
import fonts from "common/styles/fonts";
import screen from "common/styles/screen";

export const Message = styled.h2`
  font-size: ${fonts.sizes.l};
  padding: ${space.x2} ${space.x15};
  @media screen and (max-width: ${screen.s}) {
    padding: 0 ${space.x1};
  }
`;
