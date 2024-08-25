'use client'

import React from 'react'
import Navbar from '../components/Navbar';
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf';
import PdfViewer from '../components/PdfViewer';

const Fall = () => {
    
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
    

  return (
    <div className='bg-[#f0f4fc] min-h-screen'>
        <Navbar />
        <div className='my-0'>
        <div
  className="hero min-h-[50vh]"
  style={{
    backgroundImage: "url(/ella-bg-tint-black.png)",
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

export default Fall;