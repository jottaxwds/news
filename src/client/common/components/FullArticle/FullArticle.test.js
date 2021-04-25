import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import FullArticle from './FullArticle';

describe('FullArticle specs', () => {
  const mockClose = jest.fn();

  const defaultProps = {
    title: 'title',
    imgUrl: 'image',
    content: 'content',
    onClose: mockClose,
  };

  it('Should show title', () => {
    const { getByTestId } = render(<FullArticle {...defaultProps} />);
    expect(getByTestId('article-title').textContent).toEqual('title');
  });
  it('Should show content', () => {
    const { getByTestId } = render(<FullArticle {...defaultProps} />);
    expect(getByTestId('article-content').textContent).toEqual('content');
  });
  it('Should place given path to image source', () => {
    const { getByTestId } = render(<FullArticle {...defaultProps} />);
    expect(getByTestId('article-image').src).toEqual('http://localhost/image');
  });
  it('Should trigger event when clicking on go back button', () => {
    const { getByTestId } = render(<FullArticle {...defaultProps} />);
    fireEvent.click(getByTestId('go-back'));
    expect(mockClose).toHaveBeenCalled();
  });
});
