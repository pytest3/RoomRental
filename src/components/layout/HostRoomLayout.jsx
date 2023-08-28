import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { hostData } from "../../mockdata/hostData";
import { styled } from "styled-components";
import { Tag } from "../elements";
import { roomTypes } from "../../mockdata/roomTypes";

export function HostRoomLayout() {
  const { id } = useParams();
  const roomData = hostData.filter((i) => i.id.toString() === id);
  const { name, price, type, imageUrl } = roomData[0];

  let color;
  color = roomTypes.filter((i) => i.type === type)[0].color;

  return (
    <>
      <StyledBackLink to=".." relative="path">
        <LeftArrow>&larr;</LeftArrow> <span>Back to all rooms</span>
      </StyledBackLink>
      <Wrapper>
        <MainDescription>
          <Tag $backgroundcolor={color}>{type}</Tag>
          <Image src={`/images/${imageUrl}`}></Image>
          <Name>{name}</Name>
          <p>
            <strong>${price}</strong> / month
          </p>
        </MainDescription>
        <NavBar>
          <StyledNavLink end to=".">
            Details
          </StyledNavLink>
          <StyledNavLink to="pricing">Pricing</StyledNavLink>
          <StyledNavLink to="photos">Photos</StyledNavLink>
        </NavBar>
        <Outlet context={{ imageUrl, price }}></Outlet>
      </Wrapper>
    </>
  );
}

const LeftArrow = styled.span`
  display: flex;
  align-items: center;
  font-weight: var(--font-weight-bolder);
  font-size: var(--font-size-6);
  margin-top: -5px;
`;

const StyledBackLink = styled(Link)`
  text-decoration: none;
  color: var(--color-gray-900);
  display: flex;
  align-items: center;
  padding-bottom: var(--space-3);
  gap: var(--space-2);
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--color-gray-900);
  &.active {
    text-decoration: underline;
    text-underline-offset: 4px;
    font-weight: var(--font-weight-bold);
  }
`;

const NavBar = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: start;
  gap: var(--space-3);
  padding-bottom: var(--space-5);
`;
const Name = styled.h1`
  font-size: var(--font-size-4);
  line-height: 1.2;
`;
const Image = styled.img`
  grid-row: 1/-1;
  display: grid;
  object-fit: cover;
  height: 100%;
`;
const MainDescription = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr;
  grid-template-rows: auto auto auto;
  gap: var(--space-1) var(--space-4);
  padding-bottom: var(--space-5);
`;

const Wrapper = styled.div`
  display: grid;
  /* background-color: var(--color-gray-100); */
  background-color: white;
  grid-template-rows: auto auto 1fr;
  padding: var(--space-3);
  border-radius: var(--border-radius-larger);
  /* border: 1px solid red; */
`;
