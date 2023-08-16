import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { hostData } from "../mockdata/hostData";

export function HostRoomDetails() {
  const { id } = useParams();
  const roomData = hostData.filter((i) => i.id.toString() === id);
  const { name, description, type } = roomData[0];

  return (
    <OtherDetails>
      <div>
        <strong>Name: </strong>
        {name}
      </div>
      <div>
        <strong>Category: </strong>
        {type}
      </div>
      <div>
        <strong>Description: </strong>
        {description}
      </div>
      <div>
        <strong>Visibility: </strong>Public
      </div>
    </OtherDetails>
  );
}

const OtherDetails = styled.div`
  display: grid;
  gap: var(--space-3);
`;
