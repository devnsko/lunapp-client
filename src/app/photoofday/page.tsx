'use client';

import Image from "next/image";
import { fetchData } from "@/tools/api";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";

// export const revalidate = 3600;

export default function Page() {
  const params = useSearchParams();
  const dateParam = params.get('date') ?? new Date().toISOString().split('T')[0];
  const [value, onChange] = useState(new Date());
  const [data, setData] = useState<{ title: string; date: string; hdurl: string; explanation: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataAsync = async () => {
      console.log('Fetching data for date:', dateParam);
      const fetchedData = await fetchData(`/today?date=${dateParam}`);
      setData(fetchedData);
      setLoading(false);
    };

    fetchDataAsync();
  }, [dateParam]);

  if (loading) {
    return (
      <div className="spinner-border position-absolute top-50 start-50 translate-middle" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="position-absolute top-50 start-50 translate-middle">
        <p className="text-center">{data.date.split('T')[0]}</p>
        <h1 className="text-center h3">{data.title}</h1>
        <div className="flex flex-col items-center mx-auto p-3">
          <Image
            className="align-middle"
            src={data.hdurl}
            alt="Next.js Logo"
            width={740}
            height={148}
            priority
            />
        </div>
        <p className="text-center">{data.explanation}</p>
      </div>
    </main>
  );
}