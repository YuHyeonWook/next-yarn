'use client';
import { postConvertTimeZone } from '@/api/conversion/postConvertTimeZone';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [timeZoneData, setTimeZoneData] = useState(null);

  const mutation = useMutation({
    mutationFn: postConvertTimeZone,
    onSuccess: data => {
      setTimeZoneData(data);
    },
    onError: error => {
      throw error;
    }
  });
  console.log(timeZoneData);

  const handleConvertTimeZone = () => {
    mutation.mutate({
      fromTimeZone: 'America/New_York',
      dateTime: '2024-07-14T12:00:00Z',
      toTimeZone: 'America/Los_Angeles',
      dstAmbiguity: ''
    });
  };

  return (
    <>
      <h1>Current Time</h1>
      <img
        src="/profile.svg"
        alt=""
      />
      <Image
        width={500}
        height={500}
        src="/profile.svg"
        alt=""
      />
      <button
        className="border rounded bg-slate-300 p-1"
        onClick={handleConvertTimeZone}>
        현재시간 확인하기
      </button>
      {timeZoneData && <div>Converted Time: {timeZoneData}</div>}
      <button className="border rounded bg-slate-300 p-1">
        <Link href="/times">나라시간 확인하러가기</Link>
      </button>
    </>
  );
}
