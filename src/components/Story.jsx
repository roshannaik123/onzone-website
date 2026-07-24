import React from 'react';

const Story = () => {
  return (
    <section data-aos="fade-up" className="py-16 md:py-20" id="story">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] items-start">

          {/* Left: copy */}
          <div>
            <div className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#A87B31] mb-3.5">
              Our Story
            </div>
            <h2 className="font-serif-luxury font-normal text-3xl md:text-[clamp(2rem,3.5vw,2.8rem)] leading-[1.08] mb-1.5 normal-case not-italic">
              Built <em className="text-[#A87B31] italic">without</em> noise.
            </h2>
            <h3 className="font-serif-luxury font-normal text-2xl md:text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.08] mb-7 normal-case not-italic">
              Worn with intention.
            </h3>
            <p className="text-[#6B665A] leading-[1.7] mb-4 text-sm md:text-base">
              Established in 1999 by Rajesh and Mukesh Parekh, Onzone began with a single, unglamorous ambition — build men's clothing that retailers could rely on, season after season.
            </p>
            <p className="text-[#6B665A] leading-[1.7] mb-4 text-sm md:text-base">
              From formal shirts we grew into trousers, smart casuals, denims, pyjamas and cargos. Every addition was earned, guided by retailer feedback and the quiet insight only 25 years on the shop floor can bring.
            </p>
            <p className="font-semibold text-[#2B2820] text-sm md:text-base">
              Reach, quality and credibility — before promotion.
            </p>
          </div>

          {/* Right: image collage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-none sm:grid-rows-[auto_auto] gap-2">
            {/* Tall left image spanning both rows on desktop */}
            <div className="sm:row-span-2 bg-cover bg-center min-h-[300px] sm:min-h-[420px]"
                 style={{ backgroundImage: "url('/images/img_1.jpeg')" }} />
            {/* Top-right image */}
            <div className="bg-cover bg-center h-[200px]"
                 style={{ backgroundImage: "url('/images/img_2.jpeg')" }} />
            {/* Bottom-right image */}
            <div className="bg-cover bg-center h-[200px] sm:h-[212px]"
                 style={{ backgroundImage: "url('/images/img_3.jpeg')" }} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Story;
