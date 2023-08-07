import { Link } from "react-router-dom";
import { styled } from "styled-components";

function CTAButton(props) {
  return <Wrapper {...props}></Wrapper>;
}

const Wrapper = styled(Link)`
  background-color: ${(props) =>
    props.color ? props.color : "var(--color-orange-900)"};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "var(--font-size-3)")};
  color: var(--color-white);
  padding: var(--space-4) var(--space-5);
  border-radius: var(--border-radius-large);
  border: none;
  font-weight: var(--font-weight-bold);
  height: ${(props) => (props.height ? props.height : `48px`)};
  display: grid;
  place-content: center;
  text-decoration: none;
`;

export default CTAButton;
