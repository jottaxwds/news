import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

describe("Card specs", () => {
  const mockClose = jest.fn();

  const description =
    "Global markets were rattled by trade tensions on Tuesday after Donald Trump said that he saw 'no deadline'; to agree a truce with China and more text should be placed here please";

  const descriptionExpected =
    "Global markets were rattled by trade tensions on Tuesday after Donald Trump said that he saw 'no deadline'; to agree a truce with China and ...";

  const defaultProps = {
    title: "title",
    thumb: "image",
    description: description,
    onCardOpen: mockClose
  };

  it("Should trigger onCardOpen when clicking in more button", () => {
    const { getByTestId } = render(<Card {...defaultProps} />);
    fireEvent.click(getByTestId("card-open"));
    expect(mockClose).toHaveBeenCalled();
  });
});
