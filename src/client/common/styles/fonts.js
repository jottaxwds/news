// This is the root size used to calculate rem's
const base = 10;

// Font sizes
const sizes = {
  base: `${base}px`,
  xxs: '1rem',
  xs: '1.2rem',
  s: '1.4rem',
  m: '1.6rem',
  l: '1.7rem',
  xl: '2rem',
  xxl: '2.4rem',
  xxxl: '2.8rem',
  xxxxl: '5.6rem',
};

// Line height
const lineHeights = {
  extrasmall: '10px',
  small: '12px',
  regular: '15px',
  big: '24px',
};

// Letter-spacing
const letterSpacings = {
  higher: '1px',
  medium: '0.13px',
  zero: '0px',
  less: '-0.18px',
};

const fonts = {
  sizes,
  lineHeights,
  letterSpacings,
};

export default fonts;
