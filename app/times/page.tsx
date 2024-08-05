import { CityTimeButton } from '@/components/CityTimeButton';

const capitals = [
  { city: 'Seoul', latitude: 37.5665, longitude: 126.978 },
  { city: 'Tokyo', latitude: 35.6762, longitude: 139.6503 },
  { city: 'London', latitude: 51.5074, longitude: -0.1278 },
  { city: 'New York', latitude: 40.7128, longitude: -74.006 },
  { city: 'Sydney', latitude: -33.8688, longitude: 151.2093 }
];
export default function TimePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Capital City Times</h1>
      {capitals.map(capital => (
        <CityTimeButton
          key={capital.city}
          city={capital.city}
          latitude={capital.latitude}
          longitude={capital.longitude}
        />
      ))}
    </div>
  );
}
