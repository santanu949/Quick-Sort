import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#fafafa] pt-20">
      
      {/* Soft Ambient Top Gradients */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[500px] flex justify-center opacity-70 pointer-events-none">
        <div className="w-[45%] h-full bg-blue-100 blur-[100px] rounded-full mix-blend-multiply" />
        <div className="w-[45%] h-full bg-orange-100/80 blur-[100px] rounded-full mix-blend-multiply -ml-32" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 max-w-4xl text-center w-full">
        
        <img 
          src="/logo1.png" 
          alt="Horizon Logo" 
          className="w-24 h-24 object-contain mb-8 drop-shadow-sm"
        />

        <div className="px-5 py-1.5 rounded-full bg-[#f0f4f8] text-[#4a5568] text-xs font-semibold tracking-wide mb-8 shadow-sm border border-gray-200/50">
          India's Trusted AI Infrastructure
        </div>

        <h1 className="text-5xl md:text-7xl text-gray-900 mb-6 font-['Playfair_Display'] tracking-tight">
          Powering the Future of AI
        </h1>

        <p className="text-gray-500 max-w-xl text-base md:text-lg mb-10 leading-relaxed">
          Building advanced AI infrastructure to fuel innovation and scale for enterprises worldwide.
        </p>

        {/* Action Buttons - 50% width side-by-side on mobile */}
        <div className="flex flex-row items-center justify-center gap-3 w-full sm:w-auto mt-2">
          
          <button className="w-1/2 sm:w-auto relative overflow-hidden rounded-full bg-[#1a1a1a] px-2 py-2.5 sm:px-8 sm:py-3.5 text-xs sm:text-sm text-white font-medium transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] whitespace-nowrap">
            <span className="relative z-10">Experience</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_infinite]" />
          </button>
          
          <button className="w-1/2 sm:w-auto px-2 py-2.5 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-medium border border-gray-300 rounded-full bg-white hover:bg-gray-50 transition-colors shadow-sm text-gray-800 whitespace-nowrap">
            Chat
          </button>
          
        </div>

      </div>
    </section>
  )
}

export default HeroSection