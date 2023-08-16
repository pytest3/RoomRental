import { useOutletContext, useParams } from "react-router-dom";
import { hostData } from "../mockdata/hostData";

export function HostRoomPhotos() {
  // const { id } = useParams();
  // const roomData = hostData.filter((i) => i.id.toString() === id);
  // const { imageUrl } = roomData[0];

  const { imageUrl } = useOutletContext();

  return <img src={`/images/${imageUrl}`}></img>;
}
