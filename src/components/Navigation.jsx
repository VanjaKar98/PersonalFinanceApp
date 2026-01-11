import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  & li {
    display: block;
  }
`;

const StyledButton = styled.button`
  position: relative;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
  }

  &::after {
    height: 2px;
    width: ${({ $isActive }) => ($isActive ? "115%" : "0")};
    background: var(--accent-primary);
    content: "";
    position: absolute;
    bottom: -3px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.1s linear;
  }

  &:hover::after {
    width: 115%;
  }
`;

export default function Navigation({ activeContent, setActiveContent }) {
  return (
    <StyledNav>
      <StyledUl>
        <li>
          <StyledButton
            $isActive={activeContent === "dashboard"}
            onClick={() => setActiveContent("dashboard")}
          >
            Dashboard
          </StyledButton>
        </li>

        <li>
          <StyledButton
            $isActive={activeContent === "transactions"}
            onClick={() => setActiveContent("transactions")}
          >
            Transactions
          </StyledButton>
        </li>
      </StyledUl>
    </StyledNav>
  );
}
