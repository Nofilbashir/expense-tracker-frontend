import React, { useState } from 'react'
import {CgLogOut} from 'react-icons/cg'
import {MdDashboard} from 'react-icons/md'
import {SlGraph} from 'react-icons/sl'
import {AiTwotoneSetting} from 'react-icons/ai'
import {SiPivotaltracker} from 'react-icons/si'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [actice, setActive] = useState('Dashboard')
  return (

    <div className="Navbar">
      <div className="upper">
      <div className="option">
        <SiPivotaltracker style={{fontSize:'2rem', color:'#8e47fc'}}/>
        <h4>Expense Tracker</h4>
        </div>


        <div className="options">


        <Link  to='/' onClick={()=>setActive('Dashboard')} className={actice==='Dashboard'?'active option': 'option'}>
          <MdDashboard/>
          <p>Dashboard</p>
        </Link>

        
        <Link to='/expenseForm'  onClick={()=>setActive('Expense')} className={actice==='Expense'?'active option': 'option'}>
          <MdDashboard/>
          <p >Enter Expense</p>
        </Link>
        
        <Link to='/Activity'  onClick={()=>setActive('Activity')} className={actice==='Activity'?'active option': 'option'}>
          <SlGraph/>
          <p >Activity</p>
        </Link>

        <Link to='/Settings' onClick={()=>setActive('Settings')} className={actice==='Settings'?'active option': 'option'}>
          <AiTwotoneSetting/>
          <p >Settings</p>
        </Link>
      </div>
      </div>



      <div className="logout_button option">
          <CgLogOut/>
          <p>Log Out</p>
      </div>
    </div>
  )
}

export default Navbar