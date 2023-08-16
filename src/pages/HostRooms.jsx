import { Link } from "react-router-dom";
import { hostData } from "../mockdata/hostData";
import { styled } from "styled-components";

export function HostRooms() {
  return (
    <Wrapper>
      <Header>Host Rooms</Header>
      <div>
        {hostData.map((i) => (
          <Room key={i.id}>
            <Link to={i.id.toString()}>
              <Image src={`/images/${i.imageUrl}`}></Image>
            </Link>
            <Details>
              <RoomName>{i.name}</RoomName>
              <Price>${i.price} / month</Price>
            </Details>
          </Room>
        ))}
      </div>
    </Wrapper>
  );
}

const Price = styled.div`
  font-size: var(--font-size-3);
`;
const RoomName = styled.div`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-3);
`;
const Header = styled.h1`
  font-size: var(--font-size-6);
  font-weight: var(--font-weight-bold);
`;
const Wrapper = styled.div`
  display: grid;
  gap: var(--space-3);
  height: 100%;
  grid-template-rows: auto 1fr;
`;
const Details = styled.div`
  grid-column: 2;
  grid-row: 1/3;
  display: grid;
  align-items: space-around;
`;
const Image = styled.img`
  display: grid;
  grid-column: 1;
  grid-row: 1/3;
  align-self: center;
`;

const Room = styled.div`
  padding: var(--space-3);
  background-color: white;
  display: grid;
  grid-template-columns: 80px;
  grid-template-rows: auto auto;
  gap: 0 var(--space-4);
  text-decoration: none;
  color: var(--color-gray-900);
  margin-bottom: var(--space-4);
  border-radius: var(--border-radius-large);
`;
