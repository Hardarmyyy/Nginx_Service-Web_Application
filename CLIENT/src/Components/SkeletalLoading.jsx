import React from 'react'

const SkeletalLoading = ({listToRender}) => {

return (

<>
    <section className='w-full min-h-screen flex items-center justify-center py-4 mx-auto'>

        <div className='super:w-3/4 grid gap-4 grid-cols-1 tablet:grid-cols-3 mini:grid-cols-3 laptop:grid-cols-4 super:grid-cols-5'>

        {Array(listToRender).fill(1).map((card, index) => 

            <div key={index} className='m-2 w-full'>

                <div role="status" className="max-w-xs flex flex-col justify-center items-center border border-gray-200 animate-pulse bg-white shadow-xl rounded-lg p-3 relative">
            
                    <svg
                        className="w-32 h-32 rounded-full mx-auto text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 4a4 4 0 110 8 4 4 0 010-8zM4 18a8 8 0 0116 0H4z"
                            clipRule="evenodd"
                        />
                    </svg>
                    
                    <div className="w-full flex flex-col justify-center items-center m-4">
                        
                        <div className="h-4 bg-gray-400 rounded-md w-3/4 mb-2"></div>
                        <div className="h-4 bg-gray-400 rounded-md w-1/2 mb-2"></div>
                        <div className="h-4 bg-gray-400 rounded-md w-full mb-2"></div>
                        <div className="w-1/4 h-4 bg-gray-400 rounded-md"></div>
                        
                    </div>
                    <span className="sr-only">Loading...</span>

                </div>

            </div>

        )
        }

        </div>

    </section>
</>

)
}

export default SkeletalLoading