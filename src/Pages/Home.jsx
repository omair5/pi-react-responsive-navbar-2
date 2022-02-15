import React, { useState } from "react";
import Layout from "../Layout";
import IntroSection from "../Components/Home/IntroSection";
import AboutReliefFunds from "../Components/Home/AboutReliefFunds";
import { useLocation, useNavigate } from "react-router";
import PaymentSuccessfulModal from '../Components/Payments/PaymentSuccessfulmodal';
import { useEffect } from "react";



const Home = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [openSuccessDialog, setopenSuccessDialog] = useState(false);


  useEffect(() => {
    if (location.search.includes('resultIndicator') && location.search.includes('sessionVersion') && sessionStorage.getItem('amount') && sessionStorage.getItem('currency') && sessionStorage.getItem('description')) {
      setopenSuccessDialog(true)
    }
  }, [location])


  // Handle Success Modal
  const handleCloseModal = () => {
    setopenSuccessDialog(false)
    navigate('/')
    sessionStorage.clear()

  }


  return (
    <Layout>
      <IntroSection />
      <AboutReliefFunds />

      <PaymentSuccessfulModal openModal={openSuccessDialog} closeModal={handleCloseModal} />

    </Layout>
  );
};
export default React.memo(Home);