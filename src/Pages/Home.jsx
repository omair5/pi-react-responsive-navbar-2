import React from "react";
import Layout from "../Layout";
import IntroSection from "../Components/Home/IntroSection";
import AboutReliefFunds from "../Components/Home/AboutReliefFunds";


const Home = () => {
  return (
    <Layout>
      <IntroSection />
      <AboutReliefFunds />
    </Layout>
  );
};
export default React.memo(Home);