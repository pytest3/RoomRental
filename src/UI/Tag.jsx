import { styled } from "styled-components";

function Tag(props) {
  return <TagWrapper {...props}></TagWrapper>;
}

const TagWrapper = styled.div`
  background-color: ${(props) => props.color};
  padding: var(--space-1) var(--space-2);
  color: var(--color-white);
  border-radius: var(--border-radius-medium);
  font-size: var(--font-size-1);
  display: grid;
  place-content: center;
`;

export default Tag;
