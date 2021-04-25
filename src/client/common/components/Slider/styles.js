import styled from '@emotion/styled';

import { space } from '../../styles/spacing';

const Slide = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  list-style: none;
  padding: ${space.x025} ${space.x1};
`;

const Slider = styled.div`
  display: block;
  width: 100%;
  margin: auto;
  height: 100%;
  position: relative;
  overflow: hidden;
`;
/* padding: ${space.x025} ${space.x2}; */
const Carousel = styled.div`
  display: inline-block;
  height: 100%;
  width: ${({ slides }) => slides * 100}%;
  display: flex;
  margin-left: ${({ slide }) => ((slide === 0) ? '0' : `-${slide * 100}%`)};
  transition: margin 300ms ease-in-out;
`;

const SlideButton = styled.div`
  background-color: white;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 25px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  cursor: pointer;
  margin: ${space.x025};

  &:last-child {
    left: auto;
    right: 25px;
  }
  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
`;

const SlideButtonIndicator = styled.span`
  width: 100%;
  text-align: center;
`;

export {
  Slide,
  Slider,
  Carousel,
  SlideButton,
  SlideButtonIndicator,
};
