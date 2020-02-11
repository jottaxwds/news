import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Slider from "./../Slider";

describe("Slider Unit tests ->", () => {
  const slides = ["one", "two", "trhee", "four", "five"];

  const defaultProps = {
    children: slides,
    prevIcon: "p",
    nextIcon: "n",
    keyIndex: "keyx"
  };

  it("Should show expected prev indicator in prev-indicator", () => {
    const { getByTestId } = render(<Slider {...defaultProps} />);
    expect(getByTestId("prev-indicator").textContent).toEqual("p");
  });

  it("Should show default prev indicator in prev-indicator", () => {
    const { getByTestId } = render(
      <Slider {...defaultProps} prevIcon={null} />
    );
    expect(getByTestId("prev-indicator").textContent).toEqual(`<`);
  });

  it("Should show expected next indicator in prev-indicator", () => {
    const { getByTestId } = render(<Slider {...defaultProps} />);
    expect(getByTestId("next-indicator").textContent).toEqual("n");
  });

  it("Should show default prev indicator in prev-indicator", () => {
    const { getByTestId } = render(
      <Slider {...defaultProps} nextIcon={null} />
    );
    expect(getByTestId("next-indicator").textContent).toEqual(`>`);
  });
});
