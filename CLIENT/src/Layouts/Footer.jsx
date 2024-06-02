import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { Link } from 'react-router-dom';



const Footer = () => {

return (
<>
    <footer className='text-center my-4 font-Montserrat text-sm flex flex-col justify-center items-center'>
        <p>  &copy; 2024 Hardarmyyy. All rights reserved.</p>
        <Link to={'https://github.com/Hardarmyyy/Nginx_Service-Web_Application'} target='_'> <IoLogoGithub className='text-lg cursor-pointer'/>  </Link>
    </footer>
</>
)
}

export default Footer