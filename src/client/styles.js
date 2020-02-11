import { css } from "@emotion/core";
import styled from "@emotion/styled";
import colors from "common/styles/colors";
import { space } from "common/styles/spacing";

export const AppStyles = css`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: Avenir, "Avenir Next", "Segoe UI", sans-serif;
    font-weight: regular;
  }
`;

export const AppContainer = styled.div`
  width: 100%;
  display: block;
  padding: 0;
`;

export const AppSection = styled.div`
  width: 100%;
  display: block;
`;

export const AppContent = styled.div`
  background-color: ${colors.white};
  max-width: 1200px;
  margin: auto;
  border: 1px solid black;
`;
