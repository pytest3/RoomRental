import { styled } from "styled-components";

function Button(props) {
  return <CTAButton {...props}></CTAButton>;
}

const CTAButton = styled.button`
  background-color: var(--color-orange-900);
  color: var(--color-white);
  padding: var(--space-4) var(--space-2);
  border-radius: var(--border-radius-large);
  font-size: var(--font-size-4);
  border: none;
  font-weight: var(--font-weight-bold);
  height: ${(props) => (props.height ? props.height : "")};
  display: grid;
  place-content: center;
`;

export default Button;
