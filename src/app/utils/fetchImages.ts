import { supabase } from '@/app/utils/supabase';

const SUPABASE_URL_BASE = 'https://muuyeyfibeyxtjqfozqd.supabase.co';

export const fetchImagesForEvent = async (eventId: string) => {
  try {
    const { data, error } = await supabase
      .from('images')
      .select('*')
      .eq('event_id', eventId);

    if (error) {
      console.error('Error fetching images:', error);
      return [];
    }

    if (!data || data.length === 0) {
      console.warn('No images found for the event:', eventId);
      return [];
    }

    // Log the data for debugging
    console.log('Fetched data:', data);

    // Map data to generate full URLs using the `url` field
    return data.map((image) => {
      if (!image.url) {
        console.warn('Missing URL for image:', image);
        return null; // Skip images with missing URL
      }

      const fullUrl = `${image.url}`;
      console.log('Generated Image URL:', fullUrl);
      return { ...image, fullUrl };
    }).filter(Boolean); // Remove null entries
  } catch (err) {
    console.error('Unexpected error fetching images:', err);
    return [];
  }
};
