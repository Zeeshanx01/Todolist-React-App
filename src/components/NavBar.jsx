import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex bg-slate-600 justify-evenly items-center text-slate-200 h-16 '>
        <div className="logo">
            <span className='font-bold text-2xl font-serif'>Z-Task</span>
        </div>
        <ul className='flex gap-16 max-sm:gap-4'>
            <li className='cursor-pointer text-xl max-sm:text-base transition-all duration-400 hover:text-slate-400  hover:border-b-8 hover:border-b-slate-400'>Home</li>
            <li className='cursor-pointer text-xl max-sm:text-base transition-all duration-400 hover:text-slate-400  hover:border-b-8 hover:border-b-slate-400'>Tasks</li>
        </ul>
    </nav>

  )
}

export default NavBar
