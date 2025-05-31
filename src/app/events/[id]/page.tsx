'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/app/components/Navbar';
import { fetchEventData, EventData } from '@/app/utils/fetchEvent';
import { fetchImagesForEvent } from '@/app/utils/fetchImages';
import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type EventProps = {
  params: Promise<{ id: string }>;
};

// Custom Arrow Components with absolute positioning
const CustomPrevArrow = ({ className, style, onClick }: any) => (
  <button
    className="absolute top-1/2 left-2 z-20 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
    style={{ ...style }}
    onClick={onClick}
    aria-label="Previous Slide"
  >
    <ChevronLeft size={24} className="text-gray-700" />
  </button>
);

const CustomNextArrow = ({ className, style, onClick }: any) => (
  <button
    className="absolute top-1/2 right-2 z-20 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
    style={{ ...style }}
    onClick={onClick}
    aria-label="Next Slide"
  >
    <ChevronRight size={24} className="text-gray-700" />
  </button>
);

const EventPage = ({ params }: EventProps) => {
  const [id, setId] = useState<string | null>(null);
  const [event, setEvent] = useState<EventData | null>(null);
  const [images, setImages] = useState<{ fullUrl: string }[]>([]);
  const [viewMode, setViewMode] = useState<'carousel' | 'gallery'>('carousel');

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    };
    fetchParams();
  }, [params]);

  useEffect(() => {
    if (!id) return;

    const initializePage = async () => {
      try {
        const fetchedEvent = await fetchEventData(id);
        setEvent(fetchedEvent);

        const fetchedImages = await fetchImagesForEvent(id);
        setImages(fetchedImages);
      } catch (error) {
        console.error('Error initializing page:', error);
      }
    };

    initializePage();
  }, [id]);

  if (!id || !event) {
    return <div className="p-8">Loading...</div>;
  }

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
              <h1 className="mb-5 md:text-5xl text-3xl font-bold">{event.name}</h1>
            </div>
          </div>
        </div>

        {/* Toggle View */}
        <div className="flex justify-center my-4">
          <button
            onClick={() => setViewMode('carousel')}
            className={`px-4 py-2 mr-2 rounded ${
              viewMode === 'carousel' ? 'bg-main text-white' : 'bg-gray-300'
            }`}
          >
            Carousel
          </button>
          <button
            onClick={() => setViewMode('gallery')}
            className={`px-4 py-2 rounded ${
              viewMode === 'gallery' ? 'bg-main text-white' : 'bg-gray-300'
            }`}
          >
            Gallery
          </button>
        </div>

        {/* Display Images */}
        <div className="p-4 relative">
          {viewMode === 'carousel' && (
            <Carousel
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            prevArrow={<CustomPrevArrow />}
            nextArrow={<CustomNextArrow />}
            className="relative"
            adaptiveHeight={false} // important! disable adaptive height
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="flex justify-center bg-main rounded-lg items-center"
                style={{ height: '500px' }} // fix height to carousel height
              >
                <img
                  src={img.fullUrl}
                  alt={`Event Image ${index + 1}`}
                  className="max-h-[500px] mx-auto max-w-full"
                />
              </div>
            ))}
          </Carousel>
          )}

          {viewMode === 'gallery' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {images.map((img, index) => (
                <div key={index} className="flex bg-main rounded-lg justify-center">
                  <img
                    src={img.fullUrl}
                    alt={`Event Image ${index + 1}`}
                    className="max-h-[300px] object-cover rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
