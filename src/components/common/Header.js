import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiMenuAlt1 } from 'react-icons/hi';
import { BiX } from 'react-icons/bi';

const Header = () => {

  let Links = [
    { name: "Home", link: "/" },
    { name: "Blogs", link: "/blogs" },
    { name: "Services", link: "/service" },
    { name: "Contact", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='top-navbar shadow-md w-full mx-auto sticky bg-[#ff7400] top-0 left-0'>
        <div className='sub-nav md:flex items-center justify-between mx-auto w-[80%] py-4'>
          <div className='cursor-pointer flex items-center'>
            <span className='text-xl font-sans font-medium text-blue-700'><NavLink to="/">TailWind</NavLink></span>
          </div>

          <div onClick={() => setOpen(!open)} className='text-2xl absolute right-8 top-4 cursor-pointer md:hidden'>
            <div >{open ? <BiX/> : <HiMenuAlt1/>} </div>
          </div>

          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
            {
              Links?.map((link) => (
                <li key={link.name} className='md:mr-8 text-md font-medium md:my-0 my-7'>
                  <NavLink onClick={() => setOpen(false)} to={link.link} className='text-[#fff] hover:text-gray-400 duration-500'>{link.name}</NavLink>
                </li>
              ))
            }
            <button>
              <NavLink to='/login'>
                Login
              </NavLink>
            </button>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header