import { getCurrentCoordinate } from '@/api/accommodations/getCurrentTime';

export default async function Coordinate() {
  const latitude = 38.9;
  const longitude = -77.03;
  const coordinateData = await getCurrentCoordinate(latitude, longitude);
  console.log(coordinateData);
  return (
    <>
      <h1>Coordinate</h1>
      <h1>Current Time by Coordinate</h1>
      <p>Time: {coordinateData.time}</p>
      <p>Date: {coordinateData.date}</p>
      <p>Timezone: {coordinateData.timeZone}</p>
    </>
  );
}
