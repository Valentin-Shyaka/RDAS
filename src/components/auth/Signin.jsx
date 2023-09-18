import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';


const Signin = () => {
  return (
    <div className='text-center text-3xl justify-center p-4 flex items-center h-full w-screen gap-10'>
      <div className='bubble w-[200px] h-[200px] absolute left-[42%] top-[2%] md:hidden'></div>
      <div className='bubble w-[150px] h-[150px] absolute left-[82%] top-[75%] md:hidden '></div>
      <div className=' flex flex-col md:hidden'>
        <p className=' text-4xl'>Welcome Back.!</p>
        <div className='flex items-center gap-4'>
        <button className=' border border-white border-4 w-80 mt-4 h-16 text-sm'>skip the lag ?</button>
        <div className='w-full border border-4 border-slate-500 border-dashed h-1 '></div>
        </div>
      </div>
      <div className='ml-20 w-35% h-fit auth-glass text-left p-8 z-10'>
        <div>
        <h3 className='mt-2'>Signin</h3>
        <p className='text-sm mt-4'>Glad you're back.!</p>
        
        <input type='text' placeholder='username' className='mt-4 bg-inherit border border-white rounded-md text-sm h-10 w-full p-2 outline-none'></input>
        
        <input type='text' placeholder='Password' className='mt-4 bg-inherit border border-white rounded-md text-sm h-10 w-full p-2 outline-none'></input>
        <div className='flex items-center mt-4 gap-2'>
        <input type="checkbox" name="remember" id="" /><p className='text-sm'>Remember me</p>
        </div>

          <button className='w-full text-sm h-12 mt-8 auth-button '>Signin</button>
          <p className='text-sm text-center mt-6'>Forgot password? </p>
        </div>
        <div className='flex items-center w-full h-4 text-center mt-4 gap-2'>
          <hr className='flex-1 '/> <p className='text-sm'>or</p> <hr className='flex-1' />
        </div>
        <div className=' text-center mt-4 gap-4 w-full'>
          
              <GoogleIcon className='m-2 text-xl text-red-500'/>
              <FacebookOutlinedIcon className='m-2 text-xl text-blue-500'/>
              <GitHubIcon className='m-2 text-xl text-white'/>

        </div>
        <div className='text-sm text-center mt-6'>
          <p>Dont't have an account? signup</p>
          <div className='flex  mt-6 justify-between'>
            <p>Terms&conditions</p>
            <p>support</p>
            <p>customer care</p>

          </div>
        </div>
      </div>  
    </div>
  )
}

export default Signin