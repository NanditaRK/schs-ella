'use client'
import React from 'react'
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
const About = () => {
    useEffect(() => {
        // Function to add Google Translate script to the page
        const addGoogleTranslateScript = () => {
          const script = document.createElement('script');
          script.src =
            '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
          script.async = true;
          document.body.appendChild(script);
    
          // Adding the initialization script for Google Translate
          const initScript = document.createElement('script');
          initScript.text = `
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'es,en',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
              }, 'google_translate_element');
            }
          `;
          document.body.appendChild(initScript);
        };
    
        // Function to remove unwanted elements
        const removeUnwantedTranslateElements = () => {
          // Remove extra buttons or unwanted elements from Google Translate
          const unwantedButtons = document.getElementsByClassName(
            'VIpgJd-ZVi9od-xl07Ob-lTBxed'
          );
          // If there are more than one button, remove the extra ones
          if (unwantedButtons.length > 1) {
            for (let i = 1; i < unwantedButtons.length; i++) {
              unwantedButtons[i].remove();
            }
          }
        };
    
        // Load the Google Translate script
        addGoogleTranslateScript();
    
        // Attempt to clean up unwanted elements at intervals
        const interval = setInterval(() => {
          removeUnwantedTranslateElements();
        }, 1000);
    
        // Stop checking after a few seconds
        setTimeout(() => clearInterval(interval), 5000);
    
        // Cleanup function to clear the interval on component unmount
        return () => clearInterval(interval);
      }, []);
  return (
    <div className='bg-[#f0f4fc] min-h-screen h-full m-0'>
        <Navbar />
        <div>
        <div
  className="hero min-h-[50vh]"
  style={{
    backgroundImage: "url(/bg-ella-new.png)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">About</h1>
      
    </div>
  </div>
</div>
        <h1 id="whoweare" className="text-6xl text-main  text-center m-8 my-12 font-bold">Who are we?</h1>
        <div className='flex m-4 justify-center'>
            <iframe src="https://drive.google.com/file/d/1dYBC_ZbtXII4HvI2WK1xbwOPMKIEGlab/preview" width="640" height="480" allow="autoplay"></iframe>
            </div>
        <h1 className="text-4xl text-black  text-center m-8 my-12 font-bold">Mission</h1>
        <p className=" text-lg w-3/4 mx-auto text-center">
    Our mission is to empower our English Language Learners, <b className="text-main">especially our Latino students and families</b> at Silver Creek High School by establishing a bridge of communication, trust, and engagement between students and families, school staff (administrators, counselors, teachers) at Silver Creek by developing their leadership skills.
  </p>
  <h1 className="text-4xl text-black  text-center m-8 my-12 font-bold">Vision</h1>
  <div className=" text-lg w-3/4 mx-auto text-center">
   <ol className="list-decimal mx-auto text-left">
    <li className="m-2">Support our Silver Creek High School English Language Learner population while targeting Latino students.</li>
    <li className="m-2">Organize and sponsor the English Learner and Latino Community of the school regarding issues related to the educational environment and their academic needs. The Committee will sponsor and coordinate workshops and initiatives to positively influence the educational environment and educational outcomes of target students.</li>
    <li className="m-2">Develop parent agency and leadership to create a word-of-mouth invitation for other parents to join our meetings.</li>
    <li className="m-2">Create a support group for students to provide them with tools for academic awareness and success such as:
      <ol className="">
        <li className="m-2">
        --&gt; How to navigate through the US educational system
        </li>
        <li className="m-2">
        --&gt; Understanding ESUHSD graduation and A-G requirements
        </li>
        <li className="m-2">
        --&gt; College systems knowledge
        </li>
      </ol>
    </li>
    
   </ol>



  </div>
  <h1 className="text-4xl text-black  text-center m-8 my-12 font-bold">Meeting Dates</h1>
  <div className='text-lg w-3/4 mx-auto my-8 flex flex-row justify-around text-center'>
  <div>
  <h2 className="text-2xl text-main  text-center m-8 my-12 font-bold">Fall</h2>
  <ol className='list-disc mx-auto text-left'>
            <li className='marker:w-9'>August 29, 2025</li>
            <li>September 26, 2025</li>
            <li>October 24, 2025</li>
            <li>November 21, 2025</li>
            <li>December 19, 2025</li>
        </ol>
  </div>
<div>
        <h2 className="text-2xl text-main  text-center m-8 my-12 font-bold">Spring</h2>
  <ol className='list-disc mx-auto text-left'>
            <li className='marker:w-9'>January 23, 2026</li>
            <li>February 27, 2026</li>
            <li>March 27, 2026</li>
            <li>April 10, 2026</li>
            <li>May 15, 2026</li>
        </ol>
        </div>

  </div>
  <h1 className="text-4xl text-black  text-center m-8 my-12 font-bold">Objectives</h1>
  <div className='text-lg w-3/4 mx-auto my-8 text-center'>
  <ol className='list-disc mx-auto text-left'>
            <li className='marker:w-9'>Support Latino English Language Learners</li>
            <li>Organize Community Engagement</li>
            <li>Foster Parental Involvement</li>
            <li>Student Support</li>
        </ol>

  </div>
  <div className='bg-slate-300 p-8'>
  <h1 id="benefits" className="text-6xl text-main  text-center m-8 my-12 font-bold">Benefits</h1>
  <div className='flex flex-wrap w-3/4 mx-auto'>
    <div className='flex flex-col w-48 justify-start m-8'>
        <div className='text-6xl font-bold text-main item-start text-center'>1.</div>
        <div className='text-center text-xl m-8'>Collaboration amongst teachers and counselors</div>
    </div>
    <div className='flex flex-col w-48 justify-start m-8'>
        <div className='text-6xl font-bold text-main item-start bold text-center'>2.</div>
        <div className='text-center text-xl m-8'>Parent meetings</div>
    </div>
    <div className='flex flex-col w-48 justify-start m-8'>
        <div className='text-6xl font-bold text-main item-start bold text-center'>3.</div>
        <div className='text-center text-xl m-8'>Community service opportunities</div>
    </div>
    <div className='flex flex-col w-48 justify-start m-8'>
        <div className='text-6xl font-bold text-main item-start text-center'>4.</div>
        <div className='text-center text-xl m-8'>Field trips</div>
    </div>
    <div className='flex flex-col w-48 justify-start m-8'>
        <div className='text-6xl font-bold text-main text-center'>5.</div>
        <div className='text-center text-xl m-8'>Outside presenters</div>
    </div>

    
  </div>

  </div>
  
        <h1 id="staff" className="text-6xl text-main  text-center m-8 my-12 font-bold">Staff</h1>

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
                    <p>I am the Parent & Communications Involvement Specialist at Silver Creek High School. </p>
                    
                </div>
            </div>

            <div className="card bg-base-100 w-[27rem] m-4 shadow-xl">
                <figure>
                    <img
                    src="/loveday.png"
                    alt="Ms. Loveday" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Ms. Loveday</h2>
                    <p>My name is Brooke Loveday. I was born and raised in East San Jose. I attended community college while working, until I was able to transfer to San Jose State. That is where I earned both my bachelor's degree in English and my teaching credential. Dedicated to contributing to my community, I decided to teach English in ESUHSD. I was the first in my family to attend college. To further my ability to support students in need, I returned to school in 2022-2023 to earn a master's degree in Social-Emotional Learning and Development. I am honored and excited to be a part of the Latino Student Cohort. 

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

//who we are 
//benefits
//staff
