import styled from '@emotion/styled';

import { space } from '../../styles/spacing';

const SearchBarWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: ${space.x1} ${space.x025};
  margin: auto;
  margin-top: ${space.x15}
  display: flex;
  flex-flow: row;
  justify-content: center;
`;
const SearchInput = styled.input`
  padding: ${space.x025} ${space.x1};
  margin-right: ${space.x025};
  border: 1px solid black;
`;
const SearchCTA = styled.button`
  padding: ${space.x025} ${space.x1};
  cursor: pointer;
`;

export {
  SearchBarWrapper,
  SearchInput,
  SearchCTA,
};
