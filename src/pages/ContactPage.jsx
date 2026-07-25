import React, { useEffect } from 'react';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactItems = [
    {
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      label: 'WhatsApp / Call',
      value: '+91 99160 82518',
      link: 'tel:+919916082518',
    },
    {
      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      label: 'Email',
      value: 'enquiries@houseofonzone.com',
      link: 'mailto:enquiries@houseofonzone.com',
    },
    {
      icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
      label: 'Retail Website',
      value: 'www.houseofonzone.com',
      link: 'https://www.houseofonzone.com',
    },
    {
      icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
      label: 'Social',
      value: '@houseofonzone',
      link: '#',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0E1A30] text-white py-20 md:py-28">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <div className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-[#C6963F] mb-4">Trade Enquiries</div>
          <h1 className="font-serif-luxury text-4xl md:text-6xl leading-tight mb-6 normal-case not-italic">
            Build the next season<br />
            <em className="text-[#C6963F] italic">with us.</em>
          </h1>
          <p className="text-white/70 max-w-xl text-base leading-relaxed">
            If your approach to retail values structure, reliability and long-term thinking, we look forward to building the next season together.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-[#F1EAE0]">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left: Contact info */}
            <div>
              <h2 className="font-serif-luxury font-normal text-2xl md:text-3xl leading-tight mb-8 normal-case not-italic text-[#0E1A30]">
                Get in touch
              </h2>

              {/* Contact items */}
              <div className="space-y-5 mb-12">
                {contactItems.map(({ icon, label, value, link }) => (
                  <a
                    key={label}
                    href={link}
                    className="flex items-start gap-4 group no-underline"
                  >
                    <div className="w-11 h-11 rounded-full bg-[#0E1A30] flex items-center justify-center flex-shrink-0 group-hover:bg-[#A87B31] transition-colors">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#C6963F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:stroke-white transition-colors">
                        <path d={icon} />
                      </svg>
                    </div>
                    <div>
                      <p className="font-mono text-[0.62rem] tracking-widest uppercase text-[#6B665A] mb-0.5">{label}</p>
                      <p className="text-[#0E1A30] font-medium text-sm md:text-base group-hover:text-[#A87B31] transition-colors">{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Address */}
              <div className="border-t border-[rgba(14,26,48,0.12)] pt-8">
                <div className="font-mono text-[0.62rem] tracking-widest uppercase text-[#6B665A] mb-3">Our Location</div>
                <p className="text-[#0E1A30] text-sm md:text-base leading-relaxed">
                  Bangalore · Karnataka · India
                </p>
                <p className="text-[#6B665A] text-sm mt-4 leading-relaxed">
                  Working with retail partners across India — from 200 sq. ft. independent stores to 100,000 sq. ft. large-format outlets.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-[#E8E1D5] p-6 md:p-10 rounded">
              <div className="font-mono text-[0.62rem] tracking-widest uppercase text-[#6B665A] mb-6">Send an Enquiry</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {[
                  { label: 'Your Name', type: 'text' },
                  { label: 'Business Name / Store Type', type: 'text' },
                ].map(({ label, type }) => (
                  <div key={label}>
                    <label className="block font-mono text-[0.58rem] tracking-[0.12em] uppercase text-[#6B665A] mb-2">{label}</label>
                    <input
                      type={type}
                      className="w-full bg-[#FDFAF5] border-0 border-b-2 border-[rgba(14,26,48,0.12)] px-0 py-2.5 font-sans text-[0.9rem] outline-none focus:border-[#A87B31] transition-colors"
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                {[
                  { label: 'City', type: 'text' },
                  { label: 'Phone Number', type: 'tel' },
                ].map(({ label, type }) => (
                  <div key={label}>
                    <label className="block font-mono text-[0.58rem] tracking-[0.12em] uppercase text-[#6B665A] mb-2">{label}</label>
                    <input
                      type={type}
                      className="w-full bg-[#FDFAF5] border-0 border-b-2 border-[rgba(14,26,48,0.12)] px-0 py-2.5 font-sans text-[0.9rem] outline-none focus:border-[#A87B31] transition-colors"
                    />
                  </div>
                ))}
              </div>

              <div className="mb-5">
                <label className="block font-mono text-[0.58rem] tracking-[0.12em] uppercase text-[#6B665A] mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full bg-[#FDFAF5] border-0 border-b-2 border-[rgba(14,26,48,0.12)] px-0 py-2.5 font-sans text-[0.9rem] outline-none focus:border-[#A87B31] transition-colors"
                />
              </div>

              <div className="mb-5">
                <label className="block font-mono text-[0.58rem] tracking-[0.12em] uppercase text-[#6B665A] mb-2">Type of Enquiry</label>
                <select className="w-full bg-[#FDFAF5] border-0 border-b-2 border-[rgba(14,26,48,0.12)] px-0 py-2.5 font-sans text-[0.9rem] outline-none focus:border-[#A87B31] transition-colors appearance-none cursor-pointer">
                  <option value="">Select one…</option>
                  <option>Become a Retail Partner</option>
                  <option>Request Product Catalogue</option>
                  <option>Bulk / Wholesale Order</option>
                  <option>General Enquiry</option>
                </select>
              </div>

              <div className="mb-7">
                <label className="block font-mono text-[0.58rem] tracking-[0.12em] uppercase text-[#6B665A] mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-[#FDFAF5] border-0 border-b-2 border-[rgba(14,26,48,0.12)] px-0 py-2.5 font-sans text-[0.9rem] outline-none resize-none focus:border-[#A87B31] transition-colors"
                  placeholder="Tell us about your store and requirements…"
                />
              </div>

              <button className="w-full sm:w-auto font-mono text-[0.7rem] tracking-[0.1em] uppercase bg-[#0E1A30] text-[#FDFAF5] py-4 px-8 border-0 cursor-pointer rounded-sm hover:bg-[#A87B31] transition-colors">
                Send Enquiry
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-12 bg-[#0E1A30]">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: '2,500+', label: 'Retail Partners' },
              { val: '25+',    label: 'Years in Business' },
              { val: '100K+',  label: 'Shirts in Stock' },
              { val: '50K+',   label: 'Trousers & Denims' },
            ].map(stat => (
              <div key={stat.label}>
                <p className="font-serif-luxury text-3xl md:text-4xl text-[#C6963F] normal-case not-italic">{stat.val}</p>
                <p className="font-mono text-[0.6rem] tracking-widest uppercase text-white/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
