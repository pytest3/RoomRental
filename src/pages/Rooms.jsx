import { styled } from "styled-components";
import { MaxWidthWrapper } from "../components/wrappers";
import { data } from "../mockdata/data.js";
import { roomTypes } from "../mockdata/roomTypes.js";
import { Link, useSearchParams } from "react-router-dom";
import { Tag } from "../components/elements";
import { getColor } from "../utils/getColor";
import { useState } from "react";

export function Rooms() {
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  const filteredData = typeFilter
    ? data.filter((i) => i.type === typeFilter)
    : data;

  // const sp = new URLSearchParams(searchParams);
  // sp.set("name", "zac");
  // console.log(sp);
  // console.log(sp.toString());

  return (
    <MaxWidthWrapper>
      <RoomsWrapper>
        <Header>Explore our housing options</Header>
        <FilterBar>
          <Tags>
            {roomTypes.map((i) => (
              <StyledLink
                key={i.type}
                type={i.type}
                selected={typeFilter === i.type}
                // to={`?type=${i.type}`} if using <Link>
                onClick={() => setSearchParams({ type: i.type })}
              >
                {i.type}
              </StyledLink>
            ))}
          </Tags>
          <ClearButton to=".">Clear Filters</ClearButton>
        </FilterBar>
        <RoomsList>
          {filteredData.map((i) => (
            <li key={i.id}>
              <Room>
                <Link to={i.id.toString()}>
                  <Image src={`./images/${i.imageUrl}`}></Image>
                </Link>
                <Name>{i.name}</Name>
                <Price>
                  <Amount>${i.price}</Amount>/mth
                </Price>
                <Tag $backgroundcolor={getColor(roomTypes, i.type)}>
                  {i.type}
                </Tag>
              </Room>
            </li>
          ))}
        </RoomsList>
      </RoomsWrapper>
    </MaxWidthWrapper>
  );
}
const StyledLink = styled.button`
  opacity: ${({ $clicked }) => ($clicked ? "0.3" : "1")};
  background-color: ${({ selected, type }) =>
    selected ? getColor(roomTypes, type) : "var(--color-orange-300)"};
  color: ${({ selected }) => (selected ? "var(--color-white)" : "black")};
  padding: var(--space-1) var(--space-2);
  border-radius: var(--border-radius-medium);
  font-size: var(--font-size-1);
  display: grid;
  place-content: center;
  width: min-content;
  text-decoration: none;
  border: none;
`;
const FilterBar = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  margin-top: var(--space-3);
  margin-bottom: var(--space-7);
  overflow: auto;
  /* width: 200px; */
`;

const Tags = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  overflow: auto;
`;

const ClearButton = styled(Link)`
  font-size: var(--font-size-1);
  border-bottom: 1px solid black;
  color: black;
  text-decoration: none;
`;

const Amount = styled.span`
  font-weight: var(--font-weight-bold);
`;

const Price = styled.div``;
const Name = styled.div`
  font-weight: var(--font-weight-bold);
`;
const Image = styled.img`
  border-radius: var(--border-radius-medium);
`;
const Room = styled.article`
  display: grid;
  gap: var(--space-1);
`;
const Header = styled.h1`
  font-size: var(--font-size-6);
`;
const RoomsWrapper = styled.div`
  padding: var(--space-8) 0;
`;

const RoomsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: var(--space-5) var(--space-3);
`;
