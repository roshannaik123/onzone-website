import React from 'react';

const RetailFirst = () => {
  return (
    <section data-aos="fade-up" className="bg-[#0E1A30] text-[#FDFAF5]">
      <div className="grid grid-cols-1 md:grid-cols-2">

        {/* Left: image — relative container lets the absolute img fill 100% of grid cell height on desktop */}
        <div className="relative min-h-[300px] md:min-h-[520px]">
          <img
            src="/images/img_5.jpeg"
            alt="Onzone retail"
            className="absolute inset-0 w-full h-full object-cover md:object-contain object-center block"
          />
        </div>

        {/* Right: copy */}
        <div className="py-10 px-6 md:py-16 md:px-[60px] flex flex-col justify-center">
          <div className="font-mono text-[0.6rem] md:text-[0.68rem] tracking-[0.18em] uppercase text-[#C6963F] mb-3.5">
            Retail First
          </div>

          <h2 className="font-serif-luxury font-normal text-3xl md:text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.1] mb-5 normal-case not-italic">
            We grow <em className="text-[#C6963F] italic">with our</em> retailers.<br />
            Not over them.
          </h2>

          <p className="text-white/70 leading-[1.7] mb-10 max-w-[480px] text-sm md:text-base">
            Today we work directly with 2,500+ active retail stores, across formats ranging from 200 sq. ft. outlets to 100,000 sq. ft. large-format stores — including standalone retailers, multi-outlet chains and export partners.
          </p>

          <div className="grid grid-cols-2 gap-5 md:gap-7">
            {[
              { val: '2,500+',      label: 'Direct Retail Partners' },
              { val: '100K sqft+', label: 'Largest Store Format' },
              { val: '100K+',       label: 'Shirts In Stock' },
              { val: '50K+',        label: 'Trousers & Denims' },
            ].map(stat => (
              <div key={stat.label} className="border-l border-white/20 pl-4 md:pl-[18px]">
                <b className="font-serif-luxury text-xl md:text-[1.8rem] block mb-1 normal-case not-italic">{stat.val}</b>
                <span className="font-mono text-[0.55rem] md:text-[0.6rem] tracking-[0.1em] uppercase text-white/50">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default RetailFirst;
