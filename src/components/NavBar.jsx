import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex bg-cyan-800 justify-evenly items-center  h-16 drop-shadow-xl '>
        <div className="logo text-cyan-200">
            <span className='font-bold text-2xl font-serif'>ZenTasks</span>
        </div>
        <ul className='flex gap-16 max-sm:gap-4 opacity-70'>
            <li className='cursor-pointer text-xl max-sm:text-base font-semibold transition-all duration-500 text-cyan-50 hover:text-cyan-300  hover:tracking-wide'>Home</li>
            <li className='cursor-pointer text-xl max-sm:text-base font-semibold transition-all duration-500 text-cyan-50 hover:text-cyan-300  hover:tracking-wide'>Tasks</li>
        </ul>
    </nav>

  )
}

export default NavBar
