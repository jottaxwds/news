import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar unit test:', () => {
  const mockOnSearch = jest.fn();

  const defaultProps = {
    onSearch: mockOnSearch,
  };

  afterEach(cleanup);

  it('Should trigger onSearch event when clicking in search-input', () => {
    const { getByTestId } = render(<SearchBar {...defaultProps} />);
    fireEvent.change(getByTestId('search-input'), {
      target: { value: 'n' },
    });
    expect(getByTestId('search-input').value).toEqual('n');
  });

  it('Should trigger onSearch event when clicking in search-input', () => {
    const { getByTestId } = render(<SearchBar {...defaultProps} />);
    fireEvent.click(getByTestId('search-cta'));
    expect(mockOnSearch).toHaveBeenCalled();
  });
});
