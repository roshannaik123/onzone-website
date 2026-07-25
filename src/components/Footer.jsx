import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const collectionLinks = [
    { label: 'Formals',       href: '/collections' },
    { label: 'Smart Casuals', href: '/collections' },
    { label: 'Trousers',      href: '/collections' },
    { label: 'Denims',        href: '/collections' },
    { label: 'Cargos',        href: '/collections' },
  ];

  const companyLinks = [
    { label: 'Our Story',       href: '/about'       },
    { label: 'Retail Ethos',    href: '/about'       },
    { label: 'Craftsmanship',   href: '/process'     },
    { label: 'Trade Enquiries', href: '/contact'     },
    { label: 'Collections',     href: '/collections' },
  ];

  return (
    <footer className="bg-[#0E1A30] text-[#FDFAF5] pt-12 md:pt-[60px]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-baseline gap-2 mb-4 no-underline">
              <span className="font-serif-luxury text-2xl tracking-[0.02em] normal-case not-italic text-white">Onzone</span>
              <small className="font-mono text-[0.55rem] tracking-[0.16em] text-white/50 uppercase">Since 1999</small>
            </Link>
            <p className="text-white/60 leading-[1.7] text-[0.88rem] max-w-[280px]">
              Onzone designs for the modern Indian man — formal shirts, smart casuals, trousers, denims and cargos, made for twenty-five years and counting.
            </p>
          </div>

          {/* Collection */}
          <div>
            <h5 className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-[#C6963F] mb-4">Collection</h5>
            {collectionLinks.map(({ label, href }) => (
              <Link key={label} to={href} className="block text-white/60 text-[0.88rem] mb-2 no-underline hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <h5 className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-[#C6963F] mb-4">Company</h5>
            {companyLinks.map(({ label, href }) => (
              <Link key={label} to={href} className="block text-white/60 text-[0.88rem] mb-2 no-underline hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </div>

          {/* Store */}
          <div>
            <h5 className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-[#C6963F] mb-4">Store</h5>
            <span className="block text-white/60 text-[0.88rem] mb-2">Bangalore · Karnataka · India</span>
            <a href="tel:+919916082518" className="block text-white/60 text-[0.88rem] mb-2 no-underline hover:text-white transition-colors">+91 99160 82518</a>
            <a href="mailto:enquiries@houseofonzone.com" className="block text-white/60 text-[0.88rem] mb-2 no-underline hover:text-white transition-colors">enquiries@houseofonzone.com</a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 py-5 font-mono text-[0.55rem] md:text-[0.6rem] tracking-[0.1em] uppercase text-white/45 gap-2 md:gap-0 text-center">
          <span>© 2025 House of Onzone. All rights reserved.</span>
          <span>Formals · Smart Casuals · Trousers · Denims · Cargos</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
