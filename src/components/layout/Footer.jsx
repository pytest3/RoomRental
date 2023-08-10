import { styled } from "styled-components";

export default function Footer() {
  return <Wrapper>© RoomHub </Wrapper>;
}

const Wrapper = styled.footer`
  background-color: var(--color-gray-900);
  color: var(--color-gray-100);
  display: grid;
  place-items: center;
`;
