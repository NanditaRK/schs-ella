'use client'
import React from 'react'
import { useEffect } from 'react';
import Navbar from '../components/Navbar';

const Testimonials = () => {
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
      <h1 className="mb-5 md:text-5xl text-3xl font-bold">Latino Parent Coalition</h1>
      
    </div>
  </div>
</div>
            
            <div className='flex flex-col justify-evenly flex-wrap my-0'>

        

            
            <div className='flex justify-evenly flex-wrap m-8 my-0'>
            <div className="card bg-base-100 w-[27rem] m-4 shadow-xl">
                <figure>
                    <img
                    src="/presidentes.png"
                    alt="Presidents" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Presidents</h2>
                    <p>Adriana Partida y Claudia Lopez

                    </p>
                    <div className='flex'><img className='m-2' src='/mail.svg' /><a className='m-2' href='mailto:adi.flaca@yahoo.com'> adi.flaca@yahoo.com</a> </div>
                    <div className='flex'><img className='m-2' src='/mail.svg' /><a className='m-2' href='mailto:claulopez622@gmail.com'> claulopez622@gmail.com</a> </div>
                    
                </div>
            </div>

            <div className="card bg-base-100 w-[27rem] m-4 shadow-xl">
                <figure>
                    <img
                    src="/vicepresidentes.png"
                    alt="Vice Presidents" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Vice Presidents</h2>
                    <p>Elva Rojas y Mayra Muñoz</p>
                    <div className='flex'><img className='m-2' src='/mail.svg' /><a className='m-2' href='mailto:elva.e72@gmail.com'> elva.e72@gmail.com</a> </div>
                    <div className='flex'><img className='m-2' src='/mail.svg' /><a className='m-2' href='mailto:mayrasoreque@icloud.com'> mayrasoreque@icloud.com</a> </div>

                    
                </div>
            </div>

            <div className="card bg-base-100 w-[27rem] m-4 shadow-xl">
                <figure>
                    <img
                    className=''
                    src="/tesorores.png"
                    alt="Treasurers" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Treasurers</h2>
                    <p>Marisol Escarcega y Señor Leal</p>
                    <div className='flex'><img className='m-2' src='/mail.svg' /><a className='m-2' href='mailto:'> </a> </div>
                    <div className='flex'><img className='m-2' src='/mail.svg' /><a className='m-2' href='mailto:lealm@esuhsd.org'>lealm@esuhsd.org </a> </div>

                    
                </div>
            </div>


            <div className="card bg-base-100 w-[27rem] m-4 shadow-xl">
                <figure>
                    <img
                    src="/secretarios.png"
                    alt="Secretaries" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Secretaries</h2>
                    <p>Grace Gutierrez y Señor Camacho </p>
                    <div className='flex'><img className='m-2' src='/mail.svg' /><a className='m-2' href='mailto:'> </a> </div>
                    <div className='flex'><img className='m-2' src='/mail.svg' /><a className='m-2' href='mailto:camachoa@esuhsd.org'>camachoa@esuhsd.org </a> </div>

                    
                </div>
            </div>

            <div className="card bg-base-100 w-[27rem] m-4 shadow-xl">
                <figure>
                    <img
                    src="/representantes.png"
                    alt="Representatives" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Representatives</h2>
                    <p>Monica Argumedo,
Melvis Lopez,
Rosario Estrada, and
Evangelina Rivera


</p>
<div className='flex'><img className='m-2' src='/mail.svg' /><a className='m-2' href='mailto:'> </a> </div>
<div className='flex'><img className='m-2' src='/mail.svg' /><a className='m-2' href='mailto:'> </a> </div>
<div className='flex'><img className='m-2' src='/mail.svg' /><a className='m-2' href='mailto:'> </a> </div>
<div className='flex'><img className='m-2' src='/mail.svg' /><a className='m-2' href='mailto:'> </a> </div>


                    
                </div>
            </div>

            
        </div>


            
            </div>
        </div>
    </div>
  )
}

export default Testimonials;