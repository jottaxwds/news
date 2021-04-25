import { css } from '@emotion/core';

const square = (size) => css`
  height: ${size};
  width: ${size};
`;

const circle = (size) => css`
  height: ${size};
  width: ${size};
  border-radius: 50%;
`;

export {
  square,
  circle,
};
