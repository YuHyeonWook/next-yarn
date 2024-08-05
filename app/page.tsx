import { getCurrentZone } from '@/api/accommodations/getCurrentTime';

export default async function Home() {
  const timezone = 'America/New_York';
  const timeData = await getCurrentZone(timezone);

  return (
    <>
      <h1>Current Time</h1>
      <p>Time: {timeData.time}</p>
      <p>Date: {timeData.date}</p>
      <p>Timezone: {timeData.timeZone}</p>
    </>
  );
}
