import './App.css';
import React, { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import LoadingScreen from './Utils/LoadingScreen/LoadingScreen'
import { scrollToTop } from './JsUtils/MoveToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// code splitting for pages
const AboutCovid19 = React.lazy(() => import('./Pages/AboutCovid19'));
const ContactUs = React.lazy(() => import('./Pages/ContactUs'));
const FAQS = React.lazy(() => import('./Pages/FAQS'));
const Home = React.lazy(() => import('./Pages/Home'));
const PageNotFound = React.lazy(() => import('./Pages/PageNotFound'));
const BoosterFeePayment = React.lazy(() => import('./Pages/BoosterFeePayment'));
const PaymentConfirmation = React.lazy(() => import('./Pages/PaymentConfirmation'));
const Donate = React.lazy(() => import('./Pages/Donate'));
const DonationPrograms = React.lazy(() => import('./Pages/DonationPrograms'));
const EhsaasDonationPaymentForm = React.lazy(() => import('./Pages/EhsaasDonation'));
const FeePaymentPrograms = React.lazy(() => import('./Pages/FeePaymentPrograms'));






function App() {
  const location = useLocation()
  useEffect(
    () => {
      scrollToTop()
    }, [location]
  )
  return (
    <>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booster-fee-payment" element={<BoosterFeePayment />} />
          <Route path="/aboutcovid19" element={<AboutCovid19 />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQS />} />
          <Route path="payment-confirmation" element={<PaymentConfirmation />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/donate-to-pm-relief-fund" element={<Donate />} />
          <Route path="/donation-programmes" element={<DonationPrograms />} />
          <Route path="/donate-to-ehsaas-programme" element={<EhsaasDonationPaymentForm />} />
          <Route path="/fee-payment-programmes" element={<FeePaymentPrograms />} />
        </Routes>
      </Suspense>
      <ToastContainer theme='colored' autoClose={8000} bodyClassName="toastBody" limit={5} />
    </>
  );
}
export default App; 