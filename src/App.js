import React from 'react'
import Home from './Pages/Home/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Activity from './Pages/ActivityPage/Activity'
import ExpenseForm from './Pages/ExpenseForm/ExpenseForm'
import Setting from './Pages/Setting/Setting'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='APP'>
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Activity' element={<Activity/>} />
        <Route path='/expenseForm' element={<ExpenseForm/>} />
        <Route path='/Settings' element={<Setting/>} />
      </Routes>
    </Router>
    <ToastContainer />

    </div>
  )
}

export default App