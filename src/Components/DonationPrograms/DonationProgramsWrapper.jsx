import React from 'react'
import styles from './index.module.css'
import Container from '@material-ui/core/Container';
import ProgrammesPageCardLayout from '../../Utils/ProgrammesPageCardLayout';
import { DonationProgrammeCardData } from '../../JsUtils/DonationProgrammeCardData'

const DonationProgramsWrapper = () => {
    return (
        <div className={styles.mainContainer}>
            <Container maxWidth="lg" className={styles.headingWrapper}>
                <h5>National Bank of Pakistan</h5>
                <h1>Donation Programmes</h1>
            </Container>

            <ProgrammesPageCardLayout cardData={DonationProgrammeCardData} />
        </div>
    );
}

export default React.memo(DonationProgramsWrapper);