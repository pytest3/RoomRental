import { styled } from "styled-components";

export const FullBleedWrapper = styled.div`
  margin-left: calc(var(--global-padding) * -1);
  margin-right: calc(var(--global-padding) * -1);
  grid-column: 1/-1;
`;
