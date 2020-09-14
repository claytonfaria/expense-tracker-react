import React, { useContext } from 'react';
import { ExpenseContext } from '../ExpenseContext';

function Balance() {
  const { transactions } = useContext(ExpenseContext);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id='balance'>
        ${' '}
        {transactions
          .map((item) => item.amount)
          .reduce((acc, item) => (acc += item), 0)
          .toFixed(2)}
      </h1>

      <div className='inc-exp-container'>
        <div>
          <h4>Income</h4>
          <p id='money-plus' className='money plus'>
            $
            {transactions
              .map((item) => item.amount)
              .filter((item) => item > 0)
              .reduce((acc, item) => (acc += item), 0)
              .toFixed(2)}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id='money-minus' className='money minus'>
            -$
            {Math.abs(
              transactions
                .map((item) => item.amount)
                .filter((item) => item < 0)
                .reduce((acc, item) => (acc += item), 0)
            ).toFixed(2)}
          </p>
        </div>
      </div>
    </>
  );
}

export default Balance;
