import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Process = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      {/* ===== INDIAN TRICOLOR ACCENT BAR ===== */}
      <div className="w-full h-1.5 bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808]" />

      {/* ========== SECTION 1 – WHY US (NEW IMAGE) ========== */}
      <section className="relative bg-[#0E1A30] bg-[url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600')] bg-cover bg-center bg-blend-overlay text-[#FDFAF5] py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0E1A30]/75 -z-0" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-[2px] bg-[#C6963F]" />
              <span className="font-mono text-[0.8rem] font-bold tracking-[0.22em] uppercase text-[#C6963F]">
                Why Us
              </span>
            </div>
            <h2 className="font-serif-luxury font-normal text-3xl md:text-[clamp(2rem,3.5vw,3.2rem)] leading-[1.1] mb-5">
              Retail is not just a channel for us;
              <br />
              <span className="text-[#C6963F]">it is the foundation</span> of
              our business.
            </h2>
            <p className="text-white/80 leading-[1.8] mb-6 text-sm md:text-base">
              Today we work directly with 2,500+ active retail stores, across
              formats ranging from 200 sq. ft. outlets to 100,000 sq. ft.
              large-format stores, including standalone retailers, multi-outlet
              chains, and export partners.
            </p>
            <p className="text-white/80 leading-[1.8] mb-6 text-sm md:text-base">
              Direct engagement allows us to understand real demand patterns,
              regional variations, pricing realities, and on-ground challenges
              without distortion.
            </p>
            <p className="text-white/80 leading-[1.8] mb-8 text-sm md:text-base">
              We believe growth is strongest when it is mutual.
              <br />
              <span className="text-[#C6963F] font-serif-luxury text-xl italic">
                We grow with our retailers, not over them.
              </span>
              <br />
              For us, there is no small or large client. Only long-term
              partnerships.
            </p>
            <div className="grid grid-cols-3 gap-5 md:gap-8">
              {[
                { val: "2,500+", label: "Active Retail Partners" },
                { val: "100K+", label: "Shirts In Stock" },
                { val: "50K+", label: "Trousers & Denims" },
              ].map((stat, idx) => (
                <div
                  key={stat.label}
                  data-aos="fade-up"
                  data-aos-delay={200 + idx * 100}
                  className="border-l border-white/20 pl-4 md:pl-[18px] transition-all hover:border-[#C6963F] hover:pl-6"
                >
                  <b className="font-serif-luxury text-xl md:text-[1.8rem] block mb-1">
                    {stat.val}
                  </b>
                  <span className="font-mono text-[0.55rem] md:text-[0.6rem] tracking-[0.1em] uppercase text-white/50">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2 – BRAND PHILOSOPHY ========== */}
      <section className="bg-[#F5F0E8] text-[#2C1E16] py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-[2px] bg-[#8B5A2B]" />
              <span className="font-mono text-[0.8rem] font-bold tracking-[0.22em] uppercase text-[#8B5A2B]">
                Brand Philosophy
              </span>
            </div>
            <h2 className="font-serif-luxury font-normal text-3xl md:text-[clamp(2rem,3.5vw,3.2rem)] leading-[1.1] mb-6">
              Our philosophy is grounded in a few
              <br />
              <span className="text-[#8B5A2B]">simple but firm</span> beliefs:
            </h2>
            <ul className="space-y-5">
              {[
                "Growth Should Be Earned, Not Announced – We focus on strengthening product and retail trust before seeking visibility.",
                "Foundations Before Noise – Consistency in product and disciplined execution matter more than short-term attention.",
                "Relationships Before Scale – Direct conversations, active listening, and quick responses build stronger partnerships.",
                "Improvement is Continuous – We constantly refine and evolve rather than expanding carelessly.",
                "Consistency Builds Credibility – Long-term trust is earned through reliability in quality, service, and commitments.",
              ].map((item, idx) => (
                <li
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={200 + idx * 80}
                  className="flex items-start gap-4 border-b border-[#8B5A2B]/20 pb-4 last:border-0 last:pb-0"
                >
                  <span className="text-[#8B5A2B] font-mono text-lg font-bold">
                    {idx + 1}.
                  </span>
                  <span className="text-[#2C1E16]/80 leading-relaxed text-sm md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="mt-8 text-[#8B5A2B] font-serif-luxury text-xl italic"
            >
              This is how we have grown – quietly, consistently, and with
              intention.
            </p>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3 – STRENGTH (NEW IMAGE) ========== */}
      <section className="relative bg-[#1A2F3A] bg-[url('https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600')] bg-cover bg-center bg-blend-overlay text-[#F0E6D3] py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#1A2F3A]/85 -z-0" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-[2px] bg-[#E6B17E]" />
              <span className="font-mono text-[0.8rem] font-bold tracking-[0.22em] uppercase text-[#E6B17E]">
                Strength
              </span>
            </div>
            <h2 className="font-serif-luxury font-normal text-3xl md:text-[clamp(2rem,3.5vw,3.2rem)] leading-[1.1] mb-6">
              Our network spans:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors"
              >
                <h3 className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-[#E6B17E] mb-3">
                  Markets
                </h3>
                <ul className="space-y-2 text-[#F0E6D3]/80">
                  <li>• Tier 1 metropolitan cities</li>
                  <li>• Tier 2 & Tier 3 growth markets</li>
                  <li>• Emerging semi-urban belts</li>
                </ul>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors"
              >
                <h3 className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-[#E6B17E] mb-3">
                  Retail Formats
                </h3>
                <ul className="space-y-2 text-[#F0E6D3]/80">
                  <li>• Standalone retailers</li>
                  <li>• Compact retail stores (200 sq. ft.)</li>
                  <li>• Export partnerships</li>
                </ul>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="border-l-2 border-[#E6B17E] pl-6 py-2"
            >
              <p className="font-serif-luxury text-xl text-[#E6B17E] italic mb-2">
                More than fabric. More than stitching.
              </p>
              <p className="text-[#F0E6D3]/70 text-sm md:text-base">
                Our systems adapt to regional buying behaviour and retail
                dynamics while maintaining product and service consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 4 – OUR PROCESS ========== */}
      <section className="bg-[#F0EEEA] text-[#2A1A1A] py-16 md:py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-[2px] bg-[#8B2A3A]" />
              <span className="font-mono text-[0.8rem] font-bold tracking-[0.22em] uppercase text-[#8B2A3A]">
                Our Process
              </span>
            </div>
            <h2 className="font-serif-luxury font-normal text-3xl md:text-[clamp(2rem,3.5vw,3.2rem)] leading-[1.1] mb-8">
              Inside <span className="text-[#8B2A3A]">OUR PROCESS</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  step: "01",
                  title: "Market Understanding & Design Direction",
                  desc: "Retail feedback and regional demand guide collection development.",
                },
                {
                  step: "02",
                  title: "Size Ratio Planning",
                  desc: "Balanced assortments minimise size imbalance and improve sell-through.",
                },
                {
                  step: "03",
                  title: "Fabric & Raw Material Procurement",
                  desc: "Centralised sourcing ensures consistency in quality and cost control.",
                },
                {
                  step: "04",
                  title: "Sampling & Pre-Production Review",
                  desc: "Fit, finish, and durability are evaluated before bulk production begins.",
                },
                {
                  step: "05",
                  title: "Structured Production & Quality Checks",
                  desc: "Defined specifications and multi-stage inspections maintain product consistency.",
                },
                {
                  step: "06",
                  title: "Warehousing & Replenishment Discipline",
                  desc: "Strategic stock holding supports availability while avoiding surplus inventory.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={200 + idx * 80}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-[#8B2A3A] hover:border-l-8"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-[#8B2A3A] text-2xl font-bold opacity-60">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-semibold text-[#2A1A1A] text-base md:text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-[#2A1A1A]/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 5 – RETAIL FIRST (NEW IMAGE) ========== */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1600')] bg-cover bg-center bg-blend-overlay text-[#FDFAF5] py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#2C2C2C]/80 -z-0" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-12 h-[2px] bg-[#A67C52]" />
              <span className="font-mono text-[0.8rem] font-bold tracking-[0.22em] uppercase text-[#A67C52]">
                Retail First
              </span>
            </div>
            <h2 className="font-serif-luxury font-normal text-3xl md:text-[clamp(2rem,3.5vw,3.2rem)] leading-[1.1] mb-5">
              We grow <em className="text-[#A67C52] italic">with our</em>{" "}
              retailers.
              <br />
              Not over them.
            </h2>
            <p className="text-white/80 leading-[1.8] mb-8 text-sm md:text-base">
              Today we work directly with 2,500+ active retail stores, across
              formats ranging from 200 sq. ft. outlets to 100,000 sq. ft.
              large-format stores — including standalone retailers, multi-outlet
              chains and export partners.
            </p>
            <div className="grid grid-cols-3 gap-5 md:gap-8">
              {[
                { val: "2,500+", label: "Direct Retail Partners" },
                { val: "100K+", label: "Shirts In Stock" },
                { val: "50K+", label: "Trousers & Denims" },
              ].map((stat, idx) => (
                <div
                  key={stat.label}
                  data-aos="fade-up"
                  data-aos-delay={200 + idx * 100}
                  className="border-l border-white/20 pl-4 md:pl-[18px] transition-all hover:border-[#A67C52] hover:pl-6"
                >
                  <b className="font-serif-luxury text-xl md:text-[1.8rem] block mb-1">
                    {stat.val}
                  </b>
                  <span className="font-mono text-[0.55rem] md:text-[0.6rem] tracking-[0.1em] uppercase text-white/50">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CULTURAL DIVIDER ========== */}
      <div className="bg-[#F5F0E8] py-4 flex items-center justify-center gap-6">
        <div className="w-16 h-[1px] bg-[#C6963F]/40" />
        <div className="flex items-center gap-2 text-[#8B5A2B]/60">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C8 4 4 8 4 12C4 16 8 20 12 22C16 20 20 16 20 12C20 8 16 4 12 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M12 6C9.5 8 8 10 8 12C8 14 9.5 16 12 18C14.5 16 16 14 16 12C16 10 14.5 8 12 6Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
          <span className="font-mono text-[0.5rem] tracking-[0.25em] uppercase">
            Crafted in India
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C8 4 4 8 4 12C4 16 8 20 12 22C16 20 20 16 20 12C20 8 16 4 12 2Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M12 6C9.5 8 8 10 8 12C8 14 9.5 16 12 18C14.5 16 16 14 16 12C16 10 14.5 8 12 6Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        </div>
        <div className="w-16 h-[1px] bg-[#C6963F]/40" />
      </div>
    </>
  );
};

export default Process;
