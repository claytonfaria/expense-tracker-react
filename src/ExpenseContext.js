import React, { useState, createContext } from 'react';

export const ExpenseContext = createContext();

export function ExpenseProvider(props) {
  const [transactions, setTransactions] = useState([]);
  const [current, setCurrent] = useState({
    description: '',
    amount: '',
  });

  const generateId = () => {
    return Math.floor(Math.random() * 1000);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCurrent({
      ...current,
      [name]: value,
    });
  };

  const addIncome = (e) => {
    e.preventDefault();
    setTransactions((prevState) => [
      ...prevState,
      {
        id: generateId(),
        description: current.description,
        amount: parseFloat(current.amount),
      },
    ]);
    setCurrent({
      description: '',
      amount: '',
    });
  };

  const addExpense = (e) => {
    e.preventDefault();
    setTransactions((prevState) => [
      ...prevState,
      {
        id: generateId(),
        description: current.description,
        amount: parseFloat(current.amount) * -1,
      },
    ]);
    setCurrent({
      description: '',
      amount: '',
    });
  };

  const removeTransaction = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  return (
    <ExpenseContext.Provider
      value={{
        transactions,
        setTransactions,
        current,
        setCurrent,
        removeTransaction,
        addExpense,
        addIncome,
        handleOnChange,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
}
