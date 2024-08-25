import Image from 'next/image';
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import caretLeft from '../../../public/caret-left.png';
import caretRight from '../../../public/caret-right.png'
interface PdfViewerProps {
  file: string | File | null;
}

export default function PdfViewer({ file }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset: number) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

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
      <div className='mx-auto'>
        <p className='text-center'>
          Page {pageNumber} of {numPages || '--'}
        </p>
        <button
            className='btn rounded-full'
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          <Image src={caretLeft} width={10} height={10} alt='previous page' />
        </button>
        <button
          className='btn rounded-full'
          type="button"
          disabled={numPages === null || pageNumber >= numPages}
          onClick={nextPage}
        >
         <Image src={caretRight} width={10} height={10} alt='next page' />
        </button>
      </div>
    </>
  );
}
