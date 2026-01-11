import styled from "styled-components";

const StyledIcon = styled.span`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  background: rgba(0, 255, 136, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const transactionIcons = {
  salary: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM10 4H14V6H10V4ZM12 17C9.79 17 8 15.21 8 13C8 10.79 9.79 9 12 9C14.21 9 16 10.79 16 13C16 15.21 14.21 17 12 17Z"
        fill="currentColor"
      />
      <circle cx="12" cy="13" r="2" fill="currentColor" />
    </svg>
  ),

  otherIncome: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.8 10.9C9.53 10.31 8.8 9.7 8.8 8.75C8.8 7.66 9.81 6.9 11.5 6.9C13.28 6.9 13.94 7.75 14 9H16.21C16.14 7.28 15.09 5.7 13 5.19V3H10V5.16C8.06 5.58 6.5 6.84 6.5 8.77C6.5 11.08 8.41 12.23 11.2 12.9C13.7 13.5 14.2 14.38 14.2 15.31C14.2 16 13.71 17.1 11.5 17.1C9.44 17.1 8.63 16.18 8.52 15H6.32C6.44 17.19 8.08 18.42 10 18.83V21H13V18.85C14.95 18.48 16.5 17.35 16.5 15.3C16.5 12.46 14.07 11.49 11.8 10.9Z"
        fill="currentColor"
      />
    </svg>
  ),

  groceries: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z"
        fill="currentColor"
      />
    </svg>
  ),

  bills: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 10H9V17H7V10ZM11 7H13V17H11V7ZM15 13H17V17H15V13Z"
        fill="currentColor"
      />
    </svg>
  ),

  transportation: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.29 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5C5 13.67 5.67 13 6.5 13C7.33 13 8 13.67 8 14.5C8 15.33 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5C16 13.67 16.67 13 17.5 13C18.33 13 19 13.67 19 14.5C19 15.33 18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z"
        fill="currentColor"
      />
    </svg>
  ),

  entertainment: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 4L20 8H17L15 4H13L15 8H12L10 4H8L10 8H7L5 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V4H18Z"
        fill="currentColor"
      />
    </svg>
  ),

  shopping: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 6H17C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6H5C3.9 6 3 6.9 3 8V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V8C21 6.9 20.1 6 19 6ZM12 3C13.66 3 15 4.34 15 6H9C9 4.34 10.34 3 12 3ZM12 13C10.34 13 9 11.66 9 10H7C7 12.76 9.24 15 12 15C14.76 15 17 12.76 17 10H15C15 11.66 13.66 13 12 13Z"
        fill="currentColor"
      />
    </svg>
  ),

  travel: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z"
        fill="currentColor"
      />
    </svg>
  ),

  otherExpense: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"
        fill="currentColor"
      />
    </svg>
  ),
};

export default function TransactionIcon({ category }) {
  const icon = transactionIcons[category];

  return <StyledIcon>{icon}</StyledIcon>;
}
