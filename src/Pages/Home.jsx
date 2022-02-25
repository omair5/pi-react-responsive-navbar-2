import React, { useState } from "react";
import Layout from "../Layout";
import IntroSection from "../Components/Home/IntroSection";
import AboutReliefFunds from "../Components/Home/AboutReliefFunds";
import { useLocation, useNavigate } from "react-router";
import PaymentSuccessfulModal from '../Components/Payments/PaymentSuccessfulmodal';
import { useEffect } from "react";
import { base_url } from "../Config"
import { toast } from 'react-toastify';
import axios from "axios"



const Home = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [openSuccessDialog, setopenSuccessDialog] = useState(false);
  const [backdrop, setbackdrop] = useState(false)


  useEffect(() => {
    if (location.search.includes('resultIndicator') && location.search.includes('sessionVersion') && sessionStorage.getItem('amount') && sessionStorage.getItem('currency') && sessionStorage.getItem('description')) {
      setopenSuccessDialog(true)
    }
  }, [location])


  const DownloadPdf = () => {
    setbackdrop(true)
    const body = {
      orderId: sessionStorage.getItem('id'),
      transactionType: sessionStorage.getItem('transactionType')
    }
    axios.post(`${base_url}/api/payment/getReceipt`, body)
      .then((res) => {
        setbackdrop(false)
        if (res.data.code === 200) {
          let DownloadElement = document.createElement("a");
          DownloadElement.href = "data:application/pdf;base64," + res.data.data;
          DownloadElement.download = "Receipt.pdf";
          DownloadElement.click();
        }
        else {
          const errorDescription = res.data.message
          toast.error(errorDescription)
        }
      }).catch((err) => {
        console.log(err)
        setbackdrop(false)
        toast.error('Server Error')
      });
  };


  // Handle Success Modal
  const handleCloseModal = () => {
    console.log('clicked')
    setopenSuccessDialog(false)
    navigate('/')
    sessionStorage.clear()
  }


  return (
    <Layout>
      <IntroSection />
      <AboutReliefFunds />

      <PaymentSuccessfulModal openModal={openSuccessDialog} closeModal={handleCloseModal} HandlePdfDownload={DownloadPdf} circularProgress={backdrop} />

    </Layout>
  );
};
export default React.memo(Home);