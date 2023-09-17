import React from 'react'
import NavHeader from '../NavHeader'
import Sidebar from '../Sidebar'

const Screen = () => {
  return (
    <div className='p-8'>
        <NavHeader />
        <div className='flex items-center w-full h-[80vh] gap-20'>
            <Sidebar/>
            <div className='w-full'>
                <iframe width="420" height="315"src="https://www.youtube.com/embed/M6Izjs3U8D8?autoplay=1&mute=1" title='camera_video' className='w-full h-[60vh] rounded-xl'>
                </iframe>
                <div className='h-20 w-full bg-[#1E1E1E] mt-6 rounded-xl'>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Screen