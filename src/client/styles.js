import { css } from '@emotion/core';
import styled from '@emotion/styled';

import colors from './common/styles/colors';

const AppStyles = css`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: Avenir, "Avenir Next", "Segoe UI", sans-serif;
    font-weight: regular;
  }
`;

const AppContainer = styled.div`
  width: 100%;
  display: block;
  padding: 0;
`;

const AppSection = styled.div`
  width: 100%;
  display: block;
`;

const AppContent = styled.div`
  background-color: ${colors.white};
  max-width: 1200px;
  margin: auto;
  border: 1px solid black;
`;

export {
  AppStyles,
  AppContent,
  AppContainer,
  AppSection,
};
