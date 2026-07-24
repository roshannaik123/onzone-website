import React, { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { label: 'Home',            href: '#'          },
    { label: 'About Us',        href: '#story'     },
    { label: 'Collections',     href: '#collections' },
    { label: 'Our Process',     href: '#lookbook'  },
    { label: 'Contact',         href: '#contact'   },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#FDFAF5] border-b border-[rgba(14,26,48,0.12)]">
      <div className="flex items-center justify-between py-4 md:py-[22px] px-6 md:px-10">
        {/* Brandmark */}
        <div className="flex flex-col items-start gap-0.5">
          <span className="font-serif-luxury text-xl md:text-2xl tracking-wide leading-none normal-case not-italic">
            Onzone
          </span>
          <small className="font-mono text-[0.55rem] tracking-[0.16em] text-[#6B665A] uppercase">
            Since 1999
          </small>
        </div>

        {/* Desktop Nav links */}
        <div className="hidden lg:flex gap-8 text-[0.78rem] text-[#2B2820]">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setActive(label)}
              className={`pb-0.5 transition-all duration-200 no-underline text-ink ${
                active === label
                  ? 'opacity-100 font-semibold border-b border-[#0E1A30]'
                  : 'opacity-65 font-normal border-b border-transparent hover:opacity-100'
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden lg:inline-block font-mono text-[0.66rem] tracking-[0.08em] uppercase bg-[#0E1A30] text-[#FDFAF5] py-[11px] px-[22px] rounded-full no-underline transition-colors duration-200 hover:bg-[#A87B31]"
          >
            Become a Partner
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#0E1A30] focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#FDFAF5] border-b border-[rgba(14,26,48,0.12)] shadow-lg py-4 px-6 flex flex-col gap-4">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => {
                setActive(label);
                setIsMobileMenuOpen(false);
              }}
              className={`text-sm py-2 transition-all duration-200 no-underline text-ink ${
                active === label ? 'font-semibold text-[#A87B31]' : 'opacity-80'
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-mono text-[0.66rem] tracking-[0.08em] uppercase bg-[#0E1A30] text-[#FDFAF5] py-[11px] px-[22px] rounded-full no-underline transition-colors duration-200 hover:bg-[#A87B31] text-center mt-2"
          >
            Become a Partner
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
