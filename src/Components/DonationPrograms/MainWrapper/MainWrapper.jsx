import React from 'react'
import styles from './index.module.css'
import Container from '@material-ui/core/Container';
import DonationCardContainer from '../DonationCardContainer/DonationCardContainer';


const MainWrapper = () => {
    return (
        <div className={styles.mainContainer}>
            <Container maxWidth="lg" className={styles.headingWrapper}>
                <h5>National Bank of Pakistan</h5>
                <h1>Donation Programmes</h1>
            </Container>

            <DonationCardContainer />
        </div>
    );
}

export default React.memo(MainWrapper);