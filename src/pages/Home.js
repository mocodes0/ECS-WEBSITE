import React from "react";
import {
  Header,
  Navbar,
  CarouselSlider,
  Banner,
  DataGrid,
  MarketSpeciality,
  Footer,
  Globe,
} from "../components";

function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <CarouselSlider />
      <DataGrid />
      <Banner />
      <Globe />
      <MarketSpeciality />
      <Footer />
    </div>
  );
}

export default Home;
