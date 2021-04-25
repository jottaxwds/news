import styled from '@emotion/styled';

/**
 * Base Svg for icons
 */
const Svg = styled.svg`
  display: inline-block;
  color: ${({ color }) => color || undefined};
`;

export default Svg;
