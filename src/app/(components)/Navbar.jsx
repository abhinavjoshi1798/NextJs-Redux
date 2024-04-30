import Link from 'next/link'
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  return (
    <>
     <ToastContainer />
    <header className='w-full shadow'>
        <nav className='w-full mx-auto md:w-[70%] flex justify-between items-center py-4'>
            <Link href={"/"} className='text-xl'>Todo App</Link>
        </nav>
       
    </header>
    </>
  )
}

export default Navbar
