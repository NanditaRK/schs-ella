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
      <h1 className="mb-5 md:text-5xl text-3xl font-bold">Spring Presentations</h1>
      
    </div>
  </div>
</div>
            
            <div className='flex justify-evenly flex-wrap my-0'>

                <div className="card h-fit bg-base-100 w-96 my-8 shadow-xl">
                <PdfViewer file={"SCHS Transcript Analysis _ Course Scheduling STUDENTS.pdf"} />
                    
                    <div className="card-body">
                        <h2 className="card-title">January 26, 2024</h2>
                        <div className="card-actions justify-end">
                        <a target="_blank" href='https://docs.google.com/presentation/d/1zcmt3UHMFTqWxz-OIkaGegtJGgfbwpSRVxBbKbv1CG4/edit#slide=id.g266d14d21ab_0_5'><button className="btn bg-main text-white rounded-box">View</button></a>
                        </div>
                    </div>
                </div>

                <div className="card h-fit bg-base-100 w-96 my-8 shadow-xl">
                <PdfViewer file={"2_16LPC  2024.pdf"} />
                    
                    <div className="card-body">
                        <h2 className="card-title">February 16, 2024</h2>
                        <div className="card-actions justify-end">
                        <a target="_blank" href='https://docs.google.com/presentation/d/1sEgbHe00zybFKkRbUIm4KDIWCteq6uhmHY-1jmMwiBk/edit#slide=id.p1'><button className="btn bg-main text-white rounded-box">View</button></a>
                        </div>
                    </div>
                </div>
                
                <div className="card h-fit bg-base-100 w-96 my-8 shadow-xl">
                <PdfViewer file={"4_26 Latino Parent Presentation.pdf"} />
                    
                    <div className="card-body">
                        <h2 className="card-title">April 26, 2024</h2>
                        <div className="card-actions justify-end">
                        <a target="_blank" href='https://docs.google.com/presentation/d/13xZSfHT5cNWYiyk4tN8rf3ko1kJ61vX8PEwbpMt9py8/edit#slide=id.ga073618e60_0_16'><button className="btn bg-main text-white rounded-box">View</button></a>
                        </div>
                    </div>
                </div>

                <div className="card h-fit bg-base-100 w-96 my-8 shadow-xl">
                <PdfViewer file={"17 de mayo Junta de padres latinos.pdf"} />
                    
                    <div className="card-body">
                        <h2 className="card-title">May 17, 2024</h2>
                        <div className="card-actions justify-end">
                        <a target="_blank" href='https://docs.google.com/presentation/d/1PAE0EV-nJcA457mIw0TQtZWWakdjfJz0OkNkVHRk7-4/edit'><button className="btn bg-main text-white rounded-box">View</button></a>
                        </div>
                    </div>
                </div>

            
            </div>
        </div>
    </div>
  )
}

export default Fall;