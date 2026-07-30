import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <section className="bg-[#0E1A30] py-16 md:py-20" id="contact">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        {/* ========== BANNER ========== */}
        <div
          data-aos="fade-up"
          className="relative overflow-hidden rounded-2xl mb-12 md:mb-16"
        >
          {/* Background Image with overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop&crop=center')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E1A30]/95 via-[#0E1A30]/80 to-[#0E1A30]/60" />

          {/* Content */}
          <div className="relative z-10 px-6 md:px-10 py-12 md:py-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3.5 mb-3 justify-center md:justify-start">
                <div className="w-10 h-[2px] bg-[#C6963F]" />
                <span className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-[#C6963F]">
                  Let’s Build Together
                </span>
              </div>
              <h2 className="font-serif-luxury text-2xl md:text-3xl lg:text-4xl font-normal text-[#FDFAF5] leading-tight">
                Ready to stock <em className="text-[#C6963F] italic">Onzone</em>
                ?
              </h2>
              <p className="text-[#FDFAF5]/70 max-w-lg text-sm md:text-base mt-2">
                Connect with our trade team to explore the AW’25 collection,
                request samples, or discuss partnership opportunities.
              </p>
            </div>
            <a
              href="#contact-form"
              className="flex-shrink-0 inline-block bg-[#C6963F] text-[#0E1A30] font-mono text-xs tracking-[0.15em] uppercase font-bold px-8 py-3.5 rounded-full shadow-lg hover:bg-[#a87d2a] transition-all duration-300 transform hover:scale-105 no-underline"
            >
              Start a Conversation →
            </a>
          </div>
        </div>

        {/* ========== Existing Contact Grid ========== */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[60px] bg-[#F1EAE0] rounded-2xl p-6 md:p-10"
        >
          {/* Left: info */}
          <div>
            <div className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#A87B31] mb-3.5">
              Trade Enquiries
            </div>
            <h2 className="font-serif-luxury font-normal text-3xl md:text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.08] mb-4 md:mb-[18px] normal-case not-italic">
              Build the next season{" "}
              <em className="text-[#A87B31] italic">with us.</em>
            </h2>
            <p className="text-[#6B665A] leading-[1.7] mb-8 text-sm md:text-base">
              If your approach to retail values structure, reliability and
              long-term thinking, we look forward to building the next season
              together.
            </p>

            {[
              ["WhatsApp / Call", "+91 99160 82518"],
              ["Email", "enquiries@houseofonzone.com"],
              ["Retail", "www.houseofonzone.com"],
              ["Social", "@houseofonzone"],
            ].map(([label, val]) => (
              <div
                key={label}
                className="flex flex-col sm:flex-row justify-between border-b border-[rgba(14,26,48,0.12)] py-3 font-mono text-xs md:text-[0.75rem] tracking-[0.05em] gap-1 sm:gap-0"
              >
                <span className="text-[#6B665A]">{label}</span>
                <span className="text-[#2B2820] break-all sm:break-normal">
                  {val}
                </span>
              </div>
            ))}
          </div>

          {/* Right: form */}
          <div
            id="contact-form"
            className="bg-[#E8E1D5] p-6 md:p-10 rounded-xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              {["Your Name", "Business Name, Store Type"].map((ph) => (
                <div key={ph}>
                  <label className="block font-mono text-[0.55rem] md:text-[0.6rem] tracking-[0.12em] uppercase text-[#6B665A] mb-1.5">
                    {ph}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#FDFAF5] border-none border-b border-[rgba(14,26,48,0.12)] py-2.5 font-sans text-[0.9rem] outline-none focus:border-b-2 focus:border-[#A87B31] transition-all"
                  />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              {["City", "Phone"].map((ph) => (
                <div key={ph}>
                  <label className="block font-mono text-[0.55rem] md:text-[0.6rem] tracking-[0.12em] uppercase text-[#6B665A] mb-1.5">
                    {ph}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#FDFAF5] border-none border-b border-[rgba(14,26,48,0.12)] py-2.5 font-sans text-[0.9rem] outline-none focus:border-b-2 focus:border-[#A87B31] transition-all"
                  />
                </div>
              ))}
            </div>
            <div className="mb-5">
              <label className="block font-mono text-[0.55rem] md:text-[0.6rem] tracking-[0.12em] uppercase text-[#6B665A] mb-1.5">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-[#FDFAF5] border-none border-b border-[rgba(14,26,48,0.12)] py-2.5 font-sans text-[0.9rem] outline-none focus:border-b-2 focus:border-[#A87B31] transition-all"
              />
            </div>
            <div className="mb-6">
              <label className="block font-mono text-[0.55rem] md:text-[0.6rem] tracking-[0.12em] uppercase text-[#6B665A] mb-1.5">
                Message
              </label>
              <textarea className="w-full bg-[#FDFAF5] border-none border-b border-[rgba(14,26,48,0.12)] py-2.5 font-sans text-[0.9rem] outline-none resize-none h-20 focus:border-b-2 focus:border-[#A87B31] transition-all" />
            </div>
            <button className="font-mono text-[0.68rem] tracking-[0.08em] uppercase bg-[#0E1A30] text-[#FDFAF5] py-3.5 px-7 border-none cursor-pointer rounded-[1px] w-full sm:w-auto hover:bg-[#A87B31] transition-colors">
              Request Catalogue
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
