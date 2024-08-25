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
      <h1 className="mb-5 md:text-5xl text-3xl font-bold">Fall Presentations</h1>
      
    </div>
  </div>
</div>
            
            <div className='flex justify-evenly flex-wrap my-0'>

                <div className="card h-fit bg-base-100 my-8 w-96 shadow-xl">
                <PdfViewer file={"test.pdf"} />
                    
                    <div className="card-body">
                        <h2 className="card-title">September 22, 2023</h2>
                        <div className="card-actions justify-end">
                        <a target="_blank" href='https://drive.google.com/file/d/1Mov1ibGIWzgIOotjBpOC9jdr5fK1E--o/preview'><button className="btn bg-main text-white rounded-box">View</button></a>
                        </div>
                    </div>
                </div>

                <div className="card h-fit bg-base-100 my-8 w-96 shadow-xl">
                <PdfViewer file={"10_20 Latino Parent Meeting.pdf"} />
                    
                    <div className="card-body">
                        <h2 className="card-title">October 20, 2023</h2>
                        <div className="card-actions justify-end">
                        <a target="_blank" href='https://docs.google.com/presentation/d/1sp__isk4xsw_0wRVrDgTgKJo0WbYXBJeQuEJjdOq54Q/edit'><button className="btn bg-main text-white rounded-box">View</button></a>
                        </div>
                    </div>
                </div>
                
                <div className="card h-fit bg-base-100 my-8 w-96 shadow-xl">
                <PdfViewer file={"11_17 Latino Parent Meeting.pdf"} />
                    
                    <div className="card-body">
                        <h2 className="card-title">November 17, 2023</h2>
                        <div className="card-actions justify-end">
                        <a target="_blank" href='https://docs.google.com/presentation/d/1FkNS-36diDPjGmLz8Tmt3jDoM9XyTyw_OE8ICG-aclI/edit'><button className="btn bg-main text-white rounded-box">View</button></a>
                        </div>
                    </div>
                </div>

                <div className="card h-fit bg-base-100 my-8 w-96 shadow-xl">
                <PdfViewer file={"12_15 Latino Parent Meeting.pdf"} />
                    
                    <div className="card-body">
                        <h2 className="card-title">December 15, 2023</h2>
                        <div className="card-actions justify-end">
                        <a target="_blank" href='https://docs.google.com/presentation/d/110wecOwZHL3ZRJznFnP0WW-mBe0PYuB4RRimAXOqPx4/edit'><button className="btn bg-main text-white rounded-box">View</button></a>
                        </div>
                    </div>
                </div>

            
            </div>
        </div>
    </div>
  )
}

export default Fall;