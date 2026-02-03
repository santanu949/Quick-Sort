import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { user } = useUser()
  const clerk = useClerk()
  const navigate = useNavigate()

  return (
    <div className="absolute top-0 left-0 z-50 w-full px-6 md:px-16 lg:px-36 py-5">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={assets.logo} alt="App Logo" className="w-36 h-auto" />
        </Link>

        {/* Mobile / Desktop Menu */}
        <div
          className={`flex flex-col md:flex-row items-center gap-8 py-3
          max-md:fixed max-md:top-0 max-md:left-0 max-md:h-screen max-md:w-full
          max-md:justify-center max-md:font-medium max-md:text-lg
          
          /* 🔒 ONLY CHANGE: SOLID PILL — NO BLUR, NO OPACITY */
          md:px-8 md:rounded-full
          md:bg-[#0b0f14]
          md:border md:border-[#1f2937]

          transition-transform duration-300 ease-in-out
          ${open ? 'max-md:translate-x-0' : 'max-md:-translate-x-full'}`}
        >
          <XIcon
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer"
          />

          {[
            ['/', 'Home'],
            ['/movies', 'Movies'],
            ['/', 'Theaters'],
            ['/', 'Releases'],
            ['/favorites', 'Favorites'],
          ].map(([path, label]) => (
            <Link
              key={label}
              to={path}
              onClick={() => setOpen(false)}
              className="hover:text-primary transition"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6 text-white">
          <SearchIcon
            aria-label="Search"
            className="max-md:hidden w-6 h-6 cursor-pointer"
          />

          {!user ? (
            <button
              onClick={() => clerk.openSignIn()}
              className="px-4 py-1 sm:px-7 sm:py-2 bg-primary hover:bg-primary-dull
              transition rounded-full font-medium"
            >
              Login
            </button>
          ) : (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Bookings"
                  labelIcon={<TicketPlus width={15} />}
                  onClick={() => navigate('/my-bookings')}
                />
              </UserButton.MenuItems>
            </UserButton>
          )}

          <MenuIcon
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="md:hidden w-8 h-8 cursor-pointer"
          />
        </div>

      </div>
    </div>
  )
}

export default Navbar
