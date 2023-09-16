import React from 'react'

const ForgotPassword = () => {
  return (
    <div className='text-center text-3xl justify-center p-4 flex items-center h-full w-screen gap-10'>
      <div className='bubble w-[300px] h-[300px] absolute left-[50vw] top-[2vh]'></div>
      <div className='bubble w-[200px] h-[200px] absolute left-[80vw] top-[75vh]'></div>
      <div className=' flex flex-col'>
        <p className=' text-6xl'>No worries.!!</p>
        <div className='flex items-center gap-4'>
        <button className=' border border-white border-[4px] w-[200px] mt-4 h-16 text-sm'>Take me back.!</button>
        <div className='w-full border border-4 border-slate-500 border-dashed h-[1px] '></div>
        </div>
      </div>
      <div className='ml-20 w-[500px] h-[80vh] auth-glass text-left p-12 z-10'>
        <div>
        <h3 className='mt-20'>Forgot your Password</h3>
        <p className='text-sm mt-4'>Please enter your email.!</p>
        
        <input type='text' placeholder='example@gmail.com' className='mt-4 bg-inherit border border-white rounded-md text-sm h-10 w-full p-2 outline-none'></input>
        
        
        

          <button className='w-full text-sm w-full h-12 mt-8 auth-button '>Reset pasword</button>
          
        </div>
       
        <div className='text-sm text-center mt-20'>
          <p>Dont't have an account? signup</p>
          <div className='flex gap-6 mt-6'>
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