import styled from "styled-components";

import TransactionArticle from "./TransactionArticle.jsx";

const StyledTransactionsSection = styled.section`
  width: 100%;
  padding: 1.2rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledTransactionsTitle = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.button`
  padding: 0.7rem 1rem;
  color: var(--bg-primary);
  background: linear-gradient(
    135deg,
    var(--accent-primary) 0%,
    var(--accent-secondary) 100%
  );
  font-family: "Sora", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 12px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 5px;

  &::before {
    content: "+";
  }
`;

export default function TransactionsSection({
  setFormVisibility,
  transactions,
}) {
  return (
    <StyledTransactionsSection>
      <StyledTransactionsTitle>
        <h2>Recent Transactions</h2>
        <StyledButton onClick={() => setFormVisibility(true)}>
          Add new
        </StyledButton>
      </StyledTransactionsTitle>
      <ul>
        {transactions.map((tran) => (
          <TransactionArticle
            key={tran.id}
            name={tran.name}
            category={tran.category}
            amount={tran.amount}
            type={tran.type}
          />
        ))}
      </ul>
    </StyledTransactionsSection>
  );
}
