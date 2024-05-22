import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../Components/Logo'

const Navigation = () => {

return (

<>
    <header className='min-w-full bg-black px-4 py-2 flex justify-between items-center'>

        <Logo></Logo>

        <nav className='text-white cursor-pointer font-Jost font-bold'> 

            <ul className='sm:text-sm md:text-md lg:text-lg'>
                <Link to='/user' className='hover:text-crimson-light'> Profiles </Link>
            </ul>

        </nav>


    </header>
    
</>
)
}

export default Navigation