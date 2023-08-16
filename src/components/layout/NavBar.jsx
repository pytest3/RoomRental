import { styled } from "styled-components";
import { NavLink, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <NavBarWrapper>
      <Logo to="/">RoomHub</Logo>
      <NavBarActions>
        <StyledLink to="/host">Host</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/rooms">Rooms</StyledLink>
      </NavBarActions>
    </NavBarWrapper>
  );
}

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: var(--color-gray-900);

  &.active {
    text-decoration: underline;
    font-weight: var(--font-weight-bold);
    text-underline-offset: 4px;
  }
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
  color: var(--color-gray-900);
`;

const NavBarWrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: end;
  padding: 0 var(--global-padding);
  background-color: var(--color-orange-100);
`;
