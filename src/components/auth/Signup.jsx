import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';  
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


const Signup = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  
  const navigate=useNavigate()
  return (
    <div className='text-center text-3xl justify-center p-4 flex  items-center h-full w-full gap-10'>
      <div className='bubble w-[200px] h-[200px] absolute left-[42%] top-[2%] md:hidden lg:block'></div>
      <div className='bubble w-[150px] h-[150px] absolute left-[80%] top-[75%] md:hidden lg:block'></div>
      <div className=' flex flex-col md:hidden lg:block'>
        <p className=' text-4xl'>Roll the carpet.!</p>
        <div className='flex items-center gap-4'>
        <button className=' border border-white border-4 w-80 mt-4 h-16 text-sm rounded-md'>Skip the lag ?</button>
        <div className='w-full border border-4 border-slate-500 border-dashed h-1 '></div>
        </div>
      </div>
      <div className='ml-20 w-[35%] h-fit auth-glass text-left p-8 z-10'>
        <div>
        <h3 className='mt-2'>Signup</h3>
        <p className='text-sm mt-4'>Just some details to get you in!</p>
        
        <input type='text' placeholder='Username' className='mt-4 bg-inherit border border-white rounded-md text-sm h-12 w-full p-2 outline-none indent-4'></input>
        <input type='text' placeholder='Email/Phone' className='mt-4 bg-inherit border border-white rounded-md text-sm h-12 w-full p-2 outline-none indent-4'></input>
        <input type='text' placeholder='Password' className='mt-4 bg-inherit border border-white rounded-md text-sm h-12 w-full p-2 outline-none indent-4'></input>
        <input type='text' placeholder='Confirm password' className='mt-4 bg-inherit border border-white rounded-md text-sm h-12 w-full p-2 outline-none indent-4'></input>

          <button className='w-full text-sm h-12 mt-6 auth-button ' onClick={()=>{
         setTimeout(()=>{
          navigate('/');
         },3000) 
         handleClick()
         
         
          }}>Signup</button>
        <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="User signed up"
        action={action}
      />
      <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={open}
  onClick={handleClose}
>
  <CircularProgress color="inherit" />
</Backdrop>
        </div>
        <div className='flex items-center w-full h-4 text-center mt-4 gap-2'>
          <hr className='flex-1 '/> <p className='text-sm'>or</p> <hr className='flex-1' />
        </div>
        <div className=' text-center mt-4 gap-4 w-full cursor-pointer'>
          
              <GoogleIcon className='m-2 text-xl text-red-500'/>
              <FacebookOutlinedIcon className='m-2 text-xl text-blue-500'/>
              <GitHubIcon className='m-2 text-xl text-white'/>

        </div>
        <div className='text-sm text-center mt-6'>
          <p>Already registered? <span onClick={()=>{navigate('/')}} className='cursor-pointer'>signin</span> </p>
          <div className='flex mt-6 justify-between md:text-[0.8rem] cursor-pointer'>
            <p>Terms&conditions</p>
            <p>support</p>
            <p>customer care</p>

          </div>
        </div>
      </div>  
    </div>
  )
}

export default Signup