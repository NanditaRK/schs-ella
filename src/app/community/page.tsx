'use client'
import React from 'react'
import Navbar from '../components/Navbar';
import { useEffect } from 'react';
const Community = () => {
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
      <h1 className="mb-5 md:text-5xl text-3xl font-bold">Community Resources</h1>
      
    </div>
  </div>
</div>
            
            <div className='flex justify-evenly flex-wrap my-0'>

        
            <div className="card bg-base-100 w-96 my-8 shadow-xl">
                <figure className="px-4 pt-4">
                    <img
                    src="secondharvest.svg"
                    alt="Shoes"
                    className="rounded-xl h-48" />
                </figure>
                <div className="card-body items-center justify-end text-center">
                    <h2 className="card-title">Second Harvest Food Bank</h2>
                    <p>Provides free fresh groceries or ready to-go meals in Santa Clara county at several locations at different day/times that fit your schedule.</p>
                    <div className="card-actions">
                    <a target="_blank" href="https://www.shfb.org/get-food/"><button className="btn bg-main rounded-box text-white m-2">Learn more</button></a>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 w-96 my-8 shadow-xl">
                <figure className="px-4 pt-4">
                    <img
                    src="siren.png"
                    alt="Shoes"
                    className="rounded-xl h-48" />
                </figure>
                <div className="card-body items-center justify-end text-center">
                    <h2 className="card-title">SIREN</h2>
                    <p>
                        An organization that empowers immigrants and refugees in Santa Clara county with education, community organization, legal services, etc. 
                    </p>
                    <div className="card-actions">
                    <a target="_blank" href="https://www.sirenimmigrantrights.org/"><button className="btn bg-main rounded-box text-white m-2">Learn more</button></a>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 w-96 my-8 shadow-xl">
                <figure className="px-4 pt-4">
                    <img
                    src="ccoscc.png"
                    alt="Shoes"
                    className="rounded-xl h-48" />
                </figure>
                <div className="card-body items-center justify-end text-center">
                    <h2 className="card-title">Catholic Charities of Santa Clara</h2>
                    <p>Advocates for  people of all backgrounds and beliefs, especially those who are financial instability. </p>
                    <div className="card-actions">
                    <a target="_blank" href="https://www.ccscc.org/?locale=en"><button className="btn bg-main rounded-box text-white m-2">Learn more</button></a>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 w-96 my-8 shadow-xl">
                <figure className="px-4 pt-4">
                    <img
                    src="bwc.jpg"
                    alt="Shoes"
                    className="rounded-xl h-48" />
                </figure>
                <div className="card-body items-center justify-end text-center">
                    <h2 className="card-title">Bill Wilson Center</h2>
                    <p>An organization that provides support for families and individuals who are counseling, crisis, housing, foster youth, and support services. </p>
                    <div className="card-actions">
                    <a target="_blank" href="https://www.billwilsoncenter.org/"><button className="btn bg-main rounded-box text-white m-2">Learn more</button></a>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 w-96 my-8 shadow-xl">
                <figure className="px-4 pt-4">
                    <img
                    src="calfresh.png"
                    alt="Shoes"
                    className="rounded-xl h-48" />
                </figure>
                <div className="card-body items-center justify-end text-center">
                    <h2 className="card-title">Cal Fresh</h2>
                    <p>A program in California for low-income individuals who meet elegibility and want to receive support with groceries</p>
                    <div className="card-actions">
                    <a target="_blank" href="https://www.cdss.ca.gov/calfresh"><button className="btn bg-main rounded-box text-white m-2">Learn more</button></a>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 w-96 my-8 shadow-xl">
                <figure className="px-4 pt-4">
                    <img
                    src="pge.png"
                    alt="Shoes"
                    className="rounded-xl h-48" />
                </figure>
                <div className="card-body items-center justify-end text-center">
                    <h2 className="card-title">PG&E FERA</h2>
                    <p>A program that offers a 18% discount of your PG&E bill if you meet eligibility requirements</p>
                    <div className="card-actions">
                    <a target="_blank" href="https://www.pge.com/en/account/billing-and-assistance/financial-assistance/family-electric-rate-assistance-program-fera.html"><button className="btn bg-main rounded-box text-white m-2">Learn more</button></a>
                    </div>
                </div>
            </div>

            

            
            </div>
        </div>
    </div>
  )
}

export default Community;