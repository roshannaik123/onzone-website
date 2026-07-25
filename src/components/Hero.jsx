import React from 'react';

const Hero = () => {
  return (
    <section data-aos="fade-up" className="pt-10 md:pt-16 pb-14 md:pb-20">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-[60px] items-start">
          
          <div className="hero-copy animate-fade-in order-2 lg:order-1">
            <div className="font-mono-accent text-[0.6rem] md:text-[0.68rem] tracking-[0.18em] uppercase text-[#A87B31] mb-4 md:mb-[22px]">
              Autumn/Winter 2025 · Lookbook Vol. 25
            </div>
            
            <h1 className="font-serif-luxury text-4xl md:text-[clamp(2.6rem,5vw,3.8rem)] leading-[1.08] mb-4 md:mb-[22px]">
              Confidence,<br /> <em className="italic text-[#A87B31]">at ease.</em>
            </h1>
            
            <p className="text-[#6B665A] text-sm md:text-base leading-[1.7] max-w-[420px] mb-6 md:mb-[34px]">
              Tailored for comfort. Styled for presence. A quarter century of menswear, cut for the way modern India lives, works and lingers after hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-[14px] mb-8 md:mb-[46px]">
              <a href="#" className="font-mono-accent text-center text-[0.68rem] tracking-[0.08em] uppercase py-[15px] px-[26px] bg-[#0E1A30] text-[#FDFAF5] rounded-[1px] hover:bg-[#A87B31] transition-colors">
                View the Lookbook
              </a>
              <a href="#" className="font-mono-accent text-center text-[0.68rem] tracking-[0.08em] uppercase py-[15px] px-[26px] border border-[#0E1A30] text-[#0E1A30] rounded-[1px] hover:bg-[#0E1A30] hover:text-[#FDFAF5] transition-colors">
                Our Story
              </a>
            </div>
            
            <div className="flex gap-4 md:gap-0">
              <div className="pr-4 md:pr-[26px] mr-0 md:mr-[26px] border-r border-[rgba(14,26,48,0.12)]">
                <b className="font-serif-luxury text-xl md:text-[1.5rem] block">25+</b>
                <span className="font-mono-accent text-[0.55rem] md:text-[0.6rem] tracking-[0.08em] uppercase text-[#6B665A]">Years</span>
              </div>
              <div className="pr-4 md:pr-[26px] mr-0 md:mr-[26px] border-r border-[rgba(14,26,48,0.12)]">
                <b className="font-serif-luxury text-xl md:text-[1.5rem] block">2,500+</b>
                <span className="font-mono-accent text-[0.55rem] md:text-[0.6rem] tracking-[0.08em] uppercase text-[#6B665A]">Retailers</span>
              </div>
              <div>
                <b className="font-serif-luxury text-xl md:text-[1.5rem] block">150K+</b>
                <span className="font-mono-accent text-[0.55rem] md:text-[0.6rem] tracking-[0.08em] uppercase text-[#6B665A]">Garments</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
            <div
              className="bg-cover bg-top w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]"
              style={{
                backgroundImage: "url('/images/img_0.jpeg')",
              }}
            />
            {/* Caption bar */}
            <div className="flex justify-between py-2.5 font-mono text-[0.55rem] md:text-[0.6rem] tracking-widest text-[#6B665A] uppercase">
              <span>Look 01 — Sep '25</span>
              <span>Step into evening style.</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
