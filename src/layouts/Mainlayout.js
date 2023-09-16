import React from 'react'
import Signup from '../components/auth/Signup'


const Mainlayout = () => {
  return (
    <div className='flex p-4 gap-24'>
     
      <div>
      <Signup/>
      </div>
    </div>
  )
}

export default Mainlayout