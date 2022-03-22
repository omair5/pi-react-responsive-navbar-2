import React from 'react'
import styles from './index.module.css'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '../../../Utils/Button';
import { Link } from 'react-router-dom';
import HandsImg from "../../../Assets/Images/hands-img.svg";
import EhsaasImg from '../../../Assets/Images/ehsaas-img.svg'
import Paper from '@material-ui/core/Paper';




const DonationCardContainer = () => {
    return (
        <Container maxWidth="lg" className={styles.container}>
            <Grid container spacing={3} className={styles.card_container}>
                <Grid xs={12} md={4} className={styles.marginRight}>
                    <Link to='/donate-to-pm-relief-fund' style={{ textDecoration: 'none' }}>
                        <Paper className={styles.card} elevation={3}>
                            <div>
                                <img src={HandsImg} alt="donate logo" style={{ color: 'white' }} />
                            </div>
                            <div className={styles.rightColumn}>
                                <h4>Donate in PM COVID-19 Relief Fund</h4>
                                <p>Through this fund, we are trying to reach out as many needy people as possible.</p>
                                {/* this is custom button component which accepts following props (innerText, type, HandleButtonClick, color, bgColor, width )*/}
                                <Button innerText='Donate Now' color='#0d1821' bgColor='white' />
                            </div>
                        </Paper>
                    </Link>
                </Grid>

                <Grid xs={12} md={4} className={styles.feePayment}>
                    <Link to="/donate-to-ehsaas-programme" style={{ textDecoration: 'none' }}>
                        <Paper className={styles.card} elevation={3}>
                            <div>
                                <img src={EhsaasImg} alt="covid dose" />
                            </div>
                            <div className={styles.rightColumn}>
                                <h4>Donate in Ehsaas Programme</h4>
                                <p>Through this fund, we are trying to reach out as many needy people as possible.</p>
                                {/* this is custom button component which accepts following props (innerText, type, HandleButtonClick, color, bgColor, width ) */}
                                <Button innerText='Donate Now' color='#0d1821' bgColor='white' />
                            </div>
                        </Paper>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
}

export default React.memo(DonationCardContainer);