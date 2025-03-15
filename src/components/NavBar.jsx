import React from 'react'

const NavBar = () => {

  const handleRedirect = () => {
    // window.location.href = "https://github.com/Zeeshanx01";
    window.open("https://github.com/Zeeshanx01", "_blank", "noopener,noreferrer");
  };


  return (
    <nav className='flex bg-cyan-800 justify-evenly items-center  h-16 drop-shadow-2xl  stickytop-0 z-20 '>

      <div className="logo text-cyan-200">
        <span className='font-bold text-2xl font-serif'>ZenTasks</span>
      </div>

      <ul className='flex gap-16 max-sm:gap-4 opacity-70 items-center'>

        <li className='cursor-pointer text-xl max-sm:text-base font-semibold transition-all duration-500 text-cyan-50 hover:text-cyan-300  hover:tracking-wide'>Home</li>

        {/* <li className='cursor-pointer text-xl max-sm:text-base font-semibold transition-all duration-500 text-cyan-50 hover:text-cyan-300  hover:tracking-wide'>Tasks</li> */}


        <button onClick={handleRedirect} className='bg-slate-800 bg-blackl rounded-full flex justify-center items-center hover:bg-slate-700'>
          <span><img className='w-10' src="icons/icons-github-cat.png" alt="" /></span>
          <span><img className='invert w-10 mr-1' src="icons/github-logo.png" alt="" /></span>
        </button>

      </ul>

    </nav>

  )
}

export default NavBar
