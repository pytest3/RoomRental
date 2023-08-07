import { styled } from "styled-components";
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
          </p>
        </MissionStatement>
        <CallToAction>
          <CTAText>Step into the World of Room Rentals</CTAText>
          <CTAButton>Explore our rooms</CTAButton>
        </CallToAction>
      </AboutWrapper>
    </MaxWidthWrapper>
  );
}
const CTAButton = styled.button`
  font-size: var(--font-size-2);
`;
const CTAText = styled.p`
  font-size: var(--font-size-3);
  font-weight: var(--font-weight-bold);
  max-width: 20ch;
`;

const AboutWrapper = styled.div`
  display: grid;
  gap: var(--space-6);
  padding-bottom: var(--space-6);
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 200px;
`;

const Header = styled.h1`
  font-size: var(--font-size-6);
  line-height: 1.2;
`;

const MissionStatement = styled.div`
  display: grid;
  gap: var(--space-2);
  overflow: auto;
  margin: var(--space-1) 0;
`;

const CallToAction = styled.div`
  background-color: var(--color-orange-500);
  padding: var(--space-4) var(--space-6);
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
