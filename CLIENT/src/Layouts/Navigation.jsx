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
    <header className='w-full super:px-60 bg-black sticky top-0 z-50'>

        <div className='w-full px-4 py-2 flex justify-between items-center'>

            <Logo></Logo>

            <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-show="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="tablet:hidden mini:hidden laptop:hidden super:hidden inline-flex items-center p-2 w-10 h-10 justify-center sm:text-sm md:text-lg text-white rounded-lg focus:outline-none">
                <span className="sr-only"> Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="sidebar-multi-level-sidebar" className="fixed bg-my-bg w-full top-0 left-0 z-50 h-screen transition-transform -translate-x-full tablet:hidden mini:hidden laptop:hidden super:hidden" aria-label="Sidebar">

                <div className="sm:w-3/4 md:w-1/2 h-screen p-3 overflow-y-auto bg-[#2b2b2b]">

                    <div className='flex justify-between items-center'>

                        <Logo></Logo>
                        <button data-drawer-hide="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="tablet:hidden mini:hidden laptop:hidden super:hidden inline-flex items-center p-2 w-10 h-10 justify-center sm:text-sm md:text-lg text-white rounded-lg focus:outline-none transition duration-75">
                            <span className="sr-only"> Close sidebar </span>
                            <svg className="w-6 h-6 text-white"  aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>

                    </div>

                    <ul className="space-y-2 font-medium">

                        <li>
                            <button data-drawer-hide="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="transition duration-75">
                                <Link to={'/'} className="flex items-center p-2 text-gray-900">
                                    <svg className="w-5 h-5 text-white transition duration-75" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 22 21">
                                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                                    </svg>
                                    <span className="ms-3 text-white"> Home </span>
                                </Link>
                            </button>
                        </li>

                        <li>
                            <button type="button" className="flex items-center w-full p-2 text-base text-white transition duration-75" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 20 18">
                                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                                </svg>
                                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"> Profiles </span>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>
                            <ul id="dropdown-example" className="hidden py-2 space-y-2">

                                <li>
                                    <button data-drawer-hide="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="transition duration-75">
                                        <Link to={'/user'} className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11"> View profiles </Link>
                                    </button>
                                </li>

                                <li>
                                    <button data-drawer-hide="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="transition duration-75">
                                    <Link to={'/user/add-user'} className="flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11"> Add profile </Link>
                                    </button>
                                </li>

                            </ul>
                        </li>
                    </ul>

                </div>

            </aside>

            <nav className='w-1/4 text-white cursor-pointer font-Jost font-bold  ssm:hidden xsm:hidden sm:hidden md:hidden'> 

                <div className='flex justify-end items-center tablet:text-lg mini:text-lg laptop:text-xl super:text-xl'>

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

        </div>
        
    </header>
    
</>
)
}

export default Navigation