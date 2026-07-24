import React from "react";

const CategoriesStrip = () => {
  return (
    <div
      className="w-full flex flex-wrap items-center justify-center gap-4 md:gap-6 py-4 px-6 text-center font-sans text-[0.65rem] md:text-sm uppercase tracking-[0.15em] bg-[#1a2634] text-white/80"
    >
      <span>Formals</span>
      <span className="text-[#c9a96e]">·</span>
      <span>Smart Casuals</span>
      <span className="text-[#c9a96e]">·</span>
      <span>Trousers</span>
      <span className="text-[#c9a96e]">·</span>
      <span>Denims</span>
      <span className="text-[#c9a96e]">·</span>
      <span>Cargos</span>
      <span className="text-[#c9a96e]">·</span>
      <span>Club Wear</span>
      <span className="text-[#c9a96e] hidden md:inline">·</span>
      {/* Force break on mobile after Club Wear */}
      <div className="w-full md:hidden"></div>
      <span>Pyjamas</span>
    </div>
  );
};

export default CategoriesStrip;
