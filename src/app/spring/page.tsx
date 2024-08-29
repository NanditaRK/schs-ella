'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import dynamic from 'next/dynamic';

// Dynamically import PdfViewer with SSR disabled
const PdfViewer = dynamic(() => import('../components/PdfViewer'), { ssr: false });

const Spring = () => {
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
              <h2 className="card-title">January 24, 2025</h2>
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
              <h2 className="card-title">February 28, 2025</h2>
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
              <h2 className="card-title">March 28, 2025</h2>
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
              <h2 className="card-title">April 11, 2025</h2>
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
              <h2 className="card-title">May 16, 2025</h2>
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
