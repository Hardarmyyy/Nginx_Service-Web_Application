import React from 'react'
import Button from './Button'
import Spinner from './Spinner'
import { useLocation } from 'react-router-dom'

const UserForm = ({status, user, error, handleFormSubmit, handleChange}) => {

const {pathname} = useLocation()
const showCreateProfileButton = pathname === '/user/add-user'

return (

<>
    <form className='w-3/4 text-my-primary font-Montserrat' onSubmit={handleFormSubmit}>

        <div className='w-full flex items-center justify-between'>

            <div className='w-1/2 mb-4 relative mr-2'>
                <label className='font-bold'> First name <span className='text-crimson'> * </span></label> <br />
                <input 
                    type='text' 
                    className='w-full px-2 py-1 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-slate-600'
                    value={user?.fName} 
                    onChange={handleChange} 
                    placeholder='Enter first name' 
                    name='fName' 
                    maxLength={30}
                />
                {error && <p className='text-crimson text-sm absolute left-0'> {error.fName} </p>}
            </div>

            <div className='w-1/2 mb-4 relative ml-2'>
                <label className='font-bold'> Last name <span className='text-crimson'> * </span></label> <br />
                <input 
                    type='text' 
                    className='w-full px-2 py-1 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-slate-600'
                    value={user?.lName} 
                    onChange={handleChange} 
                    placeholder='Enter last name' 
                    name='lName' 
                    maxLength={30}
                />
                {error && <p className='text-crimson text-sm absolute left-0'> {error.lName} </p>}
            </div>

        </div>
        
        <div className='mb-4 relative'>
            <label className='font-bold'> Email <span className='text-crimson'> * </span></label> <br />
            <input 
                type='text'
                className='w-full px-2 py-1 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-slate-600'
                value={user?.email} 
                onChange={handleChange} 
                placeholder='user@example.com' 
                name='email' 
            />
            {error && <p className='text-crimson text-sm absolute left-0'> {error.email} </p>}
        </div>

        <div className='mb-4 relative'>
            <label className='font-bold'> Role <span className='text-crimson'> * </span></label> <br />
            <input 
                type='text'
                className='w-full px-2 py-1 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-slate-600'
                value={user?.role} 
                onChange={handleChange} 
                placeholder='your role' 
                name='role' 
            />
            {error && <p className='text-crimson text-sm absolute left-0'> {error.role} </p>}
        </div>

        <div className='mb-4 relative'>
            <label className='font-bold'> Github Link <span className='text-crimson'> * </span></label> <br />
            <input 
                type='text'
                className='w-full px-2 py-1 border-2 rounded-md shadow-sm bg-white placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-slate-600'
                value={user?.github_url} 
                onChange={handleChange} 
                placeholder='Ex: https://github.com/username' 
                name='github_url' 
            />
            {error && <p className='text-crimson text-sm absolute left-0'> {error.github_url} </p>}
        </div>

        <div className='text-center'>
            {showCreateProfileButton 
                ? 
                    <Button margin='20px 0px' padding='10px 70px'> {status === 'Loading...' ? <span className='flex items-center'> <Spinner></Spinner> Creating profile .... </span> : <span> Add profile </span>} </Button> 
                    : 
                    <Button margin='20px 0px' padding='10px 70px'> {status === 'Loading...' ? <span className='flex items-center'> <Spinner></Spinner> Updating  profile .... </span> : <span> Update profile </span>} </Button> 
            }
        </div>

    </form>
</>

)
}

export default UserForm