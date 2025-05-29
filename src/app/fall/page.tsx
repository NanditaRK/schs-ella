'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import dynamic from 'next/dynamic';
import {supabase} from '@/app/utils/supabase';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Dynamically import PdfViewer with SSR disabled
const PdfViewer = dynamic(() => import('../components/PdfViewer'), { ssr: false });

type Presentation = {
  id: number;
  title: string;
  date: string;
  file_url: string;
  folder: string;
};

const Fall = () => {
  const [presentations, setPresentations] = useState<Presentation[]>([]);

  useEffect(() => {
    const fetchFallPresentations = async () => {
      const { data, error } = await supabase.from('presentations').select('*').eq('folder', 'fall');

      if (error) {
        console.error('Error fetching presentations:', error);
      } else {
        setPresentations(data || []);
      }
    };

    fetchFallPresentations();
  }, []);

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
      const unwantedButtons = document.getElementsByClassName(
        'VIpgJd-ZVi9od-xl07Ob-lTBxed'
      );
      if (unwantedButtons.length > 1) {
        for (let i = 1; i < unwantedButtons.length; i++) {
          unwantedButtons[i].remove();
        }
      }
    };

    // Load the Google Translate script
    addGoogleTranslateScript();

    const interval = setInterval(() => {
      removeUnwantedTranslateElements();
    }, 1000);

    setTimeout(() => clearInterval(interval), 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#f0f4fc] min-h-screen">
      <Navbar />
      <div className="my-0">
        <div
          className="hero min-h-[50vh]"
          style={{
            backgroundImage: "url(/bg-ella-new.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 md:text-5xl text-3xl font-bold">Fall Presentations</h1>
            </div>
          </div>
        </div>

        <div className="flex justify-evenly flex-wrap my-0">
          {presentations.map((presentation) => (
            <div key={presentation.id} className="card h-fit bg-base-100 my-8 w-96 shadow-xl">
              <PdfViewer file={presentation.file_url} />
              <div className="card-body">
                <h1 className="card-title font-bold text-main">{presentation.title}</h1>
                <h2 className="card-title text-base font-normal">
  {new Date(presentation.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}
</h2>                <div className="card-actions justify-end">
                  <a target="_blank" href={presentation.file_url} rel="noopener noreferrer">
                    <button className="btn bg-main text-white rounded-box">View</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fall;
