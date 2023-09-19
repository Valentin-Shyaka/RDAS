import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Badge } from '@mui/material';

const NavHeader = ({title}) => {
  return (
    <div className='flex w-full h-20 items-center justify-between mb-2 '>
        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.8023C0 23 11.7918 46 22.9802 46H22.9805C34.1692 46 46 24.0172 46 14.9726C46 9.25409 40.4662 0 22.9142 0C5.3625 0 0 10.2227 0 15.8023ZM14.8826 17.413C10.6914 13.0641 8.09014 8.65573 8.09014 8.65573C8.09014 8.65573 12.376 6.60451 15.1759 6.05675C15.4144 6.01015 15.6577 5.96012 15.907 5.90924C18.5829 5.36148 21.9116 4.68051 26.7117 6.33692C36.6988 9.78355 40.9569 16.2302 40.9569 16.2302C40.9569 16.2302 34.53 11.2556 27.4528 10.2567C23.3761 9.6812 15.793 12.0155 15.793 12.0155C15.793 12.0155 18.4288 14.697 20.5741 18.6234C20.9123 19.2423 21.2418 19.809 21.5574 20.3516C23.2431 23.2496 24.5238 25.4512 24.5238 31.1952C24.5238 35.386 21.2284 41.6137 21.2284 41.6137C21.2284 41.6137 23.0793 33.4994 21.5865 27.0836C20.5078 22.4457 19.6756 21.7321 17.7141 20.05C16.9622 19.4053 16.0441 18.6182 14.8826 17.413Z" fill="white"/>
        </svg>
        <h3 className='text-2xl font-bold ml-10'>{title}</h3>

        <div className='flex text-sm ml-20 w-[25vw] bg-[#1E1E1E] h-12 items-center rounded-3xl p-2 gap-2'>
         <SearchIcon className='text-[#A1A1A1]'/>
         <input type="text" name="" id="" placeholder='search' className='w-full bg-inherit outline-none' />

        </div>

        <div className='flex float-right ml-[10vw] gap-6 items-center md:hidden lg:block'>
            <img src="./car_profile.svg" alt="" />
            <div className='flex-col text-center'>
                <p className=' text-xl'>25 C</p>
                <span className='text-sm text-slate-500'>rainy</span>
            </div>
            <Badge color="secondary" badgeContent=" " variant='dot'>
                <NotificationsIcon className='text-2xl ml-3'/>
            </Badge>

            <img src="./user_profile.png" alt="" className='rounded-full w-[4vw] h-[7vh] ml-16' />
            
        </div>
        



    </div>
  )
}

export default NavHeader