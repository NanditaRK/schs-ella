'use client'
import React from 'react'
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
import people from './people';
import activities from './activities';

const Diadelosaccionesdegracias = () => {
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
        <h1 className="mb-5 md:text-5xl text-3xl font-bold">Dia De Los Acciones de Gracias</h1>
        
      </div>
    </div>
  </div>

  <h1 className="text-6xl text-main  text-center m-8 my-12 font-bold">People</h1>
  <div className="carousel bg-main rounded-3xl py-4 mx-2 w-fit">
    {people.map((url, index)=>{
      console.log(index)
      return <div key={`people-carousel-${index}`} id={"peopleSlide"+(index+1)}className="carousel-item relative w-full">
      <img
        src={url}
        className=" mx-auto h-[48rem]" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href={"#peopleSlide"+index} className="btn btn-circle">❮</a>
        <a href={"#peopleSlide"+(index+2)} className="btn btn-circle">❯</a>
      </div>
    </div>
    })}
    
  

  
  </div>
  <div className='flex flex-col lg:flex-row'>
<img className='m-2 w-36 lg:h-36 lg:w-auto' src='/diadelosaccionesdegracias/people.jpg'/>
  
  <blockquote className="p-4 w-3/4 mx-auto my-4 border-s-8 border-main bg-blue-100 dark:border-gray-500 dark:bg-gray-800">
    <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">"Each person present contributes a unique hue to the Thanksgiving celebration, creating a vibrant and unforgettable mosaic of humanity. Together, they paint a picture of unity, compassion, and the enduring beauty of human connection."

</p>
</blockquote>
<img className='m-2 w-36 lg:h-36 lg:w-auto ml-auto' src='/diadelosaccionesdegracias/cornucopia.webp' />

</div>


         


          <h1 className="text-6xl text-main  text-center m-8 my-12 font-bold">Activities</h1>
          <div className="carousel bg-main rounded-3xl py-4 mx-2 w-fit">
    {activities.map((url, index)=>{
      console.log(index)
      return <div key={`activities-carousel-${index}`} id={"activitiesSlide"+(index+1)}className="carousel-item relative w-full">
      <img
        src={url}
        className=" mx-auto h-[48rem]" />
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href={"#activitiesSlide"+index} className="btn btn-circle">❮</a>
        <a href={"#activitiesSlide"+(index+2)} className="btn btn-circle">❯</a>
      </div>
    </div>
    })}
    
  

  
  </div>
  <div className='flex flex-col lg:flex-row'>
<img className='w-36 lg:w-auto lg:h-36 m-2' src='/diadelosaccionesdegracias/thanks.png'/>
  
  <blockquote className="p-4 w-3/4 mx-auto my-4 border-s-8 border-main bg-blue-100 dark:border-gray-500 dark:bg-gray-800">
    <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">"During Thanksgiving, the creation of a "Tree of Thanks" became a vibrant symbol of gratitude. Together, we celebrated the spirit of the season through this meaningful act, fostering a sense of unity and joy."

</p>
</blockquote>
<img className='m-2 w-36 lg:h-36 lg:w-auto ml-auto' src='/diadelosaccionesdegracias/turkey.png' />

</div>


          
        </div>
    </div>
  )
}

export default Diadelosaccionesdegracias;