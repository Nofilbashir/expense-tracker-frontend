import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Card/Card'
const Home = () => {
  return (
    <>
    <div className="Home rightContainer">
    <div className="HomePage">
      <div className="header">
        <p>Welcome</p>
      </div>
      <Card/>
      <div className="Row1">
        <div className="Row1_left">
          <h1>Row1 left</h1>
        </div>
        <div className="Row1_right">
        <h1>Row1 right</h1>
          
        </div>
        <div className="Row2">
          <div className="Row2Conatiner"><p>Row2 container 1</p></div>
          <div className="Row2Conatiner"><p>Row2 container 2</p></div>
          <div className="Row2Conatiner"><p>Row2 container 3</p></div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Home