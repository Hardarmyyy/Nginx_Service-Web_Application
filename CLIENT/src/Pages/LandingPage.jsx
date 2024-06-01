import React from 'react'
import ManAvatar from '../Components/ManAvatar'
import bulb from '../assets/bulb.png'
import star from '../assets/star.png'

const LandingPage = () => {

  return (
    <>

      <section className='w-full min-h-full p-4 my-5 flex xsm:flex-col justify-between items-center'>

          <div className='w-1/2 xsm:w-full text-center p-4 relative'>

              <h1 className='font-Jost tablet:text-3xl laptop:text-4xl lg:text-5xl'> Welcome to pick on profile  </h1>

              <div>
                <img className='absolute tablet:w-8 tablet:bottom-0 tablet:-left-10 laptop:left-12 laptop:-bottom-20 animate-pulse' src={bulb} alt="bulb" />
                <img className='absolute tablet:w-8 tablet:-top-6 tablet:right-2 laptop:-top-14 laptop:right-2 lg:-top-12 lg:right-0 animate-pulse' src={star} alt="star" />
              </div>

          </div>

        <ManAvatar></ManAvatar>

      </section>

    </>
  )
}

export default LandingPage