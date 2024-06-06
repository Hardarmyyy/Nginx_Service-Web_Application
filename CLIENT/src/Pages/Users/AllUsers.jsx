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
        <p className="w-full h-full flex flex-col justify-center items-center font-Montserrat sm:text-sm md:text-lg tablet:text-xl mini:text-3xl laptop:text-4xl super:text-4xl font-bold text-center"> Failed to load profiles. Please try again. </p>
    );
}

return (
<>

    { status !== 'Loading.......' && !allProfiles.length

        ?   <div className='w-full h-full flex flex-col justify-center items-center text-center'>  
                <p className='font-Montserrat font-bold sm:text-sm md:text-lg tablet:text-xl mini:text-3xl laptop:text-4xl super:text-4xl'> Sorry! Profile list is empty </p>
            </div> 
        
            :

                <section className='w-full flex flex-wrap items-center justify-center py-4 tablet:grid content-center tablet:grid-cols-3 tablet:gap-4'>

                    {allProfiles.map((profile) => 

                        <div key={profile.userId} className='m-2 w-60'>

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