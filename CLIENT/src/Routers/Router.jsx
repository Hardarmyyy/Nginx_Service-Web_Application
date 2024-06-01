import { lazy, Suspense } from 'react'
import Modal from '../Components/Modal.jsx'
import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'

import App from '../App.jsx'

const LandingPage = lazy(() => import ('../Pages/LandingPage.jsx')) 
const Notfound = lazy(() => import ('../Pages/Notfound.jsx'))


const UserLayout = lazy(() => import ('../Pages/Users/UserLayout.jsx'))
const AllUsers = lazy(() => import ('../Pages/Users/AllUsers.jsx'))
const AddUser = lazy(() => import ('../Pages/Users/AddUser.jsx')) 
const UpdateUser = lazy(() => import ('../Pages/Users/UpdateUser.jsx')) 
const User404 = lazy(() => import ('../Pages/Users/User404.jsx')) 



export const router = createBrowserRouter(
    createRoutesFromElements(

        <Route element={<App />}>

            <Route path='/' element={<Suspense fallback={<Modal></Modal>}> <LandingPage></LandingPage> </Suspense>}></Route>

            <Route path='/user' element={<Suspense fallback={<Modal></Modal>}> <UserLayout></UserLayout> </Suspense>}> 

                <Route index element={<AllUsers/>}></Route>
                <Route path="add-user" element={<AddUser/>}></Route>
                <Route path="edit-user/:id" element={<UpdateUser/>}></Route>
                <Route path='*' element={<User404/>}></Route>

            </Route>

            <Route path='*' element={<Suspense fallback={<Modal></Modal>}> <Notfound></Notfound> </Suspense>}></Route>

        </Route>

    )
)