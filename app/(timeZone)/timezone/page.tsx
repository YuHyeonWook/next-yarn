'use client';
import { getTimeZone } from '@/api/time/getTimeZone';
import { useQuery } from '@tanstack/react-query';

export default function timeZonePage() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['timeZone'],
    queryFn: () => getTimeZone(),
    staleTime: 1000 * 60
  });

  return (
    <>
      <h1>timeZone</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching data</p>}
      {data && (
        <ul>
          {data.map((country: string) => (
            <li key={country}>{country}</li>
          ))}
        </ul>
      )}
    </>
  );
}
