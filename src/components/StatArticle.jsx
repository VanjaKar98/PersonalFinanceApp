import { styled, keyframes } from "styled-components";

const strikeEffect = keyframes`
 0% {
    background-position: 80% 50%;
  }
  100% {
   background-position: 0% 50%;
  }
`;

const StyledArticle = styled.article`
  width: 100%;
  padding: 1.5rem 2.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(
      100deg,
      ${({ $accentColor }) => $accentColor} 35%,
      var(--accent-quaternary) 50%,
      ${({ $accentColor }) => $accentColor} 51%
    );
    background-size: 300% 100%;
    background-position: 100% 50%;
    content: "";
  }

  &:hover::before {
    animation: ${strikeEffect} 0.3s linear;
  }
`;

const StyledTitle = styled.h2`
  font-size: 0.85rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
`;

const StyledValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ $isBalanceStat, $positive }) =>
    !$isBalanceStat
      ? "var(--text-primary)"
      : $positive
      ? "var(--accent-primary)"
      : "var(--accent-tertiary)"};

  font-family: "Space Mono", monospace;

  &::before {
    content: "${({ $isBalanceStat, $positive }) =>
      !$isBalanceStat ? "€" : $positive ? "€" : "-€"}";
  }
`;

export default function StatArticle({
  children,
  isPositive,
  isBalanceStat,
  accentColor,
  value,
}) {
  const val = Math.abs(value).toLocaleString("hr-HR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <StyledArticle $accentColor={accentColor}>
      <StyledTitle>{children}</StyledTitle>
      <StyledValue $isBalanceStat={isBalanceStat} $positive={isPositive}>
        {val}
      </StyledValue>
    </StyledArticle>
  );
}
