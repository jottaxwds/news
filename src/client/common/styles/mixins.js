import { css } from "@emotion/core";

export const square = size => css`
  height: ${size};
  width: ${size};
`;

export const circle = size => css`
  height: ${size};
  width: ${size};
  border-radius: 50%;
`;
