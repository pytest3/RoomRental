import { styled } from "styled-components";
import NavBar from "../components/HomePage/NavBar";
import Hero from "../components/HomePage/Hero";
import Footer from "../components/HomePage/Footer";

export default function Home() {
  return (
    <HomeWrapper>
      <NavBar />
      <Hero />
      <Footer />
    </HomeWrapper>
  );
}
const HomeWrapper = styled.div`
  display: grid;
  /* grid-template-columns: 1fr min(30ch, 100%) 1fr; */
  grid-template-rows: 80px 1fr 80px;
  height: 100%;
`;
