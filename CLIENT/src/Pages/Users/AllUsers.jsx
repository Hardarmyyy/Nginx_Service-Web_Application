import React from 'react'
import { useSelector } from 'react-redux'
import ProfileCard from '../../Components/ProfileCard';
import SkeletalLoading from '../../Components/SkeletalLoading';
import Footer from '../../Layouts/Footer';

const AllUsers = () => {

const allProfiles = useSelector((state) => state?.profiles?.allProfiles);
const status = useSelector((state) => state?.profiles?.status);

if (status === 'Loading.......') {
    return (
        <>
            <SkeletalLoading listToRender={6}></SkeletalLoading> 
            <Footer></Footer>
        </>
    );
}

if (status === 'failed') {
    return (
        <>
            <section className='w-full min-h-screen flex flex-col justify-center items-center font-Montserrat '>
                <p className="sm:text-sm md:text-lg tablet:text-xl mini:text-3xl laptop:text-4xl super:text-4xl font-bold text-center"> Failed to load profiles. Please try again. </p>
            </section>
            <Footer></Footer>
        </>
    );
}

return (
<>

    { status !== 'Loading.......' && !allProfiles.length

        ?   
            <>
                <section className='w-full min-h-screen flex flex-col justify-center items-center text-center'>  
                    <p className='font-Montserrat font-bold sm:text-sm md:text-lg tablet:text-xl mini:text-3xl laptop:text-4xl super:text-4xl'> Sorry! Profile list is empty </p>
                </section> 
                <Footer></Footer>
            </>
        
            :
                <>
                    <section className='w-full super:w-3/4 min-h-screen flex flex-wrap items-center justify-center tablet:justify-start py-4 mx-auto content-center mini:grid mini:grid-cols-4 mini:gap-2 laptop:grid laptop:grid-cols-5 laptop:gap-2 super:grid super:grid-cols-6 super:gap-2'>

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

                    <Footer></Footer>
                </>
    }
    
</>
)
}

export default AllUsers