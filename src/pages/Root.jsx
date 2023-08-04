import { Outlet } from "react-router-dom";
import NavBar from "../components/HomePage/NavBar";
import Footer from "../components/HomePage/Footer";
import { styled } from "styled-components";

export default function Root() {
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
  grid-template-rows: 45px 1fr 45px;
  height: 100%;
`;
