import React from 'react'
import UseAddUser from '../../Hooks/Users/UseAddUser'
import UserForm from '../../Components/UserForm'
import Footer from '../../Layouts/Footer'
import Modal from '../../Components/Modal'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const AddUser = () => {

const { status, newUser, error, handleChange, handleCreateNewuser} = UseAddUser()

const handleFormSubmit = async (e) => {
    e.preventDefault()
    await handleCreateNewuser()
}

return (
    <>
        {status === 'Loading...' && <Modal></Modal>}

        <ToastContainer 
            position='top-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
        />

        <section className='w-full h-full flex flex-col items-center justify-center py-4'>

            <h2 className='text-2xl font-bold my-4'> Add new profile </h2>

            <UserForm 
                status={status} 
                user={newUser} 
                error={error} 
                handleFormSubmit={handleFormSubmit} 
                handleChange={handleChange}
            >
            </UserForm>

        </section>
        
        <Footer></Footer>
    </>
)
}

export default AddUser