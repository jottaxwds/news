import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useToggle } from "./hooks";
import { render } from "@testing-library/react";

describe("useToggle specs", () => {
  it("should set flag as true after instantiate as false and call toggle", () => {
    const { result } = renderHook(() => useToggle(false));
    const toggle = result.current[1];
    act(() => {
      toggle();
    });
    const flag = result.current[0];
    expect(flag).toBeTruthy();
  });
});
