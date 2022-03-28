import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
// import heroSliderData from '../assets/fake-data/data-slider';
// import Slider from '../components/slider/Slider';
import liveAuctionData from "../assets/fake-data/data-live-auction";
import LiveAuction from "../components/layouts/LiveAuction";
import TopSeller from "../components/layouts/TopSeller";
import topSellerData from "../assets/fake-data/data-top-seller";
import TodayPicks from "../components/layouts/TodayPicks";
import todayPickData from "../assets/fake-data/data-today-pick";
// import PopularCollection from "../components/layouts/PopularCollection";
import popularCollectionData from "../assets/fake-data/data-popular-collection";
import Create from "../components/layouts/Create";
import HeaderStyle2 from "../components/header/HeaderStyle2";
import SliderStyle4 from "./../components/slider/SliderStyle4";
import PopularCollection from "./../components/layouts/PopularCollection";

const Home01 = () => {
  return (
    <div className="home-7 home-6">
      {/* <Header /> */}
      <HeaderStyle2 />
      <SliderStyle4 />
      {/* <Slider data={heroSliderData} /> */}
      <PopularCollection data={popularCollectionData} />
      <LiveAuction data={liveAuctionData} />
      {/* <TopSeller data={topSellerData} /> */}
      <TodayPicks data={todayPickData} />
      {/* <PopularCollection data={popularCollectionData} /> */}
      <Create />
      <Footer />
    </div>
  );
};

export default Home01;
