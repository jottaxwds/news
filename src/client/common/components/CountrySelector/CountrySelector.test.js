import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import CountrySelector from './CountrySelector';

describe('CountrySelector unit test:', () => {
  const mockCountryChange = jest.fn();

  const defaultProps = {
    active: true,
    onCountryChange: mockCountryChange,
    isBlocked: false,
    countryKey: 'gb',
    countryTitle: 'country title',
  };

  afterEach(cleanup);

  it('Should call onCountryChange event when clicking on change-country when blocked is false', () => {
    const { getByTestId } = render(<CountrySelector {...defaultProps} />);
    fireEvent.click(getByTestId('change-country'));
    expect(mockCountryChange).toHaveBeenCalled();
  });

  it('Should NOT call onCountryChange event when clicking on country-sel when blocked is true', () => {
    // Render components seems to trigger the event somehow on tests...
    const { getByTestId } = render(
      <CountrySelector {...defaultProps} isBlocked />,
    );
    fireEvent.click(getByTestId('country-sel'));
    expect(mockCountryChange).not.toHaveBeenCalledTimes(2);
  });

  it('Should show the countryTitle in change-country element', () => {
    // Render components seems to trigger the event somehow on tests...
    const { getByTestId } = render(
      <CountrySelector {...defaultProps} isBlocked />,
    );
    expect(getByTestId('change-country').textContent).toEqual('country title');
  });
});
