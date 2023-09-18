import React from 'react'

const ForgotPassword = () => {
  return (
    <div className='text-center text-3xl justify-center p-4 flex items-center h-full w-screen gap-10'>
      <div className='bubble w-[200px] h-[200px] absolute left-[42%] top-[8%] md:hidden lg:block'></div>
      <div className='bubble w-[150px] h-[150px] absolute left-[82%] top-[65%] md:hidden lg:block'></div>
      <div className=' flex flex-col md:hidden lg:block'>
        <p className=' text-4xl'>No worries.!!</p>
        <div className='flex items-center gap-4'>
        <button className=' border border-white border-4 w-80 mt-4 h-16 text-sm'>Take me back.!</button>
        <div className='w-full border border-4 border-slate-500 border-dashed h-1 '></div>
        </div>
      </div>
      <div className='ml-20 w-[35%] h-fit auth-glass text-left p-8 z-10'>
        <div>
        <h3 className='mt-2'>Forgot your Password</h3>
        <p className='text-sm mt-4'>Please enter your email.!</p>
        
        <input type='text' placeholder='example@gmail.com' className='mt-4 bg-inherit border border-white rounded-md text-sm h-10 w-full p-2 outline-none'></input>
        
        
        

          <button className='w-full text-sm  h-12 mt-8 auth-button '>Reset pasword</button>
          
        </div>
       
        <div className='text-sm text-center mt-6'>
          <p>Dont't have an account? signup</p>
          <div className='flex  mt-6 justify-between md:text-[0.8rem]'>
            <p>Terms&conditions</p>
            <p>support</p>
            <p>customer care</p>

          </div>
        </div>
      </div>  
    </div>
  )
}

export default ForgotPassword