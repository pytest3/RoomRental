import { styled } from "styled-components";
import CTAButton from "../UI/CTAButton";
import { MaxWidthWrapper } from "../UI/MaxWidthWrapper";
import Buttons from "../components/Buttons/component";
import { List } from "../components/List";

export function ErrorBoundary() {
  return (
    <MaxWidthWrapper>
      <ErrorWrapper>
        <Header>Sorry, the page you were looking for was not found.</Header>
        <CTAButton to="/" color="black">
          Return to home <List></List>
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
