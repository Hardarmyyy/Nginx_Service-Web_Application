import React from 'react'
import Man from '../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png'
import Shine from '../assets/shine.png'

const ManAvatar = () => {


return (

<>
        
    <div className='sm:w-full md:w-3/4 tablet:w-3/4 mini:w-1/2 laptop:w-1/2 my-4 flex flex-col justify-center items-center relative'>

        <div className=''>
            <img className='w-full h-full object-cover overflow-hidden' src={Man} alt='man wearing glass' />
        </div>

        <div className='absolute xsm:left-10 xsm:bottom-10 sm:left-12 sm:bottom-14 md:left-6 md:bottom-8 tablet:left-14 tablet:bottom-14 mini:left-12 mini:bottom-12 laptop:left-16 laptop:bottom-16 super:bottom-24 super:left-24'>
            <div className='ssm:w-20 ssm:h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 tablet:w-40 tablet:h-40 mini:w-44 mini:h-44 laptop:w-48 laptop:h-48 super:w-52 super:h-52 flex items-center justify-center'>
                <img className='w-full h-full object-cover animate-spin-slow overflow-hidden' src={Shine} alt='shine' />
            </div>
        </div>

    </div>
</>

)
}

export default ManAvatar