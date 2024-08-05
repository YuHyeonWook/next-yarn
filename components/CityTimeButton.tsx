'use client';
import { getCurrentCoordinate } from '@/api/time/getCurrentTime';
import { useQuery } from '@tanstack/react-query';
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
  const [enabled, setEnabled] = useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['cityTime', latitude, longitude],
    queryFn: () => getCurrentCoordinate(latitude, longitude),
    enabled,
    staleTime: 1000 * 60
  });

  const handleClick = () => {
    setEnabled(true);
  };

  return (
    <div className="my-4">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        disabled={isLoading}>
        {isLoading ? 'Loading...' : `Get time in ${city}`}
      </button>
      {data && (
        <div className="mt-2">
          <p>Time: {data.time}</p>
          <p>Date: {data.date}</p>
          <p>Timezone: {data.timeZone}</p>
        </div>
      )}
      {isError && <p className="text-red-500">Error fetching data</p>}
    </div>
  );
};
