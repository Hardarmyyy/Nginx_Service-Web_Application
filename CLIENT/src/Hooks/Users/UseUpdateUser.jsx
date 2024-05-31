import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { UPDATEUSER } from '../../Services/profileApi'
import UseValidateUserForm from './UseValidateUserForm'
import {toast} from 'react-toastify'

const UseUpdateUser = (id) => {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const githubRegex = /^https:\/\/(www\.)?github\.com\/[a-zA-Z0-9-]{1,39}(?<!-)$/;

    const status = useSelector((state) => state?.profiles?.status);
    const allProfiles = useSelector((state) => state?.profiles?.allProfiles)
    const currentUser = allProfiles.find(profile => profile.userId === id)
    const dispatch = useDispatch();

    //define a state to handle update user object;
    const [updateUser, setUpdateUser] = useState({
        fName: '',
        lName: '',
        email: '',
        role: '',
        github_url: ''
    })

    //define a state to handle error on input change validation
    const [error, setError] = useState({})

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {

        const {name, value} = e.target

        setUpdateUser((updateUser) => {return {...updateUser, [name]: name === 'role' ? value : value.replace(/\s/g, "")}})

        if (name === 'fName') {
            setError((error) => { return {...error, fName: value ? value.length >= 30 ? 'Maximum number of characters is 30' : null : 'First name is required'}})
        }
        else if (name === 'lName') {
            setError((error) => { return {...error, lName: value ? value.length >= 30 ? 'Maximum number of characters is 30' : null : 'Last name is required'}})
        }
        else if (name === 'email') {
            setError((error) => { return {...error, email: value ? emailRegex.test(value) ? null : 'Enter a valid e-mail address' : 'Email address is required'}})
        }
        else if (name === 'role') {
            setError((error) => { return {...error, role: value ? null : 'Role is required'}})
        }
        else if (name === 'github_url') {
            setError((error) => { return {...error, github_url: value ? githubRegex.test(value) ? null : 'Enter a valid github address' : 'Github profile url is required'}})
        }

    }

    // Import hooks to catch errors when submitting form
    const {errors} = UseValidateUserForm(updateUser)

    // Define a function to check all properties in the update user object;
    const handleCanUpdateUser = (value) => {

        const canUpdateUser = [
            value.fName &&
            value.lName && 
            value.email && emailRegex.test(value.email) &&
            value.role &&
            value.github_url && githubRegex.test(value.github_url)
        ].every(Boolean)

        return canUpdateUser
    }

    const updateMyUser = handleCanUpdateUser(updateUser)

    // Define a function to update user
    const handleUpdateUser = async () => {

        if (isSubmitting) return 

        setError(errors)

        if (!isSubmitting && updateMyUser) {

        setIsSubmitting(true)

        await dispatch(UPDATEUSER({id, updateUser}))
        .then((response) => {
            const {message} = response.payload
            toast.success(message, {
                toastStyle: { background: 'green', color: 'white' }
            })
        })
        .catch((err) => {
            console.log(err)
            toast.error('Something went wrong', {
                toastStyle: { background: 'red', color: 'white' }
            })
        })
        .finally(() => {
            setIsSubmitting(false); // Re-enable the button
        })
        }

    } 

    useEffect(() => {
        handleCanUpdateUser(updateUser)
    }, [updateUser])  

    // Use useEffect to set the updateUser state with currentUser information when the component mounts or currentUser changes
    useEffect(() => {
        if (currentUser) {
            setUpdateUser({
            fName: currentUser.fName || '',
            lName: currentUser.lName || '',
            email: currentUser.email || '',
            role: currentUser.role || '',
            github_url: currentUser.github_url || ''
            });
        }
    }, [currentUser]);

    return { currentUser, status, updateUser, error, handleChange, handleUpdateUser }

}

export default UseUpdateUser