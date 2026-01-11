import { styled, keyframes } from "styled-components";

import Navigation from "./Navigation";

const logoColorMorph = keyframes`
 0% {
    background-position: 100% 50%;
  }
  100% {
   background-position: 0% 50%;
  }
`;

const StyledHeaderWraper = styled.header`
  width: 100%;
  padding: 2rem 3rem;
  background: rgba(26, 33, 66, 0.6);
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogo = styled.h1`
  color: transparent;
  font-size: 1.5rem;
  background: linear-gradient(
    100deg,
    var(--accent-primary) 30%,
    var(--accent-secondary) 50%,
    var(--accent-primary) 75%
  );
  background-size: 350% 100%;
  background-clip: text;
  animation: ${logoColorMorph} 20s infinite linear;
`;

export default function Header({ activeContent, setActiveContent }) {
  return (
    <StyledHeaderWraper>
      <StyledHeader>
        <StyledLogo>FINTRACK</StyledLogo>
        <Navigation
          activeContent={activeContent}
          setActiveContent={setActiveContent}
        />
      </StyledHeader>
    </StyledHeaderWraper>
  );
}
