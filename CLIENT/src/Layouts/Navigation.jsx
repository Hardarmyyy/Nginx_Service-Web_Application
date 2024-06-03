import React from 'react'
import { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Logo from '../Components/Logo'


const Navigation = () => {

const navRef = useRef(null);

const [show, setShow] = useState(false)

useEffect(() => {

    const handleDocumentClick = (e) => {
        if (show && navRef.current && !navRef.current.contains(e.target)) {
            setShow(false)
        }
        document.addEventListener('click', handleDocumentClick)
        return () => {
            document.removeEventListener('click', handleDocumentClick)
        }
    }
}, [show])


return (

<>
    <header className='min-w-full bg-black px-4 py-2 flex justify-between items-center'>

        <Logo></Logo>

        <nav className='w-1/4 text-white cursor-pointer font-Jost font-bold sm:hidden md:hidden'> 

            <div className='flex justify-end items-center sm:text-sm md:text-md lg:text-lg'>

                <div onClick={() => setShow(!show)} ref={navRef} className='mx-1 relative cursor-pointer'>

                    <p className='flex items-center hover:text-crimson-light'>  
                        Profile {show ? <IoIosArrowUp className='text-white ml-1 hover:text-crimson-light'/> : <IoIosArrowDown className='text-white ml-1'/> } 
                    </p>

                    {show && 
                        <div className='w-28 px-1 py-2 text-sm absolute right-0 rounded-sm bg-dropdown text-white flex flex-col items-center shadow-md z-50'>
                            <Link to='/user' className='my-1 hover:text-crimson-light'> View profiles </Link>
                            <Link to='/user/add-user' className='my-1 hover:text-crimson-light'> Add profile </Link>
                        </div>
                    }

                </div>

            </div>

        </nav>


    </header>
    
</>
)
}

export default Navigation