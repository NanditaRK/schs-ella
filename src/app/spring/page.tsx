'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
// Dynamically import PdfViewer with SSR disabled
const PdfViewer = dynamic(() => import('../components/PdfViewer'), { ssr: false });

const Spring = () => {
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
            includedLanguages: 'es, en',
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
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 md:text-5xl text-3xl font-bold">Spring Presentations</h1>
            </div>
          </div>
        </div>

        <div className='flex justify-evenly flex-wrap my-0'>
          {/* Card 1 */}
          <div className="card h-fit bg-base-100 w-96 my-8 shadow-xl">
            <PdfViewer file={"checkback.pdf"} />
            <div className="card-body">
            <h1 className="card-title text-main">How to Read a Transcript</h1>
            <h2 className="card-title text-base font-normal">January 24, 2024</h2>
              <div className="card-actions justify-end">
                <a target="_blank" href='#'>
                  <button className="btn bg-main text-white rounded-box">View</button>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card h-fit bg-base-100 w-96 my-8 shadow-xl">
            <PdfViewer file={"checkback.pdf"} />
            <div className="card-body">
            <h1 className="card-title text-main">Learning Strategies</h1>
            <h2 className="card-title text-base font-normal">February 28, 2024</h2>
              <div className="card-actions justify-end">
                <a target="_blank" href='#'>
                  <button className="btn bg-main text-white rounded-box">View</button>
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card h-fit bg-base-100 w-96 my-8 shadow-xl">
            <PdfViewer file={"checkback.pdf"} />
            <div className="card-body">
            <h1 className="card-title text-main">How to Get Ready For the Summer</h1>
            <h2 className="card-title text-base font-normal">March 28, 2024</h2>
              <div className="card-actions justify-end">
                <a target="_blank" href='#'>
                  <button className="btn bg-main text-white rounded-box">View</button>
                </a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card h-fit bg-base-100 w-96 my-8 shadow-xl">
            <PdfViewer file={"checkback.pdf"} />
            <div className="card-body">
            <h1 className="card-title text-main">Let's Talk About Finals</h1>
            <h2 className="card-title text-base font-normal">April 11, 2024</h2>
              <div className="card-actions justify-end">
                <a target="_blank" href='#'>
                  <button className="btn bg-main text-white rounded-box">View</button>
                </a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card h-fit bg-base-100 w-96 my-8 shadow-xl">
            <PdfViewer file={"checkback.pdf"} />
            <div className="card-body">
            <h1 className="card-title text-main">Parent & Student Graduation</h1>
            <h2 className="card-title text-base font-normal">May 16, 2024</h2>
              <div className="card-actions justify-end">
                <a target="_blank" href='#'>
                  <button className="btn bg-main text-white rounded-box">View</button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Spring;
