import React from 'react'

const Spinner = () => {

return (
    <>
        <svg
            className="animate-spin-slow h-5 w-5 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            ></circle>
            <path
            className="opacity-75"
            fill="currentColor"
            d="M12 2a10 10 0 0110 10h-4a6 6 0 00-6-6V2z" 
            ></path>
        </svg> 
    </>
)
}

export default Spinner