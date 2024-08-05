import { getCurrentZone } from '@/api/accommodations/getCurrentTime';
import Link from 'next/link';

export default async function Home() {
  const timezone = 'America/New_York';
  const timeData = await getCurrentZone(timezone);

  return (
    <>
      <h1>Current Time</h1>
      <p>Time: {timeData.time}</p>
      <p>Date: {timeData.date}</p>
      <p>Timezone: {timeData.timeZone}</p>
      <button className="border rounded bg-slate-300 p-1">
        <Link href="/times">times</Link>
      </button>
    </>
  );
}
