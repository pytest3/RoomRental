import { styled } from "styled-components";
import { useState } from "react";

function Tag({ addFilter, removeFilter, ...rest }) {
  const [isClicked, setIsClicked] = useState(false);

  const { type } = rest;

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
      {...rest}
    ></TagWrapper>
  );
}

const TagWrapper = styled.div`
  /* filter: ${({ $clicked }) => ($clicked ? "grayscale(1)" : "none")}; */
  opacity: ${({ $clicked }) => ($clicked ? "0.3" : "1")};
  background-color: ${(rest) =>
    rest.$backgroundcolor ? rest.$backgroundcolor : "var(--color-orange-300)"};
  color: ${(rest) => (rest.$backgroundcolor ? "var(--color-white)" : "black")};
  padding: var(--space-2) var(--space-3);
  border-radius: var(--border-radius-medium);
  font-size: var(--font-size-1);
  display: grid;
  place-content: center;
  width: min-content;
`;

export default Tag;
