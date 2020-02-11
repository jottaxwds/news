import { rem } from "polished";
import fonts from "./fonts";

const base = 8;

// Available sizes
const sizes = [
  0.25,
  0.5,
  0.75,
  1,
  1.25,
  1.5,
  1.75,
  2,
  2.25,
  2.5,
  3,
  4,
  5,
  6,
  7,
  8,
  9
];

const pixelsToRem = value => rem(value, fonts.sizes.base);

// Spacing
/**
 * It returns an object with all calculated sizes
 * Based on base of sizes (8) and root font size (10)
 * @example
 * // returns 1.6rem
 * space.x2
 */
export const space = sizes.reduce((result, size) => {
  const value = { ...result };
  const sizeName = `x${size.toString().replace(".", "")}`;
  value[sizeName] = pixelsToRem(base * size);
  return value;
}, {});

// Border
export const border = {
  size: `1px`,
  radius: `4px`
};
