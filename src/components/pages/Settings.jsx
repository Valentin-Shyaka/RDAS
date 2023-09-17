import React from 'react'
import NavHeader from '../NavHeader'
import Sidebar from '../Sidebar'
import { useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeRounded';

const Settings = () => {
    const [active,setActive]= useState(false)
    const [text,setText]=useState("My details")
    const navs=[
        {
            content:'My details'
        },
        {
            content:'Profile'
        },
        {
            content:'Password'
        },
        {
            content:'Email'
        },
        {
            content:'Notification'
        },
    ]
    const Link=({name,text})=>{
        return(
        <p className={(active&& (text=name)) ?"bg-[#A162F71A] p-2":'p-2'} 
                    onClick={()=>
                        {
                            setActive(!active) 
                            setText(text)}}
        >{name}</p>
        )
    }
    const Field=({Icon,placeholder})=>{
        return(
            <div className='mt-4 w-full'>
            <p className='text-slate-300 '>Live in</p>
            <div className='w-full flex border border-slate-400 rounded-lg h-12 items-center gap-4 text-slate-400 p-2 mt-2'>
                <Icon/>
                <input type="text" name="" id="" placeholder={placeholder} className='w-full h-full bg-inherit outline-none' />
            </div>
            </div>
        )
    }
  return (
    <div className='p-8'>
        <NavHeader title={'Settings'} />
        <div className='flex items-center w-full h-[80vh] gap-20'>
            <Sidebar/>
            <div className='w-full'>
                <div className='flex w-full gap-10 text-slate-300 font-bold cursor-pointer h-10'>
                    {navs.map(nav =>(
                        <Link name={nav.content} text={nav.content}/>
                    ))}
                    
                </div>
                <div className='w-[90%] border border-1 border-slate-400 rounded-3xl h-[70vh] p-16 mt-6'>
                    <h3 className='font-bold'>Profile</h3>
                    <p className='text-sm text-slate-400 mt-2'>Update your photo and personnal details here</p>
                    <hr className='mt-4 bg-slate-400 '/>

                    <div className='flex w-full gap-40'>
                        <Field Icon={HomeOutlinedIcon} placeholder={'Zurich, Switzerland'}/>
                        <Field Icon={HomeOutlinedIcon} placeholder={'Zurich, Switzerland'}/>
                    </div>
                    <div>
                        
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Settings