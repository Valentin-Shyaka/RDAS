import React from 'react'
import NavHeader from '../NavHeader'
import Sidebar from '../Sidebar'
import { useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeRounded';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import MaleOutlinedIcon from '@mui/icons-material/MaleOutlined';

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
        <p className={(active&& (text=name)) ?"bg-[#A162F71A] ":''} 
                    onClick={()=>
                        {
                            setActive(!active) 
                            setText(text)}}
        >{name}</p>
        )
    }
    const Field=({Icon,placeholder,label})=>{
        return(
            <div className='mt-2 w-full'>
            <p className='text-slate-300 '>{label}</p>
            <div className='w-full flex border border-slate-400 rounded-lg h-12 items-center gap-4 text-slate-400 p-2 mt-2'>
                <Icon/>
                <input type="text" name="" id="" placeholder={placeholder} className='w-full h-full bg-inherit outline-none' />
            </div>
            </div>
        )
    }
  return (
    <div className='p-4'>
        <NavHeader title={'Settings'} />
        <div className='flex items-center w-full h-[60%] gap-20 mt-6'>
            <Sidebar/>
            <div className='w-full'>
                <div className='flex w-full gap-10 text-slate-300 font-bold cursor-pointer h-4'>
                    {navs.map(nav =>(
                        <Link name={nav.content} text={nav.content}/>
                    ))}
                    
                </div>
                <div className='w-[80%] border border-1 border-slate-400 rounded-3xl h-fit p-4 mt-4'>
                    <h3 className='font-bold'>Profile</h3>
                    <p className='text-sm text-slate-400 mt-2'>Update your photo and personnal details here</p>
                    <hr className='mt-2 bg-slate-400 '/>

                    <div className='flex w-full gap-40'>
                        <Field label={"Live in"} Icon={HomeOutlinedIcon} placeholder={'Zurich, Switzerland'}/>
                        <Field label={"Street address"} Icon={HomeOutlinedIcon} placeholder={'2445 Crosswind Drive'}/>
                    </div>
                    <Field label={'Email Address'} Icon={MailOutlineOutlinedIcon} placeholder={'yourEmail@gmail.com'}/>
                    <div className='flex w-full gap-40'>
                        <Field label={"Date of Birth"} Icon={CakeOutlinedIcon} placeholder={'25.8.2006'}/>
                        <Field label={"Gender"} Icon={MaleOutlinedIcon} placeholder={'Male'}/>
                    </div>
                    <hr className='mt-2 bg-slate-400 '/>
                    <div className='flex mt-2 justify-between  h-16 items-center'>
                        <div>
                            <h3 className='font-bold'>Your Profile</h3>
                            <p className='text-sm text-slate-400'>This will be displayed on your profile.</p>
                        </div>
                        <img src="./user_profile.png" alt="" srcset="" className='rounded-full w-16 h-16' />
                        <div className='flex gap-10 font-bold text-slate-400'>
                            <p>Delete</p>
                            <p className='text-[#A162F7]'>Update</p>
                        </div>

                    </div>
                    <hr className='mt-4 bg-slate-400 '/>
                    <div className='flex justify-between mt-4'>
                        <h3 className='font-bold'>Social Profiles</h3>
                        <div className=''>
                        <input type="text" name="" id="" placeholder={'facebook.com/'} className='border border-slate-400 rounded-lg h-10 items-center  text-slate-400 p-2 mt-2 w-full  bg-inherit outline-none' />
                        <input type="text" name="" id="" placeholder={'twitter.com/'} className='border border-slate-400 rounded-lg h-10 items-center  text-slate-400 p-2 mt-2 w-full  bg-inherit outline-none' />
                            
                        </div>

                    </div>
                    

                </div>
            </div>
        </div>
    </div>
  )
}

export default Settings