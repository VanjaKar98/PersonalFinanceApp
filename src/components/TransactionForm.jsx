import styled from "styled-components";

import { device } from "../styles/breakpoints";

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  background: var(--bg-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  @media (${device.mobileLandscape} and ${device.shortViewport}) {
    align-items: flex-start;
  }
`;

const StyledFormWrapper = styled.div`
  position: relative;
  width: 50%;
  max-width: 500px;
  padding: 2rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  div:nth-of-type(4) {
    margin-top: 1rem;
    gap: 1rem;
  }

  @media ${device.tablet} {
    width: 60%;
  }

  @media ${device.mobile} {
    width: 80%;
  }
`;

const StyledTitleDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3,
  button {
    font-size: 1.3rem;
    color: var(--text-primary);
  }

  button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: var(--text-muted);
    font-size: 1.5rem;
    font-weight: 800;
    cursor: pointer;

    &:hover {
      color: var(--text-primary);
    }
  }
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.2rem;

  label {
    color: var(--text-secondary);
    font-size: 0.9rem;
    font-weight: 600;
  }

  input {
    width: 100%;
    color: var(--text-primary);
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 0.75rem;
    font-size: 0.9rem;
    -moz-appearance: textfield;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:focus {
      outline: none;
      border-color: var(--accent-primary);
    }
  }

  select {
    width: 100%;
    color: var(--text-primary);
    padding: 0.75rem;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 8px;
    font-size: 0.9rem;
    cursor: pointer;

    &:focus {
      outline: none;
      border-color: var(--accent-primary);
    }
  }
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.8rem;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
`;

const StyledSubmitButton = styled(StyledButton)`
  background: linear-gradient(
    135deg,
    var(--accent-primary) 0%,
    var(--accent-secondary) 100%
  );
  border: none;
  color: var(--bg-primary);
`;

const StyledResetButton = styled(StyledButton)`
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  color: var(--text-primary);
`;

export default function TransactionForm({
  setFormVisibility,
  onSubmit,
  transactions,
}) {
  function setLastId() {
    const lastIndex = transactions.length - 1;
    const id = transactions[lastIndex].id + 1;
    return id;
  }

  function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData.entries());

    const newTransaction = {
      id: setLastId(),
      ...data,
      amount: parseFloat(data.amount),
      type:
        data.category === "salary" || data.category === "otherIncome"
          ? "income"
          : "expense",
    };

    onSubmit(newTransaction);
    document.querySelector("form").reset();
    console.log(transactions);
  }

  return (
    <StyledOverlay>
      <StyledFormWrapper>
        <StyledTitleDiv>
          <h3>Add New Transaction</h3>
          <button onClick={() => setFormVisibility(false)}>&#10005;</button>
        </StyledTitleDiv>

        <StyledForm
          action=""
          autoComplete="off"
          onSubmit={(event) => handleSubmit(event)}
        >
          <div>
            <label htmlFor="name">Transaction Name</label>
            <input type="text" name="name" id="name" required />
          </div>

          <div>
            <label htmlFor="category">Transaction Type</label>
            <select name="category" id="category" required>
              <option value="salary">Salary</option>
              <option value="otherIncome">Other Income</option>
              <option value="groceries" defaultValue>
                Groceries
              </option>
              <option value="transportation">Transportation</option>
              <option value="entertainment">Entertainment</option>
              <option value="shopping">Shopping</option>
              <option value="bills">Bills</option>
              <option value="travel">Travel</option>
              <option value="otherExpense">Other Expense</option>
            </select>
          </div>

          <div>
            <label htmlFor="amount">Amount (€)</label>
            <input
              type="number"
              name="amount"
              id="amount"
              step="0.01"
              required
            />
          </div>

          <div>
            <StyledSubmitButton type="submit">
              Add Transaction
            </StyledSubmitButton>
            <StyledResetButton type="reset">Cancel</StyledResetButton>
          </div>
        </StyledForm>
      </StyledFormWrapper>
    </StyledOverlay>
  );
}
