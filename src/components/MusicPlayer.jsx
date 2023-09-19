import React from 'react'
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import PauseCircleOutlineRoundedIcon from '@mui/icons-material/PauseCircleOutlineRounded';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';

const MusicPlayer = () => {
  return (
    <div className='mt-4 bg-[#1E1E1E] w-full h-24 rounded-xl flex p-4 gap-4 text-center relative'>
      <img src="./user_profile.png" alt="" className=' rounded-lg w-20'  />
      <div className='h-full align-middle w-[50%] p-4 '>
        <p className='font-bold '>Close to you</p>
        <span className='mt-2 text-sm text-slate-400'>Elie Goulding</span>

      </div>
      <div className='h-full items-center w-full p-2'>
        <div className='flex gap-8 ml-4 '>
          <KeyboardDoubleArrowLeftRoundedIcon/>
          <SkipPreviousRoundedIcon/>
          <PauseCircleOutlineRoundedIcon/>
          <SkipNextRoundedIcon/>
          <KeyboardDoubleArrowRightRoundedIcon/>

        </div>
        <div className='flex text-sm gap-48 text-slate-400 mt-2'>
          <span>00:00</span>
          <span>02:20</span>
        </div>
        <div className='h-1 w-[17rem] bg-[#87888C] rounded-lg mt-2'>
          <div className='h-full w-[50%] bg-[#CFF80B] rounded-lg'>

          </div>
        </div>
      </div>
      <ShareRoundedIcon className='absolute top-2 right-4 text-slate-400'/>

    </div>
  )
}

export default MusicPlayer