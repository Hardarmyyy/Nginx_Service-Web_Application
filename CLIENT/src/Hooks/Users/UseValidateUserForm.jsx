import React from 'react'
import { useState, useEffect } from 'react'


const UseValidateUserForm = (value) => {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const githubRegex = /^https:\/\/(www\.)?github\.com\/(?!.*--)[a-zA-Z0-9-]{1,39}$/;

    const [errors, setError] = useState({})

    const validate = (value) => {

        const newErrors = {};

        for (const field in value) {

            if (field === 'fName' && value[field]?.trim() === '') {
                newErrors[field] = 'First name is required';
            }
            else if (field === 'lName' && value[field]?.trim() === '') {
                newErrors[field] = 'Last name is required';
            }
            else if (field === 'email' && value[field]?.trim() === '') {
                newErrors[field] = 'Email address is required';
            }
            else if (field === 'email' && value[field]?.trim() !== '' && !emailRegex.test(value[field]?.trim())) {
                newErrors[field] = 'Enter a valid e-mail address';
            }
            else if (field === 'role' && value[field]?.trim() === '') {
                newErrors[field] = 'Role is required';
            }
            else if (field === 'github_url' && value[field]?.trim() === '') {
                newErrors[field] = 'Github link address is required';
            }
            else if (field === 'github_url' && value[field]?.trim() !== '' && !githubRegex.test(value[field]?.trim())) {
                newErrors[field] = 'Enter a valid github address';
            }

        }

        setError(newErrors)
    }

    useEffect(() => {
        validate(value)
    }, [value]) 

    return {errors}

}

export default UseValidateUserForm