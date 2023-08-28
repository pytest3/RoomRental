import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { styled } from "styled-components";

export function RootLayout() {
  return (
    <RootWrapper>
      <NavBar />
      <Outlet />
      <Footer />
    </RootWrapper>
  );
}

const RootWrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 45px 1fr 45px;
  background-color: var(--color-orange-100);
  overflow: auto;
`;

// const StyledOutlet = styled(Outlet)`
//   background-color: red;
//   border: 10px solid red;
// `;
