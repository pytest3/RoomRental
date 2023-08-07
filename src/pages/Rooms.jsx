import { styled } from "styled-components";
import { MaxWidthWrapper } from "../UI/MaxWidthWrapper";
import { data } from "../mockdata/data.js";
import { Link } from "react-router-dom";

export default function Rooms() {
  return (
    <MaxWidthWrapper>
      <RoomsWrapper>
        <Header>Explore our housing options</Header>
        <Filters>
          <Buttons>
            <Button>Apartment</Button>
            <Button>Condo</Button>
            <Button>Townhouse</Button>
            <Button>Shophouse</Button>
          </Buttons>
          <ClearButton>Clear</ClearButton>
        </Filters>
        <RoomsList>
          {data.map((i) => (
            <li key={i.id}>
              <Room>
                <Link to={i.id.toString()}>
                  <Image src={`./images/${i.imageUrl}`}></Image>
                </Link>
                <Name>{i.name}</Name>
                <Price>${i.price} / mth</Price>
                <Type>{i.type}</Type>
              </Room>
            </li>
          ))}
        </RoomsList>
      </RoomsWrapper>
    </MaxWidthWrapper>
  );
}

const Filters = styled.ul`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  margin-top: var(--space-3);
  margin-bottom: var(--space-5);
`;

const Buttons = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  overflow: auto;
`;

const ClearButton = styled.p`
  font-size: var(--font-size-1);
  text-decoration: underline;
`;

const Button = styled.button`
  background-color: var(--color-orange-300);
  border: none;
  font-size: var(--font-size-1);
  border-radius: var(--border-radius-medium);
  padding: 4px 16px;
`;

const Type = styled.div``;
const Price = styled.div``;
const Name = styled.div``;
const Image = styled.img`
  border-radius: var(--border-radius-medium);
`;
const Room = styled.article``;
const Header = styled.h1`
  font-size: var(--font-size-6);
`;
const RoomsWrapper = styled.div`
  padding-top: var(--space-6);
`;

const RoomsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: var(--space-4);
  overflow: ;
`;
