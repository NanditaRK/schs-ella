import { supabase } from '@/app/utils/supabase';

export type EventData = {
  id: string;
  name: string;
  [key: string]: any; // Add other fields as needed
};

export const fetchEventData = async (id: string): Promise<EventData | null> => {
  const { data: event, error } = await supabase
    .from('events')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching event:', error);
    return null;
  }

  return event;
};
