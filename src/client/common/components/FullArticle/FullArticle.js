import React from "react";
import PropTypes from "prop-types";
import * as S from "./styles";

const FullArticle = ({ title, imgUrl, content, onClose, url }) => (
  <S.ArticleContainer>
    <S.ArticleTitle data-testid="article-title">{title}</S.ArticleTitle>

    <S.ArticleImage data-testid="article-image" src={imgUrl} alt={title} />

    <S.ArticleContent data-testid="article-content">{content}</S.ArticleContent>

    <S.FullRead href={url}>Go to source...</S.FullRead>

    <S.ActionBar>
      <S.GoBack data-testid="go-back" onClick={onClose}>
        Back to List
      </S.GoBack>
    </S.ActionBar>
  </S.ArticleContainer>
);

FullArticle.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired
};

export default FullArticle;
