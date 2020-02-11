import React from "react";
import { render as rtlRender } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import serializer from "jest-emotion";
import { Global } from "@emotion/core";

import { global as globalStyles } from "../src/client/common/styles/global";

expect.addSnapshotSerializer(serializer);

function render(ui, ...rest) {
  return rtlRender(
    <>
      <Global styles={globalStyles} />
      {ui}
    </>,
    ...rest
  );
}

export * from "@testing-library/react";

// override the built-in render with the one that has the injected styles
export { render };
