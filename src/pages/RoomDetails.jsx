import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../mockdata/data";
import { styled } from "styled-components";
import { MaxWidthWrapper } from "../UI/MaxWidthWrapper";
import CTAButton from "../UI/CTAButton.jsx";

export default function RoomDetails() {
  const { id } = useParams();
  const {
    id: roomId,
    name,
    price,
    description,
    address,
    imageUrl,
    type,
  } = data.filter((i) => i.id === Number(id))[0];

  console.log(data.filter((i) => i.id === Number(id))[0]);
  return (
    <MaxWidthWrapper>
      <Wrapper>
        <StyledLink to="/rooms"> ← Back to all rooms </StyledLink>
        <img src={`/images/${imageUrl}`}></img>
        <div>{type}</div>
        <h1>{name}</h1>
        <p>
          <Price>${price}</Price> / month
        </p>
        <p>{description}</p>
        <CTAButton height="44px">Rent this room</CTAButton>
      </Wrapper>
    </MaxWidthWrapper>
  );
}
const Price = styled.span`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-5);
`;
const Wrapper = styled.div`
  display: grid;
  padding: var(--space-6) 0;
  height: 100%;
  gap: 2px;
  padding-bottom: var(--space-8);
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-gray-900);
`;
