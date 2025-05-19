'use client'
import React from 'react'
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import images from './images';
const Graduacion = () => {
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
        <h1 className="mb-5 md:text-5xl text-3xl font-bold">Graduación de padres</h1>
       
        
      </div>
      
    </div>
   
  </div>
  
  <div className='flex grow flex-col justify-center wrap'>
      <div className='bg-main flex m-4 p-4 justify-center grow wrap '>
<video src='graduaciondelospadres/IMG_4666.mov' width="750" height="500" controls>
     </video>
 </div>
        </div>
   
 {images.map((url:string, index:number)=>{
            return (
                <div className='bg-main flex m-4 p-4 justify-center grow wrap '> 
                    <img className='' src={url}/>
                </div>
            
        )
        })}

      
         


  

  
</div>
</div>
  
  )
}

export default Graduacion;