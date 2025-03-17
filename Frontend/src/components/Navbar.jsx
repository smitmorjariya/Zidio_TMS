import React from 'react'
import { CgProfile } from 'react-icons/cg';
import { CiSettings } from 'react-icons/ci';
import { FaBars, FaBell, FaPlus, FaSearch, FaUserCircle } from 'react-icons/fa'
import { FiPlus } from 'react-icons/fi';
import { IoLogOutOutline } from 'react-icons/io5';

import { PiLineVertical } from 'react-icons/pi';

const Navbar = ({ sidebarToggle, setSidebarToggle = () => { } }) => {
    return (
        <nav className='bg-white  px-4 py-3 flex justify-between'>
            <div className='flex items-center text-xl'>
                <FaBars className='text-gray-600 me-4 cursor-pointer'
                    onClick={() => setSidebarToggle(!sidebarToggle)} />
                <div className='relative md:w-64'>
                    <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2 '>

                        <FaSearch className='text-gray-600' />
                        <button className='p-1 focus:outline-none text-white md:text-black'>
                        </button>
                    </span>
                    <input type="text" className='w-full px-4 py-1 pl-12 rounded shadow -outline-offset-2 hidden md:block' />
                </div>

            </div>



            <div className='flex items-center gap-x-2 '>


                <div className='text-gray-600'>
                    <FaBell className="w-6 h-6" />
                </div>

                <div className='text-gray-600'>
                    <FiPlus className='w-4 h-7 '></FiPlus>
                </div>
                <div className='text-gray-600'>
                    <PiLineVertical className='w-5 h-8 '></PiLineVertical>
                </div>
                User
                <div className='relative  '>
                    <button className='text-gray-600 group'>
                        <FaUserCircle className='w-7 h-7 mt-1 inline-block' />

                        <div className='z-10 hidden absolute  bg-white rounded-lg shadow w-32 group-focus:block top-full right-0 '>
                            <ul className='py-2 text-sm text-gray-950 '>
                                <li className='text-left text-xl hover:bg-gray-300 '><a href=""  >Profile <CgProfile className='inline' /></a></li>
                                <li className='text-left text-xl hover:bg-gray-300 '><a href="" >Setting <CiSettings className='inline' /></a></li>
                                <li className='text-left text-red-600 text-xl hover:bg-gray-300 '><a href="" >Log Out <IoLogOutOutline className='inline' /></a></li>
                            </ul>
                        </div>
                    </button>
                </div>



            </div>
        </nav>



    )
}

export default Navbar;