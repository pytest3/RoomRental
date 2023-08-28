import { styled } from "styled-components";
import { useState } from "react";

function Tag({ ...rest }) {
  return <TagWrapper {...rest}></TagWrapper>;
}

const TagWrapper = styled.div`
  /* filter: ${({ $clicked }) => ($clicked ? "grayscale(1)" : "none")}; */
  opacity: ${({ $clicked }) => ($clicked ? "0.3" : "1")};
  background-color: ${(rest) =>
    rest.$backgroundcolor ? rest.$backgroundcolor : "var(--color-orange-300)"};
  color: ${(rest) => (rest.$backgroundcolor ? "var(--color-white)" : "black")};
  padding: var(--space-2) var(--space-3);
  border-radius: var(--border-radius-medium);
  font-size: var(--font-size-1);
  display: grid;
  place-content: center;
  width: min-content;
`;

export { Tag };
