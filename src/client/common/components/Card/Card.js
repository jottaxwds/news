import React from "react";
import PropTypes from "prop-types";

import * as S from "./styles";

const Card = ({ title, thumb, description, moreText, onCardOpen }) => (
  <S.Card>
    <S.CardBody>
      <S.CardTitle data-testid="card-title">{title}</S.CardTitle>
      <S.CardThumb data-testid="card-image" imgPath={thumb} />
      <S.CardDescription data-testid="card-desc">
        {description.substr(0, 150)} ...
      </S.CardDescription>
      <S.CardMore data-testid="card-open" onClick={onCardOpen}>
        {moreText}
      </S.CardMore>
    </S.CardBody>
  </S.Card>
);

Card.defaultProps = {
  moreText: "Read More",
  onCardOpen: () => {}
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
  onCardOpen: PropTypes.func,
  moreText: PropTypes.string,
  description: PropTypes.string.isRequired
};

export default Card;
