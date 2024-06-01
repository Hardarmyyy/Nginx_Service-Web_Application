import React from 'react'
import Man from '../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png'
import Shine from '../assets/shine.png'

const ManAvatar = () => {


return (

<>
        
    <div className='w-1/2 relative flex flex-col justify-center items-center'>

        <div className=''>
            <img src={Man} alt='man wearing glass' />
        </div>

        <div className='absolute tablet:left-8 tablet:bottom-6 laptop:left-14 laptop:bottom-12 lg:bottom-14 lg:left-16 super:left-80'>
            <div className='tablet:w-32 tablet:h-32 laptop:w-40 laptop:h-40 lg:w-64 lg:h-64 rounded-full overflow-hidden flex items-center justify-center'>
                <img className='w-full h-full object-cover animate-spin-slow overflow-hidden' src={Shine} alt='shine' />
            </div>
        </div>

    </div>
</>

)
}

export default ManAvatar