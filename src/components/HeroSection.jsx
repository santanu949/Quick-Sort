import React from 'react'
import Navbar from './Navbar'
import { assets } from '../assets/assets'
import { CalendarIcon, ClockIcon } from 'lucide-react'

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/backgroundImage.png')" }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* Navbar */}
      <Navbar />

      {/* Hero content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="px-6 md:px-16 lg:px-36 text-white pt-32 max-w-2xl">
          
          {/* Marvel badge */}
          <img
            src={assets.marvelLogo}
            alt="Marvel Studios"
            className="h-10 mb-6"
          />

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight">
            Guardians <br /> of the Galaxy
          </h1>

          {/* Meta row — FIXED (no wrapping) */}
          <div className="flex items-center gap-4 mt-4 text-gray-300/80 text-sm whitespace-nowrap">
            <span>Action | Adventure | Sci-Fi</span>

            <span className="flex items-center gap-1">
              <CalendarIcon className="w-4 h-4" />
              2018
            </span>

            <span className="flex items-center gap-1">
              <ClockIcon className="w-4 h-4" />
              2h 16m
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
