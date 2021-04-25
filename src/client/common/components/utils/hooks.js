import { useState } from 'react';

/**
 * Creates a flag state and its modifier
 * based on previous value
 * @param {Bool} initialState
 * @returns {Array}
 */
export const useToggle = (initialState = false) => {
  const [flag, setFlag] = useState(initialState);
  return [flag, () => setFlag(!flag)];
};
