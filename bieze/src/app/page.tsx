"use client";

import React from 'react'
import Link from 'next/link';
import { InfoCard } from '../components/InfoCard';

export default function Home() {
  return (
    <main className='grid h-[600px] place-items-center '>
      <p className='text-[#1e66f5]'>
      <Link href={"https://github.com/Bieze"}> {"=>"} Visit my GitHub profile</Link>
      </p>
      <InfoCard />
      
    </main>
  )
}
