import { styled } from "styled-components";

// export default function MaxWidthWrapper(props) {
//   <div {...props} style={{ padding: "30px" }}></div>;
// }

// export default function MaxWidthWrapper() {
//   <Wrapper>{children}</Wrapper>;
// }
export const MaxWidthWrapper = styled.div`
  padding: 0 var(--global-padding);
  background-color: var(--color-orange-100);
`;
