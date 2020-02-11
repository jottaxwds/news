import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

import { useToggle } from "./../../utils/hooks";

const Mobile = ({ children }) => {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <S.Mobile>
      <S.OpenButton
        onClick={() => {
          toggleOpen();
        }}
      >
        Menu
      </S.OpenButton>
      <S.Menu
        isOpen={isOpen}
        onClick={() => {
          toggleOpen();
        }}
      >
        <S.CloseButton
          onClick={() => {
            toggleOpen();
          }}
        >
          X
        </S.CloseButton>

        {children}
      </S.Menu>
    </S.Mobile>
  );
};

Mobile.defaultProps = {
  children: null
};
Mobile.propTypes = {
  children: PropTypes.node
};

export default Mobile;
