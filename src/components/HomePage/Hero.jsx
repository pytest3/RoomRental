import { styled } from "styled-components";

styled;

export default function Hero() {
  return (
    <HeroImage>
      <HeroMessageWrapper>
        <HeroText>Find Your Perfect Room with RoomHub's Magic Touch!</HeroText>
        <HeroSubText>
          Your Room, Your Rules: Room Rentals Transformed to Suit Your Unique
          Taste and Preferences.
        </HeroSubText>
      </HeroMessageWrapper>
      <CTAButton>Find your room</CTAButton>
    </HeroImage>
  );
}

const HeroMessageWrapper = styled.div`
  display: grid;
  color: var(--color-white);
  gap: 14px;
`;
const HeroText = styled.h1`
  font-size: 30px;
  padding-top: 0px;
`;

const HeroSubText = styled.p`
  max-width: 50ch;
`;

const HeroImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
    url("images/for-rent-bg.jpg");
  background-position: 48% center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  display: grid;
  grid-template-rows: 2fr 1fr;
  align-items: center;
  color: var(--color-gray-100);
  padding: 30px;
`;

const CTAButton = styled.button`
  background-color: var(--color-orange-900);
  color: var(--color-white);
  padding: var(--space-4) var(--space-2);
  border-radius: var(--border-radius-large);
  font-size: var(--font-size-4);
  /* align-self: start; */
`;
