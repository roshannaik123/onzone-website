import React from 'react';

const Collections = () => {
  const cards = [
    { title: 'Formals',       desc: 'Boardroom to Evening',  img: '/images/img_6.jpeg'  },
    { title: 'Smart Casuals', desc: 'Effortless Presence',   img: '/images/img_7.jpeg'  },
    { title: 'Trousers',      desc: 'Perfectly Tailored',    img: '/images/img_8.jpeg'  },
    { title: 'Denims',        desc: 'Everyday Essential',    img: '/images/img_9.jpeg'  },
    { title: 'Cargos',        desc: 'Utility meets Style',   img: '/images/img_10.jpeg' },
    { title: 'Club Wear',     desc: 'After Hours',           img: '/images/img_12.jpeg' },
  ];

  return (
    <section data-aos="fade-up" className="pt-10 pb-20 bg-[#F1EAE0]" id="collections">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">

        {/* Head */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4 md:gap-0">
          <div>
            <div className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#A87B31] mb-3">
              The Collection
            </div>
            <h2 className="font-serif-luxury font-normal text-3xl md:text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.08] normal-case not-italic">
              Six categories. <em className="text-[#A87B31] italic">One wardrobe.</em>
            </h2>
          </div>
          <p className="text-[#6B665A] leading-[1.7] max-w-[400px] text-sm md:text-[0.9rem]">
            Autumn/Winter '25 is built around six deliberate silhouettes — from boardroom to boulevard, without ever raising its voice.
          </p>
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {cards.map((card, i) => (
            <div key={i} className="group relative overflow-hidden h-[350px] md:h-[400px] bg-cover bg-center cursor-pointer"
                 style={{ backgroundImage: `url('${card.img}')` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,26,48,0.85)] via-[rgba(14,26,48,0.1)_60%] to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 md:p-[22px]">
                <div className="font-mono text-[0.55rem] md:text-[0.6rem] tracking-[0.14em] uppercase text-[#C6963F] mb-1">
                  {card.desc}
                </div>
                <div className="font-serif-luxury text-xl md:text-[1.4rem] font-normal text-white normal-case not-italic">
                  {card.title}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Collections;
