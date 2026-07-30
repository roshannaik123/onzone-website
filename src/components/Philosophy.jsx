import React from "react";

const Philosophy = () => {
  const beliefs = [
    "Growth Should Be Earned, Not Announced",
    "Foundations Before Noise",
    "Relationships Before Scale",
    "Improvement Is Continuous",
    "Consistency Builds Credibility",
  ];

  return (
    <section
      data-aos="fade-up"
      className="py-16 md:py-20 border-t border-[rgba(14,26,48,0.12)]"
      id="philosophy"
    >
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] items-center">
          <div>
            <div className="flex items-center gap-3.5 mb-3.5">
              <div className="w-12 h-[2px] bg-[#ffffff]" />
              <span className="font-mono text-[0.82rem] font-bold tracking-[0.22em] uppercase text-[#C6963F]">
                Brand Philosophy
              </span>
            </div>
            <h2 className="font-serif-luxury font-normal text-3xl md:text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.08] mb-4 md:mb-[18px] normal-case not-italic">
              Five beliefs.{" "}
              <em className="text-[#A87B31] italic">Quietly held.</em>
            </h2>
            <p className="text-[#6B665A] leading-[1.7] max-w-[400px] text-sm md:text-base">
              This is how we have grown — quietly, consistently, and with
              intention. No discount-dumping. No forced visibility. Only
              long-term partnerships.
            </p>
          </div>

          <div>
            {beliefs.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-4 py-4 border-b border-[rgba(14,26,48,0.08)] transition-all duration-300 hover:pl-2 cursor-default group"
              >
                <span className="text-[#C6963F] text-2xl md:text-[1.4rem] leading-none">
                  ›
                </span>
                <span className="font-serif-luxury font-normal text-lg md:text-[1.15rem] text-[#2B2820] normal-case not-italic">
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
