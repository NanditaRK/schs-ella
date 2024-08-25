'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import caretLeft from '../../../public/caret-left.png';
import caretRight from '../../../public/caret-right.png';
import { pdfjs, DocumentProps } from 'react-pdf';

// Dynamically import react-pdf components with SSR disabled
const Document = dynamic<DocumentProps>(() => import('react-pdf').then((mod) => mod.Document), {
  ssr: false,
});
const Page = dynamic(() => import('react-pdf').then((mod) => mod.Page), { ssr: false });

interface PdfViewerProps {
  file: string | File | null;
}

export default function PdfViewer({ file }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc =
      'https://unpkg.com/pdfjs-dist@4.4.168/legacy/build/pdf.worker.min.mjs';
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset: number) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => changePage(-1);
  const nextPage = () => changePage(1);

  return (
    <>
      <Document
        className="mx-auto m-2"
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={(error) => console.error('Error loading PDF document:', error)}
      >
        <Page className="rounded-box" width={280} scale={1.15} pageNumber={pageNumber} />
      </Document>
      <div className="mx-auto text-center mt-4">
        <p>
          Page {pageNumber} of {numPages || '--'}
        </p>
        <div className="flex justify-center space-x-4">
          <button
            className="btn rounded-full"
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            <Image src={caretLeft} width={10} height={10} alt="previous page" />
          </button>
          <button
            className="btn rounded-full"
            type="button"
            disabled={numPages === null || pageNumber >= numPages}
            onClick={nextPage}
          >
            <Image src={caretRight} width={10} height={10} alt="next page" />
          </button>
        </div>
      </div>
    </>
  );
}
