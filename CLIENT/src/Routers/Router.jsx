import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'

import App from '../App.jsx'

import LandingPage from '../Pages/LandingPage.jsx'
import Notfound from '../Pages/Notfound.jsx'


import UserLayout from '../Pages/Users/UserLayout.jsx'
import AllUsers from '../Pages/Users/AllUsers.jsx'
import AddUser from '../Pages/Users/AddUser.jsx'
import UpdateUser from '../Pages/Users/UpdateUser.jsx'
import User404 from '../Pages/Users/User404.jsx'



export const router = createBrowserRouter(
    createRoutesFromElements(

        <Route element={<App />}>

            <Route path='/' element={<LandingPage/>}></Route>

            <Route path='/user' element={<UserLayout/>}> 

                <Route index element={<AllUsers/>}></Route>
                <Route path="add-user" element={<AddUser/>}></Route>
                <Route path="edit-user/:id" element={<UpdateUser/>}></Route>
                <Route path='*' element={<User404/>}></Route>

            </Route>

            <Route path='*' element={<Notfound/>}></Route>

        </Route>

    )
)