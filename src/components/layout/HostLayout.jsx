import { NavLink, Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { MaxWidthWrapper } from "../wrappers";

export function HostLayout() {
  return (
    <MaxWidthWrapper>
      <HostLayoutWrapper>
        <Links>
          <StyledLink to="." end>
            Dashboard
          </StyledLink>
          <StyledLink to="income">Income</StyledLink>
          <StyledLink to="rooms">Rooms</StyledLink>
          <StyledLink to="reviews">Reviews</StyledLink>
        </Links>
        <Outlet></Outlet>
      </HostLayoutWrapper>
    </MaxWidthWrapper>
  );
}

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: var(--color-gray-900);

  &.active {
    text-decoration: underline;
    font-weight: bold;
    text-underline-offset: 4px;
  }
`;
const Links = styled.nav`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

const HostLayoutWrapper = styled.div`
  display: grid;
  gap: var(--space-4);
  grid-template-rows: 40px 30px 1fr;
  align-items: start;
  padding-top: var(--space-7);
  height: 100%;
`;
