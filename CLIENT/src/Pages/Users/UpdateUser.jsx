import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { LiaUserEditSolid } from "react-icons/lia";
import 'react-toastify/dist/ReactToastify.css';
import Modal from '../../Components/Modal';
import UseUpdateUser from '../../Hooks/Users/UseUpdateUser';
import UserForm from '../../Components/UserForm'
import ImageAvatar from '../../Components/ImageAvatar'


const UpdateUser = () => {

const {id} = useParams()
const { currentUser, status, updateUser, error, handleChange, handleUpdateUser } = UseUpdateUser(id)

const handleFormSubmit = async (e) => {
    e.preventDefault()
    await handleUpdateUser()
}


if (!currentUser && status !== 'Loading.......')  {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center font-Montserrat sm:text-lg text-4xl text-center"> 
            <p> The user does not exist. </p>
            <p> Click <Link to={'/user'} className='text-blue-800 hover:underline font-bold'> here </Link> to go back to profiles </p>
        </div>
    );
}

return (

<>
    <ToastContainer 
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
    />

    {status === 'Loading...' && <Modal></Modal>}

    { status !== 'Loading.......' && currentUser &&
    
        <section className='w-full mini:h-full laptop:h-full super:h-full flex flex-col justify-center items-center py-4'>

            <h2 className='text-2xl font-bold my-4'> Update your profile </h2>

            <div className="photo-wrapper p-2 relative">
                {currentUser?.src 
                    ? <img className="w-32 h-32 rounded-full mx-auto" src={src} alt={firstName}/> 
                        : 
                            <>
                                <ImageAvatar></ImageAvatar> <LiaUserEditSolid className='text-crimson text-2xl absolute top-6 right-2 cursor-pointer' /> 
                            </>
                } 
            </div>

            <UserForm 
                user={updateUser}
                status={status}
                error={error}
                handleChange={handleChange}
                handleFormSubmit={handleFormSubmit}
            >
            </UserForm>

        </section>
    }
</>
)
}

export default UpdateUser