import React from 'react';
import { ExpenseProvider } from './ExpenseContext';
import './App.css';
import Balance from './components/Balance';
import Form from './components/Form';
import History from './components/History';

function App() {
  return (
    <div className='App'>
      <h2>Expense Tracker</h2>
      <ExpenseProvider>
        <div className='container'>
          <Balance />

          <History />

          <Form />
        </div>
      </ExpenseProvider>
    </div>
  );
}

export default App;
