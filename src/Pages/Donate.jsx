import React from 'react'
import Layout from '../Layout';
import ImageHeaderForPaymentForms from '../Utils/ImageHeaderForPaymentForms'
import DonateImage from '../Assets/Images/donate.jpg'
import LayoutForPaymentForms from '../Utils/LayoutForPaymentForms';
import DonationPaymentForm from '../Components/Donate';


const Donate = () => {
  const headingLine1 = 'Donate in'
  const headingLine2 = 'PM COVID-19 Relief Fund'
  // const paragraph = 'Suspendisse iaculis nulla turpis, id varius magna semper et. Nunc a nisl turpis. Nam id sagittis libero. Sed id ullamcorper ante. Suspendisse tempus finibus turpis, malesuada eleifend risus gravida sit amet.'


  return (
    <Layout >

      <ImageHeaderForPaymentForms backGroundImage={DonateImage} />

      <LayoutForPaymentForms headingLine1={headingLine1} headingLine2={headingLine2} >
        <DonationPaymentForm />
      </LayoutForPaymentForms>

    </Layout>
  );
}
export default React.memo(Donate);