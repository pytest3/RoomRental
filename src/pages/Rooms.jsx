import { styled } from "styled-components";
import { MaxWidthWrapper } from "../UI/MaxWidthWrapper";
import { data } from "../mockdata/data.js";
import { roomTypes } from "../mockdata/roomTypes.js";
import { Link } from "react-router-dom";
import Tag from "../UI/Tag";
import { getColor } from "../helper/getColor";
import { useState } from "react";

export default function Rooms() {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [displayedRooms, setDisplayedRooms] = useState(data);

  function handleClick(type) {
    setSelectedTypes([...selectedTypes, type]);
  }
  // includes
  return (
    <MaxWidthWrapper>
      <RoomsWrapper>
        <Header>Explore our housing options</Header>
        <FilterBar>
          <Tags>
            {roomTypes.map((i) => (
              <Tag key={i.type} onClick={() => handleClick(i.type)}>
                {i.type}
              </Tag>
            ))}
          </Tags>
          <ClearButton>Clear Filters</ClearButton>
        </FilterBar>
        <RoomsList>
          {displayedRooms.map((i) => (
            <li key={i.id}>
              <Room>
                <Link to={i.id.toString()}>
                  <Image src={`./images/${i.imageUrl}`}></Image>
                </Link>
                <Name>{i.name}</Name>
                <Price>
                  <Amount>${i.price}</Amount>/mth
                </Price>
                <Tag backgroundcolor={getColor(roomTypes, i.type)}>
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

const FilterBar = styled.ul`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  margin-top: var(--space-3);
  margin-bottom: var(--space-7);
  overflow: auto;
`;

const Tags = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  overflow: auto;
`;

const ClearButton = styled.p`
  font-size: var(--font-size-1);
  text-decoration: underline;
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
