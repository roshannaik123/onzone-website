import React from "react";
import AOS from "aos";
import { useEffect } from "react";

const WhyUsIcon = ({ path }) => (
  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0E1A30] flex items-center justify-center flex-shrink-0">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C6963F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
    >
      <path d={path} />
    </svg>
  </div>
);

const whyUsPoints = [
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0",
    title: "Direct Retail Model",
    desc: "We work directly with 2500+ active retail partners, ensuring faster communication, transparency, and stronger long-term relationships.",
  },
  {
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Proven Retail Sell-Through",
    desc: "Designs and fabrics are selected with deep retail insight — balancing premium appeal with everyday wearability to ensure consistent sell-through.",
  },
  {
    icon: "M4 6h16M4 10h16M4 14h16M4 18h16",
    title: "Wide Range with Strong Core Depth",
    desc: "A large active collection supported by dependable core articles enables easy replenishment and meaningful retail display.",
  },
  {
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    title: "Strong Inventory & Refill Capability",
    desc: "With stock depth of 100,000+ shirts and 50,000+ trousers & denims, retailers benefit from reliable availability and faster reordering.",
  },
  {
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Commercially Grounded Pricing",
    desc: "Direct market exposure helps maintain sensible, stable pricing aligned with real retail conditions.",
  },
  {
    icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636",
    title: "No Discount-Dumping Philosophy",
    desc: "Disciplined product planning avoids surplus liquidation and protects long-term brand value.",
  },
  {
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    title: "Experience Across Retail Scales",
    desc: "From 200 sq. ft. independent stores to 100,000 sq. ft. large formats, we understand the realities of every retail environment.",
  },
  {
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    title: "Consistent Quality & Supply Reliability",
    desc: "Structured sourcing, production control, and quality checks ensure dependable product consistency across seasons.",
  },
];

