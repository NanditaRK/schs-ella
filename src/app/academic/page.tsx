'use client'
import React from 'react'
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
const Academic = () => {
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
    <div className='bg-[#f0f4fc] min-h-screen'>
        <Navbar />
        <div className='my-0'>
        <div
  className="hero min-h-[50vh]"
  style={{
    backgroundImage: "url(/bg-ella-new.png)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 md:text-5xl text-3xl font-bold">Academic Resources</h1>
      
    </div>
  </div>
</div>
            
            <div className='flex justify-evenly flex-wrap my-0'>

            <div className="card bg-base-100 w-96 my-8 shadow-xl">
                <figure className="px-4 pt-4">
                    <img
                    src="counselors.png"
                    alt="Shoes"
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center justify-end text-center">
                    <h2 className="card-title">Counselors/Consejerxs</h2>
                    
                    <div className="card-actions">
                    <a target="_blank" href="https://silvercreekhigh.esuhsd.org/counseling/meet-your-counselors"><button className="btn bg-main rounded-box text-white">Learn more</button></a>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 w-96 my-8 shadow-xl">
                <figure className="px-4 pt-4">
                    <img
                    src="assets_final.png"
                    alt="Shoes"
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center justify-end text-center">
                    <h2 className="card-title">ASSETS</h2>
                    
                    <div className="card-actions">
                    <a target="_blank" href="https://silvercreekhigh.esuhsd.org/about-sc/assets-program"><button className="btn bg-main rounded-box text-white">Learn more</button></a>                    </div>
                </div>
            </div>

            <div className="card bg-base-100 w-96 my-8 shadow-xl">
                <figure className="px-4 pt-4">
                    <img
                    src="paper.webp"
                    alt="Shoes"
                    className="rounded-xl" />
                </figure>
                <div className="card-body items-center justify-end text-center">
                    <h2 className="card-title">Paper</h2>
                    
                    <div className="card-actions">
                    <a target="_blank" href="https://silvercreek.esuhsd.org/Student--Parent-Resources/Tutoring-via-Paper/"><button className="btn bg-main rounded-box text-white">Learn more</button></a>                    </div>
                </div>
            </div>

            

            
            </div>
        </div>
    </div>
  )
}

export default Academic;