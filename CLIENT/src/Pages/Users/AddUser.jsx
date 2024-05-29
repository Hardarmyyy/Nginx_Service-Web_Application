import React from 'react'
import UseAddUser from '../../Hooks/Users/UseAddUser'
import UserForm from '../../Components/UserForm'

const AddUser = () => {

const { status, newUser, error, handleChange, handleCreateNewuser} = UseAddUser()

const handleFormSubmit = async (e) => {
    e.preventDefault()
    await handleCreateNewuser()
}

return (
    <>
        <section className='flex flex-col items-center py-4'>

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
        
    </>
)
}

export default AddUser