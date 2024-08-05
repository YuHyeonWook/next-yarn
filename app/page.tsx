import { getCurrentZone } from '@/api/time/getCurrentTime';
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
        <Link href="/times">나라시간 확인하러가기</Link>
      </button>
    </>
  );
}
