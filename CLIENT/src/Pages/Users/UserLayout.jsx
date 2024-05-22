import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../../Layouts/Navigation'

const UserLayout = () => {

return (

<>
    <Navigation></Navigation>
    <Outlet></Outlet>
</>
)
}

export default UserLayout