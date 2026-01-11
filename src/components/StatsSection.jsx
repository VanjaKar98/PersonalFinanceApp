import StatArticle from "./StatArticle";

import styled from "styled-components";

const StyledStatsSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export default function StatsSection({ transactions }) {
  const totalIncome = transactions
    .filter((tran) => tran.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpenses = transactions
    .filter((tran) => tran.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <StyledStatsSection>
      <StatArticle
        isPositive={balance > 0}
        isBalanceStat={true}
        accentColor="var(--accent-primary)"
        value={balance}
      >
        Total balance
      </StatArticle>
      <StatArticle
        isBalanceStat={false}
        accentColor="var(--accent-secondary)"
        value={totalIncome}
      >
        Total income
      </StatArticle>
      <StatArticle
        isBalanceStat={false}
        accentColor="var(--accent-tertiary)"
        value={totalExpenses}
      >
        Total expenses
      </StatArticle>
    </StyledStatsSection>
  );
}
