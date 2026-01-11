import styled from "styled-components";

import StatsSection from "./StatsSection.jsx";

import TransactionsSection from "./TransactionsSection.jsx";

const StyledMain = styled.main`
  width: 100%;
  max-width: calc(1200px + 2rem);
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
`;

export default function Main({
  activeContent,
  setFormVisibility,
  transactions,
}) {
  return (
    <StyledMain>
      {activeContent === "dashboard" && (
        <StatsSection
          isActive={activeContent === "dashboard"}
          transactions={transactions}
        />
      )}
      {activeContent === "transactions" && (
        <TransactionsSection
          isActive={activeContent === "transactions"}
          setFormVisibility={setFormVisibility}
          transactions={transactions}
        />
      )}
    </StyledMain>
  );
}
