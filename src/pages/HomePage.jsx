import React from 'react'
import SearchSection from "../components/SearchSection";
import DiscoverIndustries from "../components/DiscoverIndustries";
import WhyLoveUs from '../components/WhyLoveUs';
import Avator from '../components/Avator';
import TopPicks from '../components/TopPicks';

function HomePage() {
  return (
    <div>
      <SearchSection/>
      <DiscoverIndustries/>
      <WhyLoveUs/>
      <Avator/>
      <TopPicks/>
      
    </div>
  )
}

export default HomePage
