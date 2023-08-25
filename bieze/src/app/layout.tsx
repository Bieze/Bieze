"use client";

import './globals.css'
import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { MenuBar } from '../components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark:bg-[#1e1e2e]'>
      <body >
        <NextUIProvider>
          <MenuBar />
          {children}
        </NextUIProvider>
      </body>
    </html>
  )
}
