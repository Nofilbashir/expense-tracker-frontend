import React, { useState } from 'react'
import '../ExpenseForm/expenseform.css'
import { toast } from 'react-toastify';
import axios from 'axios'

const ExpenseForm = () => {

  const [expenseData, setExpenseData] = useState({expenseType: '', amount: '', paymantMethod: '',})

  const submitData = async () => {
    const url = 'http://localhost:5000/api/expense'
    if(expenseData.amount !=='' || expenseData.expenseType !=='' || expenseData.paymantMethod!==''){
     const response = await axios.post(url, expenseData)
     console.log(response)

    }else{
      toast.info('Please add all fields')
    }
  }

  console.log(expenseData)
  return (
    <div className='rightContainer'>
      <div className='mainform'>

        
        <label htmlFor='expenseType'> Enter Expense Type</label>
          <select value={expenseData.expenseType} name='expenseType' className='type' onChange={(e)=>{setExpenseData({...expenseData,[e.target.name]:e.target.value})}}>
            <option value="grocery">Grocery</option>
            <option value="petrol">Petrol</option>
            <option value="entertainment">Entertainment</option>
            <option value="resturant">Resturant</option>
            <option value="schoolFee">School Fee</option>
            <option value="rent">Rent</option>
            <option value="gymFee">Gym Fee</option>
            <option value="electricityBill">Electricity Bill</option>
            <option value="internetBill">Internet Bill</option>
            <option value="gasBill">Gas Bill</option>
            <option value="other">Other</option>
          </select>


          <label htmlFor='amount'> Enter Amount</label>
        <input type="number" placeholder='Amount' className='amount' value={expenseData.amount} name='amount' onChange={(e)=>{setExpenseData({...expenseData,[e.target.name]:e.target.value})}}/>

        

        <label htmlFor='paymantMethod'> Enter Payment Method</label>

          <select value={expenseData.paymantMethod} name='paymantMethod' className='type' onChange={(e)=>{setExpenseData({...expenseData,[e.target.name]:e.target.value})}}>
            <option value="cash">Cash</option>
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="other">Other</option>
          </select>

        
        <button type="submit" onClick={submitData}>Submit</button>


      </div>
    </div>
  )
}

export default ExpenseForm