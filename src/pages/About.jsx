import { styled } from "styled-components";
import NavBar from "../components/HomePage/NavBar";
import { MaxWidthWrapper } from "../UI/MaxWidthWrapper";
import { FullBleedWrapper } from "../UI/FullBleed";

export default function About() {
  return (
    <MaxWidthWrapper>
      <AboutWrapper>
        <FullBleedWrapper>
          <Image src="./images/room-plants-pic.jpg" />
        </FullBleedWrapper>
        <MissionStatement>
          <Header>Where Spaces Become Homes</Header>
          <p>
            RoomHub's mission is to empower individuals to find their perfect
            living spaces effortlessly. We strive to redefine room rentals by
            curating a diverse selection of exceptional rooms that cater to
            every lifestyle and preference.
          </p>
          <p>
            With a focus on convenience, comfort, and seamless experiences, we
            are committed to providing a platform where users can explore,
            connect, and thrive in spaces that feel like home.
            {/* At RoomHub, we believe that
        every stay should be an adventure, and we are dedicated to helping our
        users discover their ideal rooms, create cherished memories, and
        embrace the joy of a home that truly resonates with their heart and
        soul. */}
          </p>
        </MissionStatement>
        <CallToAction>
          <h2>Step into the World of Room Rentals</h2>
          <button>Explore our rooms</button>
        </CallToAction>
      </AboutWrapper>
    </MaxWidthWrapper>
  );
}

const AboutWrapper = styled.div`
  display: grid;
  gap: var(--space-6);
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
`;

const Header = styled.h1`
  font-size: var(--font-size-6);
`;

const MissionStatement = styled.div`
  display: grid;
  gap: var(--space-2);
  overflow: auto;
`;

const CallToAction = styled.div`
  background-color: var(--color-orange-500);
  padding: var(--space-5) var(--space-6);
  border-radius: var(--border-radius-large);
  gap: var(--space-4);
  display: grid;
  justify-items: start;

  & > h2 {
    font-size: var(--font-size-4);
  }

  & > button {
    padding: var(--space-2) var(--space-4);
    border-radius: var(--border-radius-large);
    border: 0px;
    background-color: var(--color-offblack);
    color: var(--color-white);
  }
`;
