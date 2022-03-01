import React from 'react'
import Layout from '../Layout';
import ImageHeaderForPaymentForms from "../Utils/ImageHeaderForPaymentForms";
import LayoutForPaymentForms from "../Utils/LayoutForPaymentForms";
import BoosterHeader from '../Assets/Images/boosterHeader.png'
import PaymentConfirmationTable from '../Components/PaymentConfirmation/PaymentConfirmationTable';


const PaymentConfirmation = () => {

  const headingLine1 = 'Payment'
  const headingLine2 = 'Confirmation'

  return (

    <Layout >
      <ImageHeaderForPaymentForms backGroundImage={BoosterHeader} />
      <LayoutForPaymentForms headingLine1={headingLine1} headingLine2={headingLine2}>
        <PaymentConfirmationTable />
      </LayoutForPaymentForms>
    </Layout>
  );
}
export default React.memo(PaymentConfirmation);