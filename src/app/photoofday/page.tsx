'use client';

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type ApodData = {
  id: number;
  title: string;
  date: string;
  explanation: string;
  media_type: string;
  hdurl?: string;
  url: string;
} 

export default function Page() {
  const [loading, setLoading] = useState<boolean>(false);
  const params = useSearchParams();
  const [date, setDate] = useState<string>(params.get('date') || '');
  const [apod, setApod] = useState<ApodData | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/today${date ? `?date=${date}` : ''}`, {
      method: 'GET',
      next: {
        revalidate: 24 * 60 * 60 * 1000,
      }
    })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok!!!');
      }
      const data = await response.json();
      if (data) {
        setApod(data as ApodData);
        setLoading(false);
      }
    })
    .catch((error) => {
      console.error('🚀!!! [APOD] Failed to fetch photo of the day', error);
    });
  }, [date]);

  let previousDay = () => {
    const d = new Date(date || new Date());
    d.setDate(d.getDate() - 1);
    return d?.toISOString().split('T')[0];
  }

  let nextDay = () => {
    const d = new Date(date || new Date());
    d.setDate(d.getDate() + 1);
    return d?.toISOString().split('T')[0];
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="position-absolute top-50 start-50 translate-middle">
      <h1 className="text-center h3">Photo of the Day</h1>
        {loading 
        ? <p className="text-center">Loading...</p>
        : apod && <>
        <p className="text-center">
        {date != '1995-06-20' && (<a className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href={`/photoofday?date=${previousDay()}`} role="button">{'<— '}</a>)}
          {apod.date.split('T')[0]}
        {!new Date().toISOString().startsWith(date) && (<a className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href={`/photoofday?date=${nextDay()}`} role="button">{' —>'}</a>)}

          </p>
          <h1 className="text-center h3">{apod.title}</h1>
          <div className="flex flex-col items-center mx-auto p-3">
            <a href={apod.hdurl ?? apod.url ?? "#"}  target="_blank">
              {
              apod.media_type === 'video' ?
              <video controls className="align-middle" width={768} height={452} >
                <source src={apod.url} />
                Your browser does not support the video tag...
              </video>
              : apod.media_type === 'image' && 
                <Image
                className="align-middle"
                src={apod.url}
                alt="Next.js Logo"
                width={740}
                height={148}
                priority />
              } 
              </a>
          </div>
          <p className="text-center">{apod.explanation}</p>
              </>  
      }
      </div>
    </main>
  );
}

{/* <p className="text-center">{photo.data.date.split('T')[0]}</p>
        <h1 className="text-center h3">{photo.data.title}</h1>
        <div className="flex flex-col items-center mx-auto p-3">
          <Image
            className="align-middle"
            src={photo.data.url}
            alt="Next.js Logo"
            width={740}
            height={148}
            priority
            />
        </div>
        <p className="text-center">{photo.data.explanation}</p> */}