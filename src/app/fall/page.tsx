'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import dynamic from 'next/dynamic';

// Dynamically import PdfViewer with SSR disabled
const PdfViewer = dynamic(() => import('../components/PdfViewer'), { ssr: false });

const Fall = () => {
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
              <h1 className="mb-5 md:text-5xl text-3xl font-bold">Fall Presentations</h1>
            </div>
          </div>
        </div>

        <div className='flex justify-evenly flex-wrap my-0'>
          {/* Card 1 */}
          <div className="card h-fit bg-base-100 my-8 w-96 shadow-xl">
            <PdfViewer file={"8_30 LPC meeting.pdf"} />
            <div className="card-body">
              <h2 className="card-title">August 30, 2024</h2>
              <div className="card-actions justify-end">
                <a target="_blank" href='https://docs.google.com/presentation/d/1CoxdSOmOlmeo9cmJoAsdw6vkEreZmHHz7ZMRBJUb3z0/edit?usp=sharing'>
                  <button className="btn bg-main text-white rounded-box">View</button>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card h-fit bg-base-100 my-8 w-96 shadow-xl">
            <PdfViewer file={"checkback.pdf"} />
            <div className="card-body">
              <h2 className="card-title">September 27, 2024</h2>
              <div className="card-actions justify-end">
                <a target="_blank" href='#'>
                  <button className="btn bg-main text-white rounded-box">View</button>
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card h-fit bg-base-100 my-8 w-96 shadow-xl">
            <PdfViewer file={"checkback.pdf"} />
            <div className="card-body">
              <h2 className="card-title">October 25, 2024</h2>
              <div className="card-actions justify-end">
                <a target="_blank" href='#'>
                  <button className="btn bg-main text-white rounded-box">View</button>
                </a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card h-fit bg-base-100 my-8 w-96 shadow-xl">
            <PdfViewer file={"checkback.pdf"} />
            <div className="card-body">
              <h2 className="card-title">November 22, 2024</h2>
              <div className="card-actions justify-end">
                <a target="_blank" href='#'>
                  <button className="btn bg-main text-white rounded-box">View</button>
                </a>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="card h-fit bg-base-100 my-8 w-96 shadow-xl">
            <PdfViewer file={"checkback.pdf"} />
            <div className="card-body">
              <h2 className="card-title">December 20, 2024</h2>
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
  );
}

export default Fall;
