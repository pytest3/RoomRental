import { styled } from "styled-components";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <NavBarWrapper>
      <Logo to="/">RoomHub</Logo>
      <NavBarActions>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/rooms">Rooms</StyledLink>
      </NavBarActions>
    </NavBarWrapper>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const NavBarActions = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-self: end;
  gap: 10px;
`;
const Logo = styled(Link)`
  font-size: var(--font-size-6);
  text-decoration: none;
  font-weight: var(--font-weight-bold);
`;

const NavBarWrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: end;
  padding: 0 30px;
  background-color: var(--color-orange-100);
`;
