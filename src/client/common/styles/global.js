import { css } from "@emotion/core";

import colors from "./colors";
import fonts from "./fonts";

// Global constants
export const appGlobals = {
  maxWidth: 1088,
  maxHeight: 648,
  verticalAir: 32,
  horizontalAir: 32,
  summaryAsideWidth: 312
};

// Global css
export const global = css`
  html {
    box-sizing: border-box;
    font-size: ${fonts.sizes.base};
  }

  * {
    box-sizing: inherit;
    box-sizing: inherit;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  button,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font: 100%;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  a {
    cursor: pointer;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: none;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  a {
    text-decoration: none;
  }

  input:not([type="checkbox"]):not([type="radio"]),
  textarea {
    appearance: none;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    margin: 0;
    appearance: none;
  }

  input[type="number"] {
    appearance: textfield;
  }

  input::-ms-clear {
    display: none;
  }

  select::-ms-expand {
    display: none;
  }

  textarea {
    overflow: auto;
    vertical-align: top;
  }

  input::placeholder {
    opacity: 1;
  }

  h2 {
    color: ${colors.secondary};
    text-transform: uppercase;
    letter-spacing: ${fonts.letterSpacings.higher};
    font-size: ${fonts.sizes.xs};
    line-height: ${fonts.lineHeights.regular};
  }
`;
