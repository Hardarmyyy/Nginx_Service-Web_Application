import React from 'react'
import { useState, useEffect } from 'react'
import {ADDUSER} from '../../Services/profileApi'
import { useSelector, useDispatch } from 'react-redux'
import UseValidateUserForm from './UseValidateUserForm'
import {toast} from 'react-toastify'


const UseAddUser = () => {

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const githubRegex = /^https:\/\/(www\.)?github\.com\/(?!.*--)[a-zA-Z0-9-]{1,39}$/;

  const status = useSelector((state) => state?.profiles?.status);
  const dispatch = useDispatch();

  //define a state to handle new user object;
  const [newUser, setNewUser] = useState({
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

    setNewUser((newUser) => {return {...newUser, [name]: name === 'role' ? value : value.replace(/\s/g, "")}})

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
  const {errors} = UseValidateUserForm(newUser)

  // Define a function to check all properties in the newUser object;
  const handleCanCreateUser = (value) => {

      const canCreateUser = [
          value.fName &&
          value.lName && 
          value.email && emailRegex.test(value.email) &&
          value.role &&
          value.github_url && githubRegex.test(value.github_url)
      ].every(Boolean)

      return canCreateUser
  }

  const createUser = handleCanCreateUser(newUser)

  // Define a function to create new user
  const handleCreateNewuser = async () => {

    if (isSubmitting) return 

    setError(errors)

    if (!isSubmitting && createUser) {

      setIsSubmitting(true)

      await dispatch(ADDUSER(newUser))
      .then((response) => {
          const {message} = response.payload
          if (message) {
              setNewUser({
                fName: '',
                lName: '',
                email: '',
                role: '',
                github_url: ''
              })
          }
          toast.success(message, {
            toastStyle: { background: 'green', color: 'white' }
        })
      })
      .catch((err) => {
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
    handleCanCreateUser(newUser)
  }, [newUser])  

  return { status, newUser, error, handleChange, handleCreateNewuser }

}

export default UseAddUser
