import React from 'react'
import Navbar from '../components/Navbar';
import homeStyles from './home.module.css';

const Home = () => {
  return (
    <div className={homeStyles.home}>
        Home
        <Navbar/>
    </div>
  )
}

export default Home