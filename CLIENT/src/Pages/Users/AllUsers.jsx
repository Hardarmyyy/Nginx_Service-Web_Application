import React from 'react'
import { useSelector } from 'react-redux'
import ProfileCard from '../../Components/ProfileCard';
import SkeletalLoading from '../../Components/SkeletalLoading';

const AllUsers = () => {

const allProfiles = useSelector((state) => state?.profiles?.allProfiles);
const status = useSelector((state) => state?.profiles?.status);

if (status === 'Loading.......') {
    return (
        <SkeletalLoading listToRender={6}></SkeletalLoading> // SKELETAL LOADING IMPLEMETATION
    );
}

if (status === 'failed') {
    return (
        <p className="w-full min-h-full translate-y-32 font-Montserrat text-4xl font-bold text-center"> Failed to load profiles. Please try again. </p>
    );
}

return (
<>

    { status !== 'Loading.......' && !allProfiles.length

        ? <p className='w-full min-h-full translate-y-32 font-Montserrat text-4xl font-bold text-center'> Profile list is empty </p> 
        
            :

                <section className='grid justify-center items-center content-center md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-5 px-8 py-10'>

                    {allProfiles.map((profile) => 

                        <div key={profile.userId}>

                            <ProfileCard
                                userId={profile.userId}
                                src={profile.src}
                                firstName={profile.fName}
                                lastName={profile.lName}
                                role={profile.role}
                                email={profile.email}
                                github_url={profile.github_url}
                            >
                            </ProfileCard>

                        </div>
                    )}

                </section>
    }
    
</>
)
}

export default AllUsers