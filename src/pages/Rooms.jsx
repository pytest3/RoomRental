import { styled } from "styled-components";
import { MaxWidthWrapper } from "../UI/MaxWidthWrapper";
import { data } from "../mockdata/data.js";
import { roomTypes } from "../mockdata/roomTypes.js";
import { Link } from "react-router-dom";
import Tag from "../UI/Tag";
import { getColor } from "../helper/getColor";
import { useState } from "react";

export default function Rooms() {
  const [filters, setFilters] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [isFilterClear, setIsFilterClear] = useState(false);

  function addFilter(type) {
    if (filters.includes(type)) {
      return;
    }
    const updatedFilters = [...filters, type];
    setFilters(updatedFilters);
    setFilteredData(data.filter((i) => !updatedFilters.includes(i.type)));
  }

  function removeFilter(type) {
    if (!filters.includes(type)) {
      return;
    }
    const updatedFilters = filters.filter((i) => i !== type);
    setFilters(updatedFilters);
    setFilteredData(data.filter((i) => !updatedFilters.includes(i.type)));
  }

  function clearFilters() {
    const updatedFilters = [];
    setFilters(updatedFilters);
    setFilteredData(data.filter((i) => !updatedFilters.includes(i.type)));
    setIsFilterClear(new Date().getTime());
  }

  return (
    <MaxWidthWrapper>
      <RoomsWrapper>
        <Header>Explore our housing options</Header>
        <FilterBar>
          <Tags key={isFilterClear}>
            {roomTypes.map((i) => (
              <Tag
                key={i.type}
                type={i.type}
                addFilter={addFilter}
                removeFilter={removeFilter}
              >
                {i.type}
              </Tag>
            ))}
          </Tags>
          <ClearButton onClick={clearFilters}>Clear Filters</ClearButton>
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
