'use client'
import React from 'react'
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import people from './people';
import activities from './activities';

const DiaDeLosMuertos = () => {
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
        <h1 className="mb-5 md:text-5xl text-3xl font-bold">Dia De Los Muertos</h1>
        
      </div>
    </div>
  </div>

  <h1 className="text-6xl text-main  text-center m-8 my-12 font-bold">People</h1>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">

              {people.map((url, index)=>{
                  return <div key={`people-${index}`} className=' bg-black rounded-lg flex flex-col justify-center items-center'>
                  <img className="h-auto max-w-full rounded-lg" src={url} alt="" />
              </div>
              })}

          </div>


          <h1 className="text-6xl text-main  text-center m-8 my-12 font-bold">Activities</h1>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">

              {activities.map((url, index)=>{
                  return <div key={`activities-${index}`} className=' bg-black rounded-lg flex flex-col justify-center items-center'>
                  <img className="h-auto max-w-full rounded-lg" src={url} alt="" />
              </div>
              })}

          </div>
        </div>
    </div>
  )
}

export default DiaDeLosMuertos;