import Header from "./components/Header.jsx";

import Main from "./components/Main.jsx";

import TransactionForm from "./components/TransactionForm.jsx";

import { createGlobalStyle } from "styled-components";

import { device } from "./styles/breakpoints.js";

import { useState } from "react";

const GlobalStyle = createGlobalStyle`
:root {
    --bg-primary: #0a0e27;
    --bg-secondary: #151b3d;
    --bg-card: #1a2142;
    --accent-primary: #00ff88;
    --accent-secondary: #00d4ff;
    --accent-tertiary: #ff3366;
    --accent-quaternary: #ffffffff;
    --text-primary: #ffffff;
    --text-secondary: #a0aec0;
    --text-muted: #718096;
    --border: rgba(255, 255, 255, 0.1);
    --shadow: rgba(0, 255, 136, 0.1);
  }    

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;    
    user-select: none;
  }

  ul{
  list-style-type: none;
  }

  body {
    min-height:100vh;
    display:flex;
    justify-content:center;   
    font-family: 'Sora', sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);  
  }

   div#root {
    width:100%;   
    min-height: 100vh;  
    display:flex;
    flex-direction:column;    
    align-items:center;    
  }

  button{
  all:unset;
  }

span{
svg{width:50%;
height:50%;}
}

@media ${device.desktopL} {
  html{
  font-size:16px}
}

@media ${device.desktop} {
  html{
  font-size:14px}
}

@media ${device.tablet} {
  html{
  font-size:12px}
}

@media ${device.mobile} {
  html{
  font-size:10px}
}`;

export default function App() {
  const [activeContent, setActiveContent] = useState("dashboard");

  const [formActive, setFormVisibility] = useState(false);

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      name: "Grocery Shopping",
      category: "groceries",
      amount: 150.0,
      type: "expense",
    },
    {
      id: 2,
      name: "Freelance Payment",
      category: "salary",
      amount: 2500.0,
      type: "income",
    },
    {
      id: 3,
      name: "Netflix Subscription",
      category: "entertainment",
      amount: 350.0,
      type: "expense",
    },
  ]);

  function handleAddTransaction(newTransaction) {
    setTransactions([...transactions, { ...newTransaction }]);
  }

  return (
    <>
      <GlobalStyle />
      <Header
        activeContent={activeContent}
        setActiveContent={setActiveContent}
      />
      <Main
        activeContent={activeContent}
        setFormVisibility={setFormVisibility}
        transactions={transactions}
      />
      {formActive && (
        <TransactionForm
          setFormVisibility={setFormVisibility}
          onSubmit={handleAddTransaction}
          transactions={transactions}
        />
      )}
    </>
  );
}
