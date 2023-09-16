import React from 'react'
import NavHeader from '../NavHeader'
import Sidebar from '../Sidebar'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Dashboard = () => {
  return (
    <div className='p-8'>
        <NavHeader/>
        <div className='flex items-center w-full h-[80vh] gap-20'>
            <Sidebar/>
            <div className='flex w-full gap-8'>
                <div className='w-[20vw] h-[50vh] bg-[#1E1E1E] rounded-2xl relative'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="331" height="448" viewBox="0 0 358 448" fill="none">
                        <path d="M123.973 385.444L47 448H28L109 382.847L19.1397 342.806L0 362.87V342.806L11 333.776L0 330.766V319.731L19.1397 326.919V303.856L0 295.653V285.12L14.3548 288.13L79.1689 263.048L0 240.476V229.44L85.2588 194.829L0 167.742V157.709L101.354 189.813L165.733 164.23L0 113.567V93.5033L73.079 66.4155L0 43.3412V30.8014L92.6537 59.3928L217.497 5.72067C224.022 4.2149 237.942 -3.8101 260.561 2.20939L338.425 26.2869L358 19.7659V30.8014L205.317 93.5033C210.102 96.3457 224.37 103.134 243.162 107.548L358 63.4064V74.4419L327 88.9881L358 93.5033V105.04C346.255 104.204 316.332 100.024 304.5 100.024C270.86 113.902 198.46 137.248 191.5 141.261L180 197.337C231.329 197.839 342.688 199.645 358 202.855V213.389C313.196 214.058 213.06 213.79 180 207.37C174.49 224.926 166.429 262.848 169.213 274.085H358V285.12C304.061 284.618 185.616 281.508 171 285.12C150 298.667 121 317.694 134.5 336.144L202.272 371.899C208.072 371.063 222.804 369.391 235.332 369.391C259.401 370.896 317.633 378.019 358 394.472V405.508C321.896 392.633 243.684 370.596 219.672 385.444C230.692 390.125 256.124 400.693 269.696 405.508C286.661 408.852 328.072 415.541 358 415.541V425.573C329.29 425.573 264.563 421.56 235.332 405.508L196.182 385.444H123.973Z" fill="#2B2B2B"/>
                    </svg>
                    <div className='absolute w-[90%] h-[10vh] rounded-lg bg-[#292929] top-5 left-4 flex p-2 gap-4 items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="38" viewBox="0 0 49 45" fill="none" className=''>
                            <path d="M7.62353 45H0V13.125H29.5412V0L48.6 15.9375L29.5412 32.8125V21.5625H7.62353V45Z" fill="#CFF80B"/>
                        </svg>
                        <div>
                            <p className='text-xl font-bold'>600m</p>
                            <span className='text-sm text-gray-500'>In 600m take turning right</span>

                        </div>

                    </div>
                    <div className='absolute w-full h-[10vh] rounded-lg bg-[#292929] bottom-0 rounded-tl-none rounded-tr-none flex p-2 items-center'>
                        <div>
                            <p className='text-sm font-bold'>club Town Gardens</p>
                            <span className='text-sm text-slate-400'>MM feeder road, Kalkoto</span>
                            <div className='flex items-center w-full gap-2'>
                                <p className='flex-1 text-sm text-slate-400 items-center  text-center gap-1'>2km</p>
                                <div className='h-1 w-[150px] bg-slate-400'>
                                    <div className=' h-full w-[100px] bg-[#CFF80B]'>
                                    </div>
                                </div>
                                <p className='flex-1 text-sm text-slate-400'>3min</p>

                            </div>
                        </div>
                        <div className='rounded-full bg-[#1E1E1E] w-14 h-14 text-center text-5xl flex-col ml-6 text-[#A1A1A1]'>
                            <SearchRoundedIcon  className='text-sm'/>
                        </div>

                    </div>

                </div>
                <div className='flex flex-col gap-12'>
                <div className=' w-[15vw] h-[22vh] bg-[#1E1E1E] rounded-2xl p-2'>
                    <h3 className='font-bold'>Climate</h3>
                    <span className='text-sm text-slate-400'>INTERIOR: 24 C</span>
                    <p className='mt-4 text-3xl font-bold'>23 C</p>
                    <span className='text-md mt-2'>WINDOW CLOSED</span>

                </div>
                <div className=' w-[15vw] h-[22vh] bg-[#1E1E1E] rounded-2xl p-2'>

                </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Dashboard