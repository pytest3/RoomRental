import React from "react";
import { useParams } from "react-router-dom";
import { hostData } from "../mockdata/hostData";
import { styled } from "styled-components";

export function HostRoomPricing() {
  const { id } = useParams();
  const roomData = hostData.filter((i) => i.id.toString() === id);
  const { price } = roomData[0];

  return (
    <Price>
      <strong>${price}</strong> /month
    </Price>
  );
}

const Price = styled.div`
  font-size: var(--font-size-7);
`;
