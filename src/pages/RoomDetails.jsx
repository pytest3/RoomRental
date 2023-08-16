import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../mockdata/data";
import { styled } from "styled-components";
import { MaxWidthWrapper } from "../components/wrappers/MaxWidthWrapper";
import CTAButton from "../components/elements/CTAButton.jsx";
import { Tag } from "../components/elements";
import { roomTypes } from "../mockdata/roomTypes";

export function RoomDetails() {
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

  let color;

  color = roomTypes.filter((i) => i.type === type)[0].color;

  return (
    <MaxWidthWrapper>
      <Wrapper>
        <StyledLink to=".." relative="path">
          <LeftArrow>&larr;</LeftArrow> <span>Back to all rooms</span>
        </StyledLink>
        <Image src={`/images/${imageUrl}`}></Image>
        <TagWrapper>
          <Tag $backgroundcolor={color}>{type}</Tag>
        </TagWrapper>
        <h1>{name}</h1>
        <p>
          <Price>${price}</Price> / month
        </p>
        <Description>{description}</Description>
        <CTAButton height="44px">Rent this room</CTAButton>
      </Wrapper>
    </MaxWidthWrapper>
  );
}

const Image = styled.img`
  margin-bottom: var(--space-3);
`;
const Description = styled.div`
  margin-bottom: var(--space-4);
`;
const TagWrapper = styled.div`
  justify-self: start;
`;
const Price = styled.span`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-5);
`;
const Wrapper = styled.div`
  display: grid;
  padding: var(--space-6) 0;
  height: 100%;
  padding-bottom: var(--space-8);
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-gray-900);
  display: flex;
  align-items: center;
  padding-bottom: var(--space-3);
  gap: var(--space-2);
`;

const LeftArrow = styled.span`
  display: flex;
  align-items: center;
  font-weight: var(--font-weight-bolder);
  font-size: var(--font-size-6);
  margin-top: -5px;
`;
