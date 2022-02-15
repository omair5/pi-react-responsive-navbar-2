import React from 'react';
import Booster from "../../../Assets/Images/booster.png";
import Hands from "../../../Assets/Images/hands.png";
import styles from "./index.module.css"
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import Button from '../../../Utils/Button';
import { Link } from 'react-router-dom';



const AboutReliefFunds = () => {
    return (
        <div className={styles.mainContainer}>
            <Container maxWidth="lg" className={styles.wrapper}>
                <Grid container className={styles.header}>
                    <Grid xs={12} md={7}>
                        <h2 >
                            About Prime Minister's <br />
                            Relief Fund
                        </h2>
                        <p>
                            The Prime Minister has launched a web-portal soliciting applications from those who have lost their livelihoods as a result of the COVID-19 pandemic and has announced to commit the Prime Minister's COVID 19 relief Fund to those who will qualify for assistance. On March 31,2020 the Prime Ministers’ COVID 19 Relief fund was announced.
                        </p>
                    </Grid>
                </Grid>

                <Grid container spacing={3} className={styles.card_container}>
                    <Grid xs={12} md={4} className={styles.marginRight}>
                        <div className={styles.card}>
                            <div>
                                <img src={Hands} alt="donate logo" />
                            </div>
                            <div className={styles.rightColumn}>
                                <h4>Donate in PM’s Relief Fund</h4>
                                <p>Through this fund, we are trying to reach out as many needy people as possible.</p>
                                {/* this is custom button component which accepts following props (innerText, type, HandleButtonClick, color, bgColor, width )*/}
                                <Link to='/donate' style={{ textDecoration: 'none' }}><Button innerText='Donate Now' color='#0d1821' bgColor='white' /></Link>
                            </div>
                        </div>
                    </Grid>

                    <Grid xs={12} md={4} className={styles.feePayment}>
                        <div className={styles.card}>
                            <div>
                                <img src={Booster} alt="covid dose" />
                            </div>
                            <div className={styles.rightColumn}>
                                <h4>Covid Vaccination Booster</h4>
                                <p>Through this fund, we are trying to reach out as many needy people as possible.</p>
                                {/* this is custom button component which accepts following props (innerText, type, HandleButtonClick, color, bgColor, width ) */}
                                <Link to='/booster-fee-payment' style={{ textDecoration: 'none' }}><Button innerText='Fee Payment' color='#0d1821' bgColor='white' /></Link>
                            </div>
                        </div>
                    </Grid>
                </Grid>

                <hr />

                {/* OUR CHALLENGE */}
                <div className={styles.ourChallenge}>
                    <h2>Our Challenge</h2>
                    <Grid container spacing={3}>
                        <Grid xs={12} md={4}>
                            <p> The COVID-19 pandemic is one of the worst health and economic crises in modern history and it continues to require the best of humanity to overcome. Your donation to this fund will help stop the spread of the virus, including the highly contagious Omicron variant, to protect us all.</p>
                            <p> This ongoing health crisis, and new COVID variants, threaten everyone's way of life. The pandemic is especially difficult for people with pre-existing medical conditions, older adults, individuals experiencing homelessness, persons with disabilities, refugees and migrants, wage workers, communities of color, and those with inflexible jobs.</p>
                        </Grid>
                    </Grid>
                </div>
            </Container>

        </div>
    );
}

export default React.memo(AboutReliefFunds);