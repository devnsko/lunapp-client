'use client';

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type NeoData = {
    id: number;
    neo_id: string;
    name: string;
    nasa_jpl_url: string;
    absolute_magnitude_h: number;
    estimated_diameter_kilometers_min: number;
    estimated_diameter_kilometers_max: number;
    estimated_diameter_meters_min: number;
    estimated_diameter_meters_max: number;
    estimated_diameter_miles_min: number;
    estimated_diameter_miles_max: number;
    estimated_diameter_feet_min: number;
    estimated_diameter_feet_max: number;
    is_potentially_hazardous_asteroid: boolean;
    close_approach_date: string;
    close_approach_date_full: string;
    epoch_date_close_approach: number;
    relative_velocity_kilometers_per_second: string;
    relative_velocity_kilometers_per_hour: string;
    relative_velocity_miles_per_hour: string;
    miss_distance_astronomical: string;
    miss_distance_lunar: string;
    miss_distance_kilometers: string;
    miss_distance_miles: string;
    orbital_data: string;
    is_sentry_object: boolean;
}

export default function Page() {
  const [loading, setLoading] = useState<boolean>(false);
  const params = useSearchParams();
  const [year, setYear] = useState<string>(params.get('year') || '2020');
  const [neo, setNeo] = useState<NeoData | null>(null);

  const getNEO = async (year: string = '') => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:5000/near?year=${year ? year : 2020}`, {
        method: 'GET',
        next: {
          revalidate: 24 * 60 * 60 * 1000,
        }
      });

      if (response.ok){
        const data = await response.json();
        if (data) {
            setNeo(data as NeoData);
        }
      }      
    } catch (error) {
      console.error('🚀!!! [NEO] Failed to fetch neo', error);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNEO(year);
  }, [year]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="position-absolute top-50 start-50 translate-middle">
      <h1 className="text-center h3">
        {(year != '1900') && (<a className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href={`/near?year=${parseInt(year)-1}`} role="button">{'<— '}</a>) }
        {`Closest To Earth Object Of ${year} Year`}
        {(parseInt(year) !== new Date().getFullYear()) && (<a className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" href={`/near?year=${parseInt(year)+1}`} role="button">{' —>'}</a>)}
      </h1>
        {loading 
        ? <>
        <div className="text-center">
          <p className="text-center">Loading...</p>
          <p className="text-cetner fs-6 text-secondary">(Sometimes it can take a few minutes.)</p>
          <p className="text-cetner fs-6 text-secondary">(Warning: Not all years can be available yet.)</p>
        </div>
        </>
        : neo && <>
        <p className="text-center">{neo.close_approach_date.split('T')[0]}</p>
          <h1 className="text-center h3">{neo.name}</h1>
          {Object.entries(neo).map(([key, value]) => (
            <p key={key} className={`text-center ${(['miss_distance_kilometers', 'name', 'close_approach_date_full', 'estimated_diameter_kilometers_max', 'relative_velocity_kilometers_per_hour']).includes(key) ? 'text-warning' : ''}`}>
              {`${key} — ${value}`}
            </p>
          ))}
        </>}

      </div>
    </main>
  );
}