import React from 'react'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {

return (

<>
    <h1> This is the user outlet page </h1>
    <Outlet></Outlet>
</>
)
}

export default UserLayout