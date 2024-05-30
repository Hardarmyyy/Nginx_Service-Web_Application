import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../Layouts/Navigation'

const Notfound = () => {

return (

<>

    <Navigation></Navigation>

    <section className='w-full flex flex-col justify-center items-center text-lg font-Montserrat text-primary mx-auto sm:translate-y-40 lg:translate-y-36  relative'> 
        
        <h2 className='font-Jost md:text-4xl lg:text-5xl font-bold mb-2'> Page not found</h2>

        <p className='md:text-xl lg:text-3xl'>  Click <Link to='/' className='text-blue-600'> here </Link> to go back home</p>

    </section>
</>
)
}

export default Notfound