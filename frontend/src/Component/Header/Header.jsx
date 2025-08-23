import React from 'react'
import './Header.css'
import { assets } from '../../assets/assets'


const Header = () => {
  return (
    <>
      <div className="header">
        <div className='logo-box'>
            <h2> <span className='jay'>Jay </span>Shree Kisan<span className='dot'>.</span></h2>
            
        </div>
        <div className='search'>
          <input type="text" className='search-input' placeholder='Search'/>
          <button type='submit' className='search-button'>Search</button>
        </div>
        <div className='login'>

        </div>
      </div>
    </>
  )
}

export default Header
