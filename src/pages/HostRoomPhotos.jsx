import { useOutletContext } from "react-router-dom";

export function HostRoomPhotos() {
  const { imageUrl } = useOutletContext();

  return <img src={`/images/${imageUrl}`}></img>;
}
