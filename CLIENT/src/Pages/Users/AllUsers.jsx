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
            <section className='w-full min-h-screen flex items-start justify-center py-4 px-2 mx-auto'>
                <div className='w-3/4 tablet:w-full mini:w-full laptop:w-full super:w-4/5 grid gap-4 grid-cols-1 tablet:grid-cols-3 mini:grid-cols-3 laptop:grid-cols-4 super:grid-cols-5'>
                    <SkeletalLoading listToRender={6}></SkeletalLoading> 
                </div>
            </section>
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
                    <section className='w-full min-h-screen flex items-start justify-center py-4 px-2 mx-auto'>

                        <div className='w-3/4 tablet:w-full mini:w-full laptop:w-full super:w-4/5 grid gap-4 grid-cols-1 tablet:grid-cols-3 mini:grid-cols-3 laptop:grid-cols-4 super:grid-cols-5'>

                        {allProfiles.map((profile) => 

                            <div key={profile.userId} className='m-2 flex items-center justify-center'>

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

                        </div>

                    </section>

                    <Footer></Footer>
                </>
    }
    
</>
)
}

export default AllUsers