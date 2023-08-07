import { styled } from "styled-components";

function CTAButton(props) {
  return <Wrapper {...props}></Wrapper>;
}

const Wrapper = styled.button`
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

export default CTAButton;
