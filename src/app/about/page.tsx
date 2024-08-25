import React from 'react'
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className='bg-[#f0f4fc] min-h-screen h-full m-0'>
        <Navbar />
        <div>
        <div
  className="hero min-h-[50vh]"
  style={{
    backgroundImage: "url(/ella-bg-tint-black.png)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Meet Us</h1>
      
    </div>
  </div>
</div>
        <h1 className="text-6xl text-main  text-center m-8 my-12 font-bold"></h1>
        <div className='flex justify-evenly flex-wrap m-8 my-0'>
            <div className="card bg-base-100 w-[27rem] m-4 shadow-xl">
                <figure>
                    <img
                    src="/navarro.png"
                    alt="Ms. Navarro" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Ms. Navarro</h2>
                    <p>I was born and raised in the East Side of San Jose. I am a first generation college graduate and daughter of immigrant parents from Jalisco, Mexico. I attended UC Berkeley and earned a Bachelor's Degree in Political Science and Gender and Women’s Studies. After, I attended San Jose State University and earned my Master’s in Counselor Education with a Pupil Personnel Services Credential.

                    </p>
                    
                </div>
            </div>

            <div className="card bg-base-100 w-[27rem] m-4 shadow-xl">
                <figure>
                    <img
                    src="/nguyen.png"
                    alt="Ms. Nguyen" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Ms. Nguyen</h2>
                    <p>I am a first-generation Vietnamese immigrant and proud graduate of Silver Creek.

I want to be able to give back to the community that raised me and helped shape who I am today. I wish to share with students my passion for math and instill in them the habits to be successful.

</p>
                    
                </div>
            </div>

            <div className="card bg-base-100 w-[27rem] m-4 shadow-xl">
                <figure>
                    <img
                    src="/mendoza.png"
                    alt="Ms. Mendoza" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Ms. Mendoza</h2>
                    <p>I am a Bay Area native and first-generation Mexican-American.  I am the proud daughter of Mexican immigrants from Oaxaca, México.  I received my bachelor's degree  in Social Welfare with a minor in Education from UC Berkeley and a masters in Counselor Education with a Pupil personnel Services Credential from San José State University. 

</p>
                    
                </div>
            </div>


            <div className="card bg-base-100 w-[27rem] m-4 shadow-xl">
                <figure>
                    <img
                    src="/anchondo.png"
                    alt="Mr. Anchondo" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Mr. Anchondo</h2>
                    <p>lorem ipsum dolor mit amet lorem ipsum dolor mit amet lorem ipsum dolor mit amet lorem ipsum dolor mit amet lorem ipsum dolor mit amet </p>
                    
                </div>
            </div>

            <div className="card bg-base-100 w-[27rem] m-4 shadow-xl">
                <figure>
                    <img
                    src="/camacho.png"
                    alt="Mr. Camacho" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Mr. Camacho</h2>
                    <p>I am a first-generation Mexicano-Chicano and a proud product of migrantes who nurtured me with cariño and taught me respect. I will work hard to encourage our students to shoot for success. 

</p>
                    
                </div>
            </div>

            <div className="card bg-base-100 w-[27rem] m-4 shadow-xl">
                <figure>
                    <img
                    src="/leal.png"
                    alt="Mr. Leal" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Mr. Leal</h2>
                    <p>I am a first generation Latino teacher from El Salvador who likes to create digital projects, websites, anything that makes my lessons more interactive and relevant to my students.

</p>
                    
                </div>
            </div>
        </div>

    </div>



    </div>
  )
}

export default About;