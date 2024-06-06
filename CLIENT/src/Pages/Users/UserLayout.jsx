import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Layouts/Footer'


const UserLayout = () => {

return (

<>
    <Outlet></Outlet>
    <Footer></Footer>
</>
)
}

export default UserLayout