import styled from "@emotion/styled";
import { space } from "common/styles/spacing";
import fonts from "common/styles/fonts";

export const Card = styled.li`
  margin-top: ${space.x2};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: ${space.x1} 0;
`;

export const CardBody = styled.div`
  display: flex;
  flex-flow: column;
`;

export const CardTitle = styled.h3`
  font-size: ${fonts.sizes.xl};
  padding: 0 ${space.x2};
  word-break: break-word;
  line-height: ${fonts.lineHeights.big};
`;

export const CardThumb = styled.div`
  width: 100%;
  display: inline-block;
  height: 200px;
  background-image: url('
  ${({ imgPath }) => imgPath}
  ');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: ${space.x1};
  margin-bottom: ${space.x1};
`;

export const CardDescription = styled.div`
  line-height: ${fonts.lineHeights.big};
  font-size: ${fonts.sizes.m};
  padding: 0 ${space.x2};
  word-break: break-word;
`;

export const CardMore = styled.div`
  font-size: ${fonts.sizes.xs};
  text-align: right;
  padding: 0 ${space.x2};
  color: blue;
  cursor: pointer;
`;
