import React from 'react'
import tasky from '../../assets/images/taskly.png'
import Button from '../Button/Button'
const Navbar = () => {
  return (
    <div className='nav-container'>
        <nav className='navbar bg-[#A1E78F] flex justify-between items-center w-[85vw] mx-auto py-1 px-5 rounded-full'>
            <div className="logo text-[#2A303C] text-[2rem] font-bold">
                taskly
            </div>
            <ul className='nav-list flex gap-14 font-medium'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Features</li>
            </ul>
            <Button text = "Sign in"/>
        </nav>
    </div>
  )
}

export default Navbar