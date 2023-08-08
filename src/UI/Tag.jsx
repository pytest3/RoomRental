import { styled } from "styled-components";
import { useEffect, useReducer, useState } from "react";
import { data } from "../mockdata/data";
import { roomTypes } from "../mockdata/roomTypes";

function Tag(props) {
  const [isClicked, setIsClicked] = useState(false);

  const { type, addFilter, removeFilter } = props;

  function handleClick() {
    if (isClicked) {
      removeFilter(type);
      setIsClicked(!isClicked);
    } else if (!isClicked) {
      addFilter(type);
      setIsClicked(!isClicked);
      console.log("here");
    }
  }

  // useEffect(() => {
  //   setIsClicked(false);
  //   console.log();
  // }, [isFilterClear]);

  return (
    <TagWrapper
      onClick={handleClick}
      $clicked={isClicked}
      {...props}
    ></TagWrapper>
  );
}

const TagWrapper = styled.div`
  filter: ${({ $clicked }) => ($clicked ? "grayscale(1)" : "none")};
  background-color: ${(props) =>
    props.backgroundcolor ? props.backgroundcolor : "var(--color-orange-300)"};
  color: ${(props) => (props.backgroundcolor ? "var(--color-white)" : "black")};
  padding: var(--space-2) var(--space-3);
  border-radius: var(--border-radius-medium);
  font-size: var(--font-size-1);
  display: grid;
  place-content: center;
  width: min-content;
`;

export default Tag;
