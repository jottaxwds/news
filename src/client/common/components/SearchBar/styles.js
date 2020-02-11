import styled from "@emotion/styled";
import { space } from "common/styles/spacing";
import fonts from "common/styles/fonts";

export const SearchBarWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: ${space.x1} ${space.x025};
  margin: auto;
  margin-top: ${space.x15}
  display: flex;
  flex-flow: row;
  justify-content: center;
`;
export const SearchInput = styled.input`
  padding: ${space.x025} ${space.x1};
  margin-right: ${space.x025};
  border: 1px solid black;
`;
export const SearchCTA = styled.button`
  padding: ${space.x025} ${space.x1};
  cursor: pointer;
`;
