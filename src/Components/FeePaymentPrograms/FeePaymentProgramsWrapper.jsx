import React from 'react'
import styles from './index.module.css'
import Container from '@material-ui/core/Container';
import ProgrammesPageCardLayout from '../../Utils/ProgrammesPageCardLayout';
import { FeePaymentProgrammeCardData } from '../../JsUtils/FeePaymentProgrammeCardData';



const DonationProgramsWrapper = () => {
    return (
        <div className={styles.mainContainer}>
            <Container maxWidth="lg" className={styles.headingWrapper}>
                <h5>National Bank of Pakistan</h5>
                <h1>Fee Payment Programmes</h1>
            </Container>

            <ProgrammesPageCardLayout cardData={FeePaymentProgrammeCardData} />
        </div>
    );
}

export default React.memo(DonationProgramsWrapper);