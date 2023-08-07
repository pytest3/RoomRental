import { styled } from "styled-components";

function Tag(props) {
  return <TagWrapper {...props}></TagWrapper>;
}

const TagWrapper = styled.div`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "var(--color-orange-300)"};
  color: ${(props) => (props.backgroundColor ? "var(--color-white)" : "black")};
  padding: var(--space-2) var(--space-3);
  border-radius: var(--border-radius-medium);
  font-size: var(--font-size-1);
  display: grid;
  place-content: center;
  width: min-content;
`;

export default Tag;