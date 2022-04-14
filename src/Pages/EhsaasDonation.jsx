import React from 'react'
import Layout from '../Layout';
import ImageHeaderForPaymentForms from '../Utils/ImageHeaderForPaymentForms'
import DonateImage from '../Assets/Images/ehsaas-header-image.jpg'
import LayoutForPaymentForms from '../Utils/LayoutForPaymentForms';
import EhsaasDonationPaymentForm from '../Components/EhsaasDonation/EhsaasDonationPaymentForm';


const EhsaasDonation = () => {


    const headingLine1 = 'Donate to'
    const headingLine2 = 'Ehsaas Programme'
    // const paragraph = 'Suspendisse iaculis nulla turpis, id varius magna semper et. Nunc a nisl turpis. Nam id sagittis libero. Sed id ullamcorper ante. Suspendisse tempus finibus turpis, malesuada eleifend risus gravida sit amet.'


    return (
        <Layout >
            <ImageHeaderForPaymentForms backGroundImage={DonateImage} EhsaasHeaderText={true} />
            <LayoutForPaymentForms headingLine1={headingLine1} headingLine2={headingLine2} >
                <EhsaasDonationPaymentForm />
            </LayoutForPaymentForms>
        </Layout>
    );
}
export default React.memo(EhsaasDonation);