import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const allCards = [
  { title: 'Formals',       desc: 'Boardroom to Evening',   img: '/images/img_6.jpeg',  cat: 'Formal'   },
  { title: 'Smart Casuals', desc: 'Effortless Presence',    img: '/images/img_7.jpeg',  cat: 'Casual'   },
  { title: 'Trousers',      desc: 'Perfectly Tailored',     img: '/images/img_8.jpeg',  cat: 'Bottoms'  },
  { title: 'Denims',        desc: 'Everyday Essential',     img: '/images/img_9.jpeg',  cat: 'Bottoms'  },
  { title: 'Cargos',        desc: 'Utility meets Style',    img: '/images/img_10.jpeg', cat: 'Casual'   },
  { title: 'Club Wear',     desc: 'After Hours',            img: '/images/img_12.jpeg', cat: 'Premium'  },
  { title: 'Pyjamas',       desc: 'Comfort, Reimagined',    img: '/images/img_13.jpeg', cat: 'Casual'   },
  { title: 'Smart Casuals', desc: 'Weekend Ready',          img: '/images/img_4.jpeg',  cat: 'Casual'   },
];

const lookbook = [
  { tag: "Crafted for Movement",  cap: "Wherever the day takes you.",   img: "/images/img_11.jpeg", wide: true  },
  { tag: "Style Formals",         cap: "From Sun to Scene",             img: "/images/img_6.jpeg",  wide: false },
  { tag: "Evening Formals",       cap: "After Hours, Done Right",       img: "/images/img_7.jpeg",  wide: false },
  { tag: "Measured Boldness",     cap: "Expressed through clarity.",    img: "/images/img_1.jpeg",  wide: true  },
  { tag: "Heritage Tones",        cap: "Retail Ally",                   img: "/images/img_8.jpeg",  wide: false },
  { tag: "On Holiday Mode",       cap: "Where days slow down.",         img: "/images/img_12.jpeg", wide: false },
];

const Collections = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Page Hero */}
      <section className="relative bg-[#0E1A30] text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url('/images/img_6.jpeg')" }} />
        <div className="relative max-w-[1180px] mx-auto px-6 md:px-10 py-20 md:py-32">
          <div className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#C6963F] mb-4">AW'25 Collection</div>
          <h1 className="font-serif-luxury text-4xl md:text-6xl leading-tight mb-6 normal-case not-italic">
            Six categories.<br /><em className="text-[#C6963F] italic">One wardrobe.</em>
          </h1>
          <p className="text-white/70 max-w-xl text-base leading-relaxed">
            Autumn/Winter '25 is built around six deliberate silhouettes — from boardroom to boulevard, without ever raising its voice.
          </p>
        </div>
      </section>

      {/* Category Strip */}
      <div className="flex flex-wrap items-center justify-center gap-4 py-4 px-6 text-center font-mono text-[0.65rem] uppercase tracking-[0.15em] bg-[#1a2634] text-white/80">
        {['Formals', 'Smart Casuals', 'Trousers', 'Denims', 'Cargos', 'Club Wear', 'Pyjamas'].map((cat, i, arr) => (
          <React.Fragment key={cat}>
            <span>{cat}</span>
            {i < arr.length - 1 && <span className="text-[#c9a96e]">·</span>}
          </React.Fragment>
        ))}
      </div>

      {/* Collections Grid */}
      <section className="py-16 md:py-20 bg-[#F1EAE0]">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {allCards.map((card, i) => (
              <div
                key={i}
                className="group relative overflow-hidden cursor-pointer bg-cover bg-center rounded"
                style={{ backgroundImage: `url('${card.img}')`, height: '420px' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,26,48,0.88)] via-[rgba(14,26,48,0.15)_55%] to-transparent transition-all duration-500 group-hover:from-[rgba(14,26,48,0.95)]" />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-[0.58rem] tracking-widest uppercase bg-[#C6963F]/90 text-white px-2 py-1 rounded">
                    {card.cat}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 p-5 md:p-6">
                  <div className="font-mono text-[0.58rem] tracking-widest uppercase text-[#C6963F] mb-1.5">{card.desc}</div>
                  <div className="font-serif-luxury text-xl font-normal text-white normal-case not-italic">{card.title}</div>
                  <div className="mt-3 overflow-hidden h-0 group-hover:h-8 transition-all duration-300">
                    <span className="font-mono text-[0.62rem] tracking-wider uppercase text-white/80 border-b border-white/40 pb-0.5">
                      View More →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook Gallery */}
      <section className="py-16 md:py-20 bg-[#FDFAF5]">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="font-mono text-[0.63rem] tracking-[0.18em] uppercase text-[#A87B31] mb-3">AW'25 · Lookbook</div>
              <h2 className="font-serif-luxury font-normal text-3xl md:text-4xl leading-tight text-[#2B2820] normal-case not-italic">
                Style is a journey.<br />
                <em className="text-[#A87B31] italic">Not a destination.</em>
              </h2>
            </div>
            <Link to="/process" className="font-mono text-[0.62rem] tracking-widest uppercase text-[#2B2820] opacity-65 hover:opacity-100 whitespace-nowrap transition-opacity no-underline">
              See Our Process →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] gap-2">
            {lookbook.map((card, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden cursor-pointer bg-cover bg-center ${card.wide ? 'sm:col-span-2 lg:col-span-2' : ''}`}
                style={{ backgroundImage: `url('${card.img}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,26,48,0.78)] via-[rgba(14,26,48,0.1)_50%] to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <div className="font-mono text-[0.58rem] tracking-widest uppercase text-[#C6963F] mb-1">{card.tag}</div>
                  <div className="font-serif-luxury text-lg font-normal text-white normal-case not-italic leading-tight">{card.cap}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0E1A30] text-center text-white">
        <div className="max-w-xl mx-auto px-6">
          <div className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#C6963F] mb-4">Become a Retail Partner</div>
          <h2 className="font-serif-luxury font-normal text-3xl md:text-4xl leading-tight mb-6 normal-case not-italic">
            Ready to stock <em className="text-[#C6963F] italic">Onzone?</em>
          </h2>
          <p className="text-white/60 mb-8 leading-relaxed">Request our full AW'25 catalogue or speak directly with our trade team.</p>
          <Link
            to="/contact"
            className="inline-block font-mono text-[0.7rem] tracking-[0.1em] uppercase bg-[#C6963F] text-[#0E1A30] py-4 px-8 no-underline hover:bg-white transition-colors font-semibold"
          >
            Request Catalogue
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Collections;
