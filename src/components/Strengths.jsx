import React from 'react';

const Strengths = () => {
  const pillars = [
    { title: 'Fabric',       desc: "Sourced with intent from mills we've partnered with for decades." },
    { title: 'Pattern',      desc: 'Cut for the Indian silhouette — modern, never fleeting.' },
    { title: 'Construction', desc: 'Reinforced seams, precise plackets, hand-finished collars.' },
    { title: 'Quality',      desc: 'Structured checks across every batch, before it leaves us.' },
    { title: 'Finishing',    desc: "Pressed, polished and packed like it's still our own wardrobe." },
  ];

  return (
    <section data-aos="fade-up" className="py-16 md:py-20 bg-[#F1EAE0]" id="strengths">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">

        <div className="mb-10 md:mb-12">
          <div className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#A87B31] mb-3.5">
            Our Strength
          </div>
          <h2 className="font-serif-luxury font-normal text-3xl md:text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.08] mb-3.5 normal-case not-italic">
            More than fabric. <em className="text-[#A87B31] italic">More than stitching.</em>
          </h2>
          <p className="text-[#6B665A] leading-[1.7] max-w-[560px] text-sm md:text-base">
            Precision in every stitch. Trust is not built through announcements — it's earned through repeat seasons.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 border-t border-[rgba(14,26,48,0.12)] pt-10">
          {pillars.map((p, i) => (
            <div key={i}>
              <h4 className="font-serif-luxury font-normal text-xl md:text-[1.3rem] mb-2.5 text-[#2B2820] normal-case not-italic">
                {p.title}
              </h4>
              <p className="text-[#6B665A] leading-[1.6] text-[0.88rem]">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Strengths;
