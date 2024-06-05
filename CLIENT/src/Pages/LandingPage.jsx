import React from 'react'
import ManAvatar from '../Components/ManAvatar'
import Footer from '../Layouts/Footer'
import bulb from '../assets/bulb.png'
import star from '../assets/star.png'

const LandingPage = () => {

  return (
    <>

      <section className='w-full h-full p-4 flex sm:flex-col sm:justify-center md:justify-between mini:justify-between laptop:justify-between super:justify-between items-center'>

          <div className='sm:w-full md:w-1/2 my-4 text-center mini:ml-8 laptop:ml-10 super:ml-16 relative'>

              <h1 className='font-Jost sm:text-xl md:text-lg tablet:text-2xl mini:text-4xl laptop:text-4xl super:text-5xl'> Welcome to pick on profile  </h1>

              <div>
                <img className='absolute ssm:-top-6 xsm:right-4 w-6 h-6 sm:-top-4 sm:right-8 md:-top-4 md:-right-4 tablet:-top-6 tablet:-right-4 mini:-top-6 mini:-right-4 laptop:-top-6 laptop:-right-4 super:-top-8 super:-right-6 animate-pulse' src={bulb} alt="bulb" />
                <img className='absolute ssm:-left-8 xsm:left-4 w-6 h-6 sm:-bottom-4 sm:left-6 md:-bottom-6 md:left-4 tablet:-bottom-6 tablet:left-6 laptop:-bottom-6 laptop:-left-1 super:left-4 animate-pulse' src={star} alt="star" />
              </div>

          </div>

        <ManAvatar></ManAvatar>

      </section>

      <Footer></Footer>

    </>
  )
}

export default LandingPage