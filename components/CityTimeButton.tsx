'use client';
import { getCurrentCoordinate } from '@/api/accommodations/getCurrentTime';
import { useState } from 'react';

type CityTimeButtonProps = {
  city: string;
  latitude: number;
  longitude: number;
};

type TimeData = {
  time: string;
  date: string;
  timeZone: string;
};

export const CityTimeButton = ({
  city,
  latitude,
  longitude
}: CityTimeButtonProps) => {
  const [timeData, setTimeData] = useState<TimeData>({
    time: '',
    date: '',
    timeZone: ''
  });
  const [loading, setLoading] = useState(false);

  const fetchTime = async () => {
    setLoading(true);
    try {
      const data = await getCurrentCoordinate(latitude, longitude);
      setTimeData(data);
    } catch (error) {
      throw new Error('Failed to fetch time');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-4">
      <button
        onClick={fetchTime}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        disabled={loading}>
        {loading ? 'Loading...' : `Get time in ${city}`}
      </button>
      {timeData && (
        <div className="mt-2">
          <p>Time: {timeData.time}</p>
          <p>Date: {timeData.date}</p>
          <p>Timezone: {timeData.timeZone}</p>
        </div>
      )}
    </div>
  );
};
