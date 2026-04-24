import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LayoutDashboard, ArrowUpRight, ChevronDown } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

// Reusable Desktop Mega Menu Component
const NavItemWithMegaMenu = ({ title, links, imageText, imageSubtext, gradient }) => (
  <div className="group relative py-4">
    <button className="hover:text-black transition-colors uppercase cursor-pointer text-sm font-semibold tracking-wide text-gray-700">
      {title}
    </button>
    
    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[600px] rounded-2xl bg-white/95 backdrop-blur-xl p-6 shadow-2xl border border-gray-100
                    invisible opacity-0 translate-y-3 transition-all duration-300 ease-out 
                    group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 flex gap-6 text-left cursor-default">
      
      <div className="w-1/2 flex flex-col gap-4 border-r border-gray-100 pr-4">
        {links.map((link, idx) => (
          <Link key={idx} to="/" className="block group/link">
            <h4 className="font-semibold text-gray-900 group-hover/link:text-blue-600 transition-colors flex justify-between items-center text-sm">
              {link.title} <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
            </h4>
            <p className="text-xs text-gray-500 mt-1 normal-case font-normal">{link.desc}</p>
          </Link>
        ))}
      </div>

      <div className="w-1/2 group/card cursor-pointer flex flex-col justify-center">
        <div className={`bg-gradient-to-br ${gradient} rounded-xl h-36 w-full flex items-center justify-center text-white font-bold text-2xl shadow-inner mb-4 transition-transform duration-300 group-hover/card:scale-[1.03]`}>
          {title}
        </div>
        <h4 className="font-bold text-gray-900 text-sm">{imageText}</h4>
        <p className="text-xs text-gray-500 mt-1 normal-case font-normal leading-relaxed">{imageSubtext}</p>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [activeMobileMenu, setActiveMobileMenu] = useState(null)
  const { user } = useUser()
  const clerk = useClerk()
  const navigate = useNavigate()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  const menuData = {
    engine: { id: 'engine', title: "Engine", gradient: "from-blue-500 to-indigo-600", imageText: "Core Compute", imageSubtext: "High-performance infrastructure.", links: [{title: "Compute Instances", desc: "Scalable GPU & CPU clusters"}, {title: "Storage Solutions", desc: "High-speed NVMe storage"}] },
    builder: { id: 'builder', title: "Builder", gradient: "from-emerald-400 to-teal-600", imageText: "Development Kit", imageSubtext: "Tools to build AI faster.", links: [{title: "Model Fine-tuning", desc: "Custom training pipelines"}, {title: "Deployment APIs", desc: "One-click model hosting"}] },
    stack: { id: 'stack', title: "Stack", gradient: "from-purple-500 to-pink-600", imageText: "Software Layer", imageSubtext: "Optimized AI frameworks.", links: [{title: "Horizon OS", desc: "Native operating environment"}, {title: "Security & Auth", desc: "Enterprise-grade protection"}] },
    products: { id: 'products', title: "Products", gradient: "from-orange-400 to-orange-600", imageText: "Try Indus", imageSubtext: "Experience our sovereign model.", links: [{title: "Horizon Samvaad", desc: "Conversational AI"}, {title: "Horizon Studio", desc: "Content Transformation"}] },
    lab: { id: 'lab', title: "Lab", gradient: "from-cyan-400 to-blue-500", imageText: "Research", imageSubtext: "Next-gen experimental models.", links: [{title: "Frontier Models", desc: "Early access to beta models"}, {title: "Open Source", desc: "Community contributions"}] },
  };

  const toggleMobileMenu = (menuId) => {
    setActiveMobileMenu(activeMobileMenu === menuId ? null : menuId);
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4 md:px-8 pointer-events-none">
      
      {/* Restored to max-w-5xl and px-8 */}
      <nav className="pointer-events-auto flex items-center justify-between w-full max-w-5xl px-8 py-2.5 bg-white/20 backdrop-blur-xl rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/40 transition-colors duration-300">
        
        {/* Logo */}
        <Link to="/" className="text-xl tracking-[0.15em] font-bold text-gray-900 z-[70]">
          HORIZON
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {Object.values(menuData).map((menu) => (
            <NavItemWithMegaMenu key={menu.id} {...menu} />
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 md:gap-4 z-[70]">
          
          <button className="hidden md:block relative overflow-hidden rounded-full bg-[#1a1a1a] px-5 py-2 text-sm text-white font-medium transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
            <span className="relative z-10">Experience Horizon</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_infinite]" />
          </button>

          {!user ? (
            <button
              onClick={() => clerk.openSignIn()}
              className="hidden sm:block px-5 py-2 text-sm font-medium border border-gray-400/50 rounded-full hover:bg-white/40 backdrop-blur-sm transition-colors text-gray-900"
            >
              Login
            </button>
          ) : (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action label="Dashboard" labelIcon={<LayoutDashboard width={15} />} onClick={() => navigate('/dashboard')} />
              </UserButton.MenuItems>
            </UserButton>
          )}

          {/* Hamburger Menu */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-[5px] ml-1 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className={`block w-6 h-[2px] bg-gray-900 rounded-full transition-all duration-300 ease-in-out ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-6 h-[2px] bg-gray-900 rounded-full transition-all duration-300 ease-in-out ${open ? 'opacity-0 translate-x-3' : 'opacity-100'}`} />
            <span className={`block w-6 h-[2px] bg-gray-900 rounded-full transition-all duration-300 ease-in-out ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer with Tap/Click Accordions */}
      <div className={`pointer-events-auto fixed inset-0 bg-white/95 backdrop-blur-2xl z-[60] lg:hidden overflow-y-auto transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="flex flex-col items-center pt-32 pb-20 px-6 min-h-full gap-2">
          
          {Object.values(menuData).map((menu) => (
            <div key={menu.id} className="w-full max-w-sm border-b border-gray-200 py-4">
              <button 
                onClick={() => toggleMobileMenu(menu.id)}
                className="w-full flex justify-between items-center text-xl font-semibold text-gray-900 uppercase tracking-wide"
              >
                {menu.title}
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeMobileMenu === menu.id ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeMobileMenu === menu.id ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col gap-3 pl-2 border-l-2 border-gray-100">
                  {menu.links.map((link, idx) => (
                    <Link to="/" key={idx} onClick={() => setOpen(false)} className="py-2">
                      <h4 className="font-semibold text-gray-800 text-sm">{link.title}</h4>
                      <p className="text-xs text-gray-500">{link.desc}</p>
                    </Link>
                  ))}
                  
                  <div className={`mt-2 bg-gradient-to-br ${menu.gradient} rounded-xl p-5 text-white flex flex-col items-center justify-center text-center`}>
                    <span className="font-bold text-lg mb-1">{menu.imageText}</span>
                    <span className="text-xs opacity-90">{menu.imageSubtext}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {!user && (
             <button
              onClick={() => { setOpen(false); clerk.openSignIn(); }}
              className="mt-8 w-full max-w-sm px-8 py-3.5 text-sm font-bold tracking-wide uppercase border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
             >
               Login to Horizon
             </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar