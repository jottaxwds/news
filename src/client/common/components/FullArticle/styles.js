import styled from "@emotion/styled";
import { space } from "common/styles/spacing";
import fonts from "common/styles/fonts";
import screen from "common/styles/screen";

export const ArticleContainer = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
`;
export const ArticleTitle = styled.h2`
  font-size: ${fonts.sizes.l};
  padding: ${space.x2} ${space.x15};
  line-height: ${fonts.lineHeights.big};
  @media screen and (max-width: ${screen.s}) {
    padding: 0 ${space.x1};
  }
`;
export const ArticleImage = styled.img`
  width: 100%;
  display: inline-block;
  margin: ${space.x15} 0;
`;
export const ArticleContent = styled.div`
  width: 100%;
  display: inline-block;
  font-size: ${fonts.sizes.m};
`;
export const ActionBar = styled.div`
  margin: ${space.x2} 0;
  width: 100%;
  display: inline-block;
`;
export const GoBack = styled.button`
  padding: ${space.x05} ${space.x1};
  background: none;
  font-size: ${fonts.sizes.s};
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

export const FullRead = styled.a`
  width: 100%;
  display: inline-block;
  padding: ${space.x1};
  color: blue;
  text-decoration: underline;
  text-align: right;
`;
