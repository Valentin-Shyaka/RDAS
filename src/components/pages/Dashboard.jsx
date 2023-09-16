import React from 'react'
import NavHeader from '../NavHeader'
import Sidebar from '../Sidebar'

const Dashboard = () => {
  return (
    <div className='p-8'>
        <NavHeader/>
        <div className='flex items-center w-full h-[80vh]'>
            <Sidebar/>
            <div></div>

        </div>

    </div>
  )
}

export default Dashboard