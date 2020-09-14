import React, { useContext } from 'react';
import { ExpenseContext } from '../ExpenseContext';

function Form() {
  const { current, handleOnChange, addExpense, addIncome } = useContext(
    ExpenseContext
  );

  return (
    <>
      <h3>Add new transaction</h3>
      <form id='form'>
        <div className='form-control'>
          <label htmlFor='text'>description</label>
          <input
            type='text'
            id='text'
            value={current.description}
            name='description'
            placeholder='Enter text...'
            onChange={handleOnChange}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
          </label>
          <input
            type='number'
            id='amount'
            name='amount'
            value={current.amount}
            placeholder='Enter amount...'
            onChange={handleOnChange}
          />
        </div>
        <button type='submit' className='btn' onClick={addIncome}>
          Add Income
        </button>
        <button type='submit' className='btn btn-expense' onClick={addExpense}>
          Add Expense
        </button>
      </form>
    </>
  );
}

export default Form;
