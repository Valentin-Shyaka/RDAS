import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

const Sidebar = () => {
  return (
    <div className=' '>
        <div className='rounded-full bg-[#505050] w-14 h-14 text-center text-5xl flex-col mt-6 cursor-pointer'>
            <HomeRoundedIcon/>
        </div>
        <div className='rounded-full bg-[#1E1E1E] w-14 h-14 text-center text-5xl flex-col mt-6 text-[#A1A1A1] cursor-pointer'>
            <CameraAltRoundedIcon/>
        </div>
        <div className='rounded-full bg-[#1E1E1E] w-14 h-14 text-center text-5xl flex-col mt-6 text-[#A1A1A1] cursor-pointer'>
            <LocalPhoneRoundedIcon/>
        </div>
        <div className='rounded-full bg-[#1E1E1E] w-14 h-14 text-center text-5xl flex-col mt-6 text-[#A1A1A1] cursor-pointer'>
            <PlayCircleRoundedIcon/>
        </div>
        <div className='rounded-full bg-[#1E1E1E] w-14 h-14 text-center text-5xl flex-col mt-6 text-[#A1A1A1] cursor-pointer'>
            <SettingsRoundedIcon/>
        </div>

    </div>
  )
}

export default Sidebar