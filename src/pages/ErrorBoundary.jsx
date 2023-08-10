import { styled } from "styled-components";
import CTAButton from "../components/elements/CTAButton";
import { MaxWidthWrapper } from "../components/wrappers";

export function ErrorBoundary() {
  return (
    <MaxWidthWrapper>
      <ErrorWrapper>
        <Header>Sorry, the page you were looking for was not found.</Header>
        <CTAButton to="/" color="black">
          Return to home
        </CTAButton>
      </ErrorWrapper>
    </MaxWidthWrapper>
  );
}

const Header = styled.h1`
  font-size: var(--font-size-6);
  max-width: 25ch;
`;

const ErrorWrapper = styled.div`
  display: grid;
  gap: 27px;
  margin-top: var(--space-9);
`;
