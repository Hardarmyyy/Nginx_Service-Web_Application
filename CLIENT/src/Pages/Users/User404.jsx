import React from 'react'
import Footer from '../../Layouts/Footer'
import { Link } from 'react-router-dom'

const User404 = () => {

return (

<>
    <section className='w-full h-full flex flex-col justify-center items-center font-Montserrat mx-auto'> 
        
        <h2 className='font-Jost font-bold mb-2 sm:text-4xl md:text-4xl tablet:text-5xl mini:text-5xl laptop:text-5xl super:text-6xl'> Page not found</h2>

        <p className='sm:text-sm md:text-sm tablet:text-lg mini:text-lg laptop:text-lg super:text-xl'>  Click <Link to='/user' className='text-blue-600'> here </Link> to go back to profiles</p>

    </section>

    <Footer></Footer>
</>

)
}

export default User404