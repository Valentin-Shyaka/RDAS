import React from 'react'
import NavHeader from '../NavHeader'
import Sidebar from '../Sidebar'
import CarDetails from '../CarDetails'
const DetailsPage = () => {
  return (
    <div className='p-8'>
        <NavHeader title={'Car Details'} />
        <div className='flex items-center w-full h-[80vh] gap-20 justify-center'>
            <Sidebar/>
            <div className='w-full h-[100%] flex justify-around'>
                <CarDetails/>
            </div>
        </div>
    </div>
  )
}

export default DetailsPage