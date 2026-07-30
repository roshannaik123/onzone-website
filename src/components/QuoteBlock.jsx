import React from 'react';

const QuoteBlock = () => {
  return (
    <section data-aos="fade-up" className="bg-[#0E1A30] text-[#FDFAF5] py-16 px-6 md:py-[80px] md:px-10 text-center">
      <div className="max-w-[900px] mx-auto">
        <div className="flex items-center justify-center gap-3.5 mb-5 md:mb-7">
          <div className="w-10 h-[2px] bg-[#C6963F]" />
          <span className="font-mono text-[0.82rem] font-bold tracking-[0.22em] uppercase text-[#C6963F]">
            The Philosophy of Fashion
          </span>
          <div className="w-10 h-[2px] bg-[#C6963F]" />
        </div>

        <h2 className="font-serif-luxury font-normal text-2xl md:text-[clamp(1.6rem,3.5vw,2.8rem)] leading-[1.2] mb-6 normal-case not-italic">
          "In fashion, there is no final destination.<br className="hidden sm:block" />
          It is a road meant to be travelled."
        </h2>

        <p className="font-mono text-xs md:text-[0.8rem] tracking-[0.05em] text-white/60 max-w-[560px] mx-auto leading-[1.7]">
          Twenty-five years in, we are still walking it — refining, reaching, and quietly earning new ground.
        </p>
      </div>
    </section>
  );
};

export default QuoteBlock;
