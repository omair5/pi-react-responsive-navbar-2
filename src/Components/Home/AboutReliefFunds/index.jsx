import React from 'react';
import Hands from "../../../Assets/Images/hands.png";
import styles from "./index.module.css"
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import Button from '../../../Utils/Button';
import { Link } from 'react-router-dom';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import Paper from '@material-ui/core/Paper';


const AboutReliefFunds = () => {
    return (
        <div className={styles.mainContainer}>
            <Container maxWidth="lg" className={styles.wrapper}>
                <Grid container className={styles.header}>
                    <Grid xs={12} md={7}>
                        <h2 >
                            About NBP <br />
                            Donation Programme
                        </h2>
                        <p>
                            On the Prime Minister of Pakistan’s special instructions, a fund has been established to solicit public donations for expansion of the Prime Minister’s Mobile Langar/Soup kitchen initiative. Many of the recipients are the labour class including the elderly, differently abled, labourers, daily wage earners, women and children. You can deposit your donations in any of the banks’ branches across the country or online.
                        </p>
                    </Grid>
                </Grid>

                <Grid container spacing={3} className={styles.card_container}>
                    <Grid xs={12} md={4} className={styles.marginRight}>
                        <Link to="/donation-programmes" style={{ textDecoration: 'none' }}>
                            <Paper className={styles.card} elevation={3}>
                                <div>
                                    <img src={Hands} alt="donate logo" />
                                </div>
                                <div className={styles.rightColumn}>
                                    <h2>DONATION</h2>
                                    <p>Through this fund, we are trying to reach out as many needy people as possible.</p>
                                    {/* this is custom button component which accepts following props (innerText, type, HandleButtonClick, color, bgColor, width )*/}
                                    <Button innerText='Donate Now' color='#0d1821' bgColor='white' />
                                </div>
                            </Paper>
                        </Link>
                    </Grid>

                    <Grid xs={12} md={4} className={styles.feePayment}>
                        <Link to='/booster-fee-payment' style={{ textDecoration: 'none' }}>
                            <Paper className={styles.card} elevation={3}>
                                <div>
                                    {/* <img src={Booster} alt="covid dose" /> */}
                                    <CreditCardIcon className={styles.creditCard} />
                                </div>
                                <div className={styles.rightColumn}>
                                    <h2>FEE PAYMENT</h2>
                                    <p>Through this fund, we are trying to reach out as many needy people as possible.</p>
                                    {/* this is custom button component which accepts following props (innerText, type, HandleButtonClick, color, bgColor, width ) */}
                                    <Button innerText='Fee Payment' color='#0d1821' bgColor='white' />
                                </div>
                            </Paper>
                        </Link>
                    </Grid>
                </Grid>

                <hr />

                {/* OUR CHALLENGE */}
                <div className={styles.ourChallenge}>
                    <h2>Our Objective</h2>
                    <Grid container spacing={3}>
                        <Grid xs={12} md={4}>
                            <p> Ehsaas programme is a flagship social protection lead towards a welfare state that is embodied in Constitution of Pakistan.</p>
                            <p> It is to create precision safety nets; promoting financial inclusion and access to digital services; supporting the economic empowerment of women; focusing on the central role of human capital formation for poverty eradication, economic growth and sustainable development; and overcoming financial barriers to accessing health and post-secondary education.</p>
                        </Grid>
                    </Grid>
                </div>
            </Container>

        </div>
    );
}

export default React.memo(AboutReliefFunds);