import React from 'react'
import ImageAvatar from './ImageAvatar'
import { Link } from 'react-router-dom'

const ProfileCard = ({src, firstName, lastName, role, email, github_url}) => {

return (

<>

        <div className="max-w-xs">

            <div className="bg-white shadow-xl rounded-lg py-3">

                <div className="photo-wrapper p-2">
                    {src ? <img className="w-32 h-32 rounded-full mx-auto" src={src} alt={firstName}/> : <ImageAvatar></ImageAvatar> }
                </div>

                <div className="p-2">

                    <h3 className="text-center text-md text-gray-900 font-Montserrat leading-8"> {firstName} {lastName} </h3>

                    <div className="text-center text-gray-400 text-xs font-semibold">
                        <p> {role} </p>
                    </div>

                    <div className="text-xs my-3 text-center px-2 flex justify-center items-center">
                        <p className="text-gray-500 font-semibold mx-3"> Email </p>
                        <span className=""> {email} </span>
                    </div>

                    <div className="text-center my-3">
                        <Link className="text-xs text-blue-500 italic hover:underline hover:text-blue-600 font-medium" to={github_url} target='_'> View Profile </Link>
                    </div>

                </div>

            </div>
            
        </div>

</>

)
}

export default ProfileCard