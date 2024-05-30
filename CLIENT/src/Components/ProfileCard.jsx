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

                    <table className="text-xs my-3">
                        <tbody>
                            <tr>
                                <td className="px-2 py-2 text-gray-500 font-semibold"> Email </td>
                                <td className="px-2 py-2"> {email} </td>
                            </tr>
                        </tbody>
                    </table>

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