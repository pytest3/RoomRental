import { useOutletContext } from "react-router-dom";
import { styled } from "styled-components";

export function HostRoomPricing() {
  const [price] = useOutletContext();

  return (
    <Price>
      <strong>${price}</strong> /month
    </Price>
  );
}

const Price = styled.div`
  font-size: var(--font-size-7);
`;
