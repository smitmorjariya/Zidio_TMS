import React from 'react'
import Navbar from './Navbar'

const Dashboard = (sidebarToggle, setSidebarToggle) => {
  return (
    <div className= {`${sidebarToggle ? "ml-60" : " "} w-full`}  >
        <Navbar 
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}/>
  

    <h1 className='font-black font-mono text-4xl text-left mt-2 ml-2 '>Dashboard
      
    </h1>


    </div>
  )
}

export default Dashboard