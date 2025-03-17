import React from 'react'
import { BiTrash } from 'react-icons/bi'
import { FaHome } from 'react-icons/fa'
import { GiAbstract007 } from 'react-icons/gi'
import { IoIosPeople } from 'react-icons/io'
import { LuListTodo } from 'react-icons/lu'
import { MdAddTask, MdDashboard, MdOutlineTaskAlt } from 'react-icons/md'
import { RiProgress1Line } from 'react-icons/ri'




const Sidebar = ({ sidebarToggle }) => {
    return (
        <div className={`${ sidebarToggle ? " hidden " : " block "} w-60 bg-white fixed h-full px-4 py-2`}>
            <div className='my-2 mb-4'>
                <h1 className='text-2xl text-gray-850 font-bold mt-5 text-center'>
                    <GiAbstract007 className='inline-block mr-2 h-8 w-8 -mt-2 ' />
                    Zidio Task Manager System </h1>
            </div>


         <ul className='mt-5 text-gray-600  '>
                <li className='mb-2 rounded hover:shadow hover:bg-gray-100 py-2 hover:text-gray-900  ' >
                    <a href="" className='px-3 ' >
                        <MdDashboard className='inline-block w-7 h-7 mr-2 -mt-2'></MdDashboard>
                        Dashboard
                    </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-gray-100 py-2 hover:text-gray-900'>
                    <a href="" className='px-3 '>
                        <MdAddTask className='inline-block w-7 h-7 mr-2 -mt-2'></MdAddTask>
                        Task
                    </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-gray-100 py-2 hover:text-gray-900'>
                    <a href="" className='px-3 '>
                        <MdOutlineTaskAlt className='inline-block w-7 h-7 mr-2 -mt-2'></MdOutlineTaskAlt>
                        Completed Task
                    </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-gray-100 py-2 hover:text-gray-900'>
                    <a href="" className='px-3 '>
                        <IoIosPeople className='inline-block w-7 h-7 mr-2 -mt-2'></IoIosPeople>
                        Teams
                    </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-gray-100 py-2 hover:text-gray-900'>
                    <a href="" className='px-3 '>
                        <RiProgress1Line className='inline-block w-7 h-7 mr-2 -mt-2'></RiProgress1Line>
                        In Progress
                    </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-gray-100 py-2 hover:text-gray-900'>
                    <a href="" className='px-3 '>
                        <LuListTodo className='inline-block w-7 h-7 mr-2 -mt-2'></LuListTodo>
                        To Do
                    </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-gray-100 py-2 hover:text-gray-900'>
                    <a href="" className='px-3 '>
                        <BiTrash className='inline-block w-7 h-7 mr-2 -mt-2'></BiTrash>
                        Trash
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;