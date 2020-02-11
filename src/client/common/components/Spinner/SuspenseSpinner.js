import React, { Suspense } from "react";
import Spinner from "./Spinner";
/**
 * Loads React.Suspense with children passed as prop
 * and spinner as fallback
 * @param {Object} props
 */
const SuspenseSpinner = ({ children, ...restProps }) => (
  <Suspense fallback={<Spinner />} {...restProps}>
    {children}
  </Suspense>
);

export default SuspenseSpinner;