const beliefs = [
  {
    num: "1",
    title: "Growth Should Be Earned, Not Announced",
    desc: "We focus on strengthening product and retail trust before seeking visibility.",
  },
  {
    num: "2",
    title: "Foundations Before Noise",
    desc: "Consistency in product and disciplined execution matter more than short-term attention.",
  },
  {
    num: "3",
    title: "Relationships Before Scale",
    desc: "Direct conversations, active listening, and quick responses build stronger partnerships.",
  },
  {
    num: "4",
    title: "Improvement is Continuous",
    desc: "We constantly refine and evolve rather than expanding carelessly.",
  },
  {
    num: "5",
    title: "Consistency Builds Credibility",
    desc: "Long-term trust is earned through reliability in quality, service, and commitments.",
  },
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative bg-[#0E1A30] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/img_5.jpeg')" }}
        />
        <div className="relative max-w-[1180px] mx-auto px-6 md:px-10 py-20 md:py-32">
          <div className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#C6963F] mb-4">
            About Onzone
          </div>
          <h1 className="font-serif-luxury text-4xl md:text-6xl leading-tight mb-6 normal-case not-italic">
            Built without noise.
            <br />
            <em className="text-[#C6963F] italic">Worn with intention.</em>
          </h1>
          <p className="text-white/70 max-w-xl text-base md:text-lg leading-relaxed">
            Established in 1999, Onzone has grown into one of India's most
            trusted menswear brands — built on retail partnerships, not
            marketing noise.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section data-aos="fade-up" className="py-16 md:py-24" id="story">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <div className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#A87B31] mb-4">
                Our Story
              </div>
              <h2 className="font-serif-luxury font-normal text-3xl md:text-4xl leading-tight mb-6 normal-case not-italic">
                25 years of trust, one season at a time.
              </h2>
              <p className="text-[#6B665A] leading-relaxed mb-4 text-sm md:text-base">
                Established in 1999 by Rajesh and Mukesh Parekh, Onzone began
                with a single, unglamorous ambition — build men's clothing that
                retailers could rely on, season after season.
              </p>
              <p className="text-[#6B665A] leading-relaxed mb-4 text-sm md:text-base">
                From formal shirts we grew into trousers, smart casuals, denims,
                pyjamas and cargos. Every addition was earned, guided by
                retailer feedback and the quiet insight only 25 years on the
                shop floor can bring.
              </p>
              <p className="font-semibold text-[#2B2820]">
                Reach, quality and credibility — before promotion.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div
                className="row-span-2 bg-cover bg-center rounded min-h-[350px]"
                style={{ backgroundImage: "url('/images/img_1.jpeg')" }}
              />
              <div
                className="bg-cover bg-center rounded h-[168px]"
                style={{ backgroundImage: "url('/images/img_2.jpeg')" }}
              />
              <div
                className="bg-cover bg-center rounded h-[168px]"
                style={{ backgroundImage: "url('/images/img_3.jpeg')" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section data-aos="fade-up" className="py-16 md:py-24 bg-[#F1EAE0]">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-stretch">
            {/* Vision + Mission cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#0E1A30] text-white p-8 rounded relative">
                <div className="text-4xl mb-4 opacity-20 font-serif italic">
                  Our
                </div>
                <h3 className="font-mono text-lg tracking-widest uppercase text-[#C6963F] mb-4">
                  Vision
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  To build a <strong>multi-category apparel company</strong>{" "}
                  known for{" "}
                  <strong>
                    consistency, retail closeness, and long-term reliability
                  </strong>
                  , growing with discipline and strengthening the foundations
                  that have guided our journey since <strong>1999</strong>.
                </p>
              </div>
              <div className="bg-[#E8E1D5] p-8 rounded">
                <div className="text-4xl mb-4 opacity-30 font-serif italic">
                  Our
                </div>
                <h3 className="font-mono text-lg tracking-widest uppercase text-[#0E1A30] mb-4">
                  Mission
                </h3>
                <p className="text-[#2B2820]/80 text-sm leading-relaxed">
                  To deliver{" "}
                  <strong>well-designed, commercially viable apparel</strong>{" "}
                  backed by strong construction quality and dependable service.
                  Guided by{" "}
                  <strong>
                    direct retail engagement, market feedback, and disciplined
                    execution
                  </strong>
                  , we aim to enable continuous growth.
                </p>
              </div>
            </div>
            {/* Right manifesto */}
            <div className="flex flex-col justify-center">
              <h2 className="font-serif-luxury font-normal text-3xl md:text-4xl leading-tight mb-6 normal-case not-italic text-[#0E1A30]">
                Built for the Long Term.
                <br />
                <em className="text-[#A87B31] italic">Built with Retail.</em>
              </h2>
              <div className="space-y-3 text-[#6B665A] text-sm md:text-base leading-relaxed border-l-2 border-[#A87B31] pl-6">
                <p>We are not driven by seasonal noise or short-term volume.</p>
                <p>
                  Our focus remains steady — strong product development,
                  disciplined systems, direct retail engagement, and responsible
                  expansion.
                </p>
                <p>
                  Every store operates differently. Every market behaves
                  differently.
                </p>
                <p>
                  Our strength lies in understanding both — and responding with
                  clarity and commercial sensibility.
                </p>
                <p>
                  Sustainable businesses are built on consistency, partnership,
                  and mutual growth.
                </p>
                <p className="font-semibold text-[#0E1A30]">
                  If your approach to retail values structure, reliability, and
                  long-term thinking, we look forward to building the next phase
                  together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section
        data-aos="fade-up"
        className="py-16 md:py-24 bg-[#0E1A30] text-white"
      >
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#C6963F] mb-4">
                Brand Philosophy
              </div>
              <h2 className="font-serif-luxury font-normal text-3xl md:text-4xl leading-tight mb-4 normal-case not-italic">
                Five beliefs.
                <br />
                <em className="text-[#C6963F] italic">Quietly held.</em>
              </h2>
              <p className="text-white/60 leading-relaxed mb-8 text-sm md:text-base">
                Our philosophy is grounded in a few simple but firm beliefs:
              </p>
              <div className="space-y-4">
                {beliefs.map((b) => (
                  <div key={b.num} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 border border-white/20 rounded flex items-center justify-center flex-shrink-0 font-mono font-bold text-[#C6963F]">
                      {b.num}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm mb-1">
                        {b.title}
                      </p>
                      <p className="text-white/55 text-sm leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-white/60 text-sm italic">
                This is how we have grown —{" "}
                <strong className="text-white">
                  quietly, consistently, and with intention.
                </strong>
              </p>
            </div>
            <div>
              <div className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#C6963F] mb-8">
                Why Us
              </div>
              <div className="space-y-6">
                {whyUsPoints.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <WhyUsIcon path={item.icon} />
                    <div>
                      <p className="font-semibold text-white text-sm mb-1">
                        {item.title}
                      </p>
                      <p className="text-white/55 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
