import React from "react";
import Layout from "../Layout";
import ImageHeaderForPaymentForms from "../Utils/ImageHeaderForPaymentForms";
import LayoutForPaymentForms from "../Utils/LayoutForPaymentForms";
import BoosterHeader from '../Assets/Images/boosterHeader.png'
import BoosterFeePaymentForm from "../Components/BoosterFeePayment/BoosterFeePaymentForm";


const BoosterFeePayment = () => {

  const headingLine1 = 'COVID-19 Booster'
  const headingLine2 = 'Vaccination Fee Payment'
  // const paragraph = 'Suspendisse iaculis nulla turpis, id varius magna semper et. Nunc a nisl turpis. Nam id sagittis libero. Sed id ullamcorper ante. Suspendisse tempus finibus turpis, malesuada eleifend risus gravida sit amet.'

  return (
    <Layout>
      <ImageHeaderForPaymentForms backGroundImage={BoosterHeader} />
      <LayoutForPaymentForms headingLine1={headingLine1} headingLine2={headingLine2} >
        <BoosterFeePaymentForm />
      </LayoutForPaymentForms>
    </Layout>
  );
};
export default React.memo(BoosterFeePayment);
