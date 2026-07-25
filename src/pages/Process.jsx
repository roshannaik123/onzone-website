import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const pillars = [
  { title: 'Fabric',       desc: "Sourced with intent from mills we've partnered with for decades." },
  { title: 'Pattern',      desc: 'Cut for the Indian silhouette — modern, never fleeting.' },
  { title: 'Construction', desc: 'Reinforced seams, precise plackets, hand-finished collars.' },
  { title: 'Quality',      desc: 'Structured checks across every batch, before it leaves us.' },
  { title: 'Finishing',    desc: "Pressed, polished and packed like it's still our own wardrobe." },
];

const lookbookSpreads = [
  {
    heading: 'Crafted for',
    headingBold: 'MOVEMENT',
    sub: 'Wherever the day takes you.',
    img: '/images/img_11.jpeg',
    alignRight: false,
  },
  {
    heading: 'Measured',
    headingBold: 'BOLDNESS',
    sub: 'Expressed through clarity, not volume.',
    img: '/images/img_1.jpeg',
    alignRight: true,
  },
  {
    heading: 'On',
    headingBold: 'HOLIDAY MODE',
    sub: 'Where days slow down.',
    img: '/images/img_12.jpeg',
    alignRight: false,
  },
];

const Process = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0E1A30] text-white py-20 md:py-32">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#C6963F] mb-4">AW'25 · Our Process</div>
          <h1 className="font-serif-luxury text-4xl md:text-6xl leading-tight mb-6 normal-case not-italic">
            Style is a journey.<br />
            <em className="text-[#C6963F] italic">Not a destination.</em>
          </h1>
          <p className="text-white/70 max-w-xl text-base leading-relaxed">
            Twenty-five years in, we are still walking it — refining, reaching, and quietly earning new ground.
          </p>
        </div>
      </section>

      {/* Lookbook Spreads — inspired by the screenshots */}
      {lookbookSpreads.map((spread, i) => (
        <section
          key={i}
          className="relative min-h-[60vh] md:min-h-[80vh] flex items-end overflow-hidden"
          style={{ backgroundImage: `url('${spread.img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Diagonal overlay like in screenshots */}
          <div
            className="absolute inset-0"
            style={{
              background: spread.alignRight
                ? 'linear-gradient(135deg, transparent 40%, rgba(14,26,48,0.85) 60%)'
                : 'linear-gradient(225deg, transparent 40%, rgba(14,26,48,0.85) 60%)',
            }}
          />
          <div className={`relative w-full max-w-[1180px] mx-auto px-6 md:px-10 pb-12 md:pb-20 ${spread.alignRight ? 'text-right flex flex-col items-end' : ''}`}>
            <p className="font-sans text-white/90 text-lg md:text-2xl tracking-widest mb-1">{spread.heading}</p>
            <h2 className="font-serif-luxury text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-4 tracking-tight normal-case not-italic font-black">
              {spread.headingBold}
            </h2>
            <p className="font-sans text-white/75 text-sm md:text-base tracking-wide">{spread.sub}</p>
          </div>
        </section>
      ))}

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-[#FDFAF5]">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <div className="text-center mb-14">
            <div className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#A87B31] mb-3">How We Work</div>
            <h2 className="font-serif-luxury font-normal text-3xl md:text-4xl text-[#0E1A30] normal-case not-italic">
              Precision at every step.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {pillars.map((p, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#0E1A30] flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif-luxury text-[#C6963F] text-xl normal-case not-italic font-normal">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h4 className="font-serif-luxury font-normal text-lg text-[#2B2820] mb-2 normal-case not-italic">{p.title}</h4>
                <p className="text-[#6B665A] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabric Process Detail */}
      <section className="py-16 md:py-24 bg-[#F1EAE0]">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#A87B31] mb-4">Fabric & Construction</div>
              <h2 className="font-serif-luxury font-normal text-3xl md:text-4xl leading-tight mb-6 normal-case not-italic">
                More than fabric.<br /><em className="text-[#A87B31] italic">More than stitching.</em>
              </h2>
              <p className="text-[#6B665A] leading-relaxed mb-4 text-sm md:text-base">
                Every garment begins with fabric selection — sourced from mills we have partnered with for decades. We choose textiles that balance premium feel with commercial durability.
              </p>
              <p className="text-[#6B665A] leading-relaxed mb-4 text-sm md:text-base">
                Patterns are cut specifically for the Indian silhouette — modern proportions, comfort-first construction. Each piece undergoes structured quality checks before leaving our facility.
              </p>
              <p className="text-[#6B665A] leading-relaxed text-sm md:text-base">
                Trust is not built through announcements — it's earned through repeat seasons of reliable quality.
              </p>
            </div>
            <div className="relative">
              <div
                className="bg-cover bg-center rounded aspect-square"
                style={{ backgroundImage: "url('/images/img_0.jpeg')" }}
              />
              <div className="absolute -bottom-4 -left-4 bg-[#0E1A30] text-white p-4 rounded">
                <p className="font-serif-luxury text-2xl normal-case not-italic">25+</p>
                <p className="font-mono text-[0.6rem] tracking-widest uppercase text-white/60">Years of craft</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0E1A30] text-white text-center">
        <div className="max-w-xl mx-auto px-6">
          <div className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#C6963F] mb-4">Explore the Range</div>
          <h2 className="font-serif-luxury font-normal text-3xl md:text-4xl mb-6 normal-case not-italic">
            View the full <em className="text-[#C6963F] italic">AW'25 collection.</em>
          </h2>
          <Link
            to="/collections"
            className="inline-block font-mono text-[0.7rem] tracking-[0.1em] uppercase bg-[#C6963F] text-[#0E1A30] py-4 px-8 no-underline hover:bg-white transition-colors font-semibold"
          >
            See Collections →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Process;
