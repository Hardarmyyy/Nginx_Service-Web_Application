import React from 'react'
import UserForm from '../../Components/UserForm'

const AddUser = () => {

return (
    <>
        <section className='flex flex-col items-center py-4'>

            <h2 className='text-2xl font-bold my-4'> Add new profile </h2>

            <UserForm></UserForm>

        </section>
        
    </>
)
}

export default AddUser