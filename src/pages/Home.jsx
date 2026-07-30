import React from "react";
import Hero from "../components/Hero";
import CategoriesStrip from "../components/CategoriesStrip";
import Story from "../components/Story";
import Collections from "../components/Collections";
import RetailFirst from "../components/RetailFirst";
import Lookbook from "../components/Lookbook";
import Strengths from "../components/Strengths";
import Philosophy from "../components/Philosophy";
import QuoteBlock from "../components/QuoteBlock";
import Contact from "../components/Contact";
import BrandCollaborators from "../components/BrandCollab";

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoriesStrip />
      <Story />
      {/* <BrandCollaborators /> */}
      <Collections />
      <RetailFirst />
      {/* <Lookbook /> */}
      <Strengths />
      <Philosophy />
      <QuoteBlock />
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
