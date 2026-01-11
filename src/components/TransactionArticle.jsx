import styled from "styled-components";

import TransactionIcon from "./TransactionIcon.jsx";

const StyledLi = styled.li`
  width: 100%;
`;

const StyledArticle = styled.article`
  width: 100%;
  padding: 1.2rem;
  background: var(--bg-primary);
  border: 1px solid var(--border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledName = styled.h3`
  margin: 1rem 0;
  font-weight: 600;
  font-size: 0.95rem;
`;

const StyledCategory = styled.div`
  font-size: 0.8rem;
  color: var(--text-muted);
  text-transform: capitalize;
`;

const StyledAmount = styled.div`
  text-align: start;
  font-family: "Space Mono", monospace;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ $type }) =>
    $type === "income" ? "var(--accent-primary)" : "var(--text-primary)"};
  display: flex;
  align-items: center;

  &::before {
    content: "${({ $type }) => ($type === "income" ? "+€" : "-€")}";
  }
`;

export default function TransactionArticle({ name, category, amount, type }) {
  const income = amount.toLocaleString("hr-HR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <StyledLi>
      <StyledArticle>
        <TransactionIcon category={category} />
        <StyledName>{name}</StyledName>
        <StyledCategory $type={category}>{category}</StyledCategory>
        <StyledAmount $type={type}>{income}</StyledAmount>
      </StyledArticle>
    </StyledLi>
  );
}
