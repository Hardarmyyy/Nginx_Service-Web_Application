import React from 'react'
import {Link} from 'react-router-dom'

const Logo = () => {

return (

<>

    <nav className='text-white cursor-pointer font-Jost font-bold sm:text-2xl md:text-3xl lg:text-4xl'> 

        <Link to='/'> P <span className='text-crimson'>N</span> P </Link> 

    </nav>

</>
)
}

export default Logo