import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import SlideButton from "./../SlideButton";

describe("CountrySelector unit test:", () => {
  const mockSlide = jest.fn();
  const label = "label";

  it("Should call onClick event when clicking on slide-it", () => {
    const { getByTestId } = render(
      <SlideButton onClick={mockSlide}>{label}</SlideButton>
    );
    fireEvent.click(getByTestId("slide-it"));
    expect(mockSlide).toHaveBeenCalled();
  });

  it("Should display given children content", () => {
    const { getByTestId } = render(
      <SlideButton onClick={mockSlide}>{label}</SlideButton>
    );
    getByTestId("slide-it");
    expect(getByTestId("slide-it").textContent).toEqual(label);
  });
});
