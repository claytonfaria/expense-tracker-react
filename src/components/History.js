import React, { useContext } from 'react';
import { ExpenseContext } from '../ExpenseContext';

function History() {
  const { transactions, removeTransaction } = useContext(ExpenseContext);

  return (
    <>
      <h3>History</h3>
      <ul id='list' className='list'>
        {transactions.map((item, index) => (
          <li key={index} className={item.amount < 0 ? 'minus' : 'plus'}>
            {item.description} <span> {item.amount}</span>
            <button
              className='delete-btn'
              onClick={() => removeTransaction(item.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default History;
