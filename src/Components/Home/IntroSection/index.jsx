import React from "react";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import AlfalahLogo from "../../../Assets/Images/baf.png";
import Grid from "@material-ui/core/Grid";
import styles from './index.module.css'
import LargeVaccineImg from '../../../Assets/Images/vaccine-large.png'



const IntroSection = () => {
    return (
        <div className={styles.wrapper}>
            <Container maxWidth="lg" >
                {/* column 1 */}
                <Grid container className={styles.mainContainer}>
                    <Grid xs={12} md={6} className={styles.relief_fund}>
                        <Slide direction="right" timeout={1250} in={true} mountOnEnter unmountOnExit>
                            <div>
                                <strong>
                                    <h1>
                                        National Bank of Pakistan <br />
                                        Donation Programme <br />
                                        2022
                                    </h1>
                                </strong>
                                <p>
                                    You can donate from across the globe to the
                                    National Bank of Pakistan’s Donation
                                    Programme with your debit/credit card.

                                </p>
                                <img src={AlfalahLogo} alt="AlFalah" height="50px" className={styles.alfalah_logo} />
                            </div>
                        </Slide>
                    </Grid>

                    {/* column 2 */}
                    <Grid xs={12} md={6} className={styles.ImageContaier}>
                        <Slide direction="down" timeout={1250} in={true} mountOnEnter unmountOnExit>
                            <img src={LargeVaccineImg} className={styles.covidImage} alt="get vaccinated" />
                        </Slide>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
export default React.memo(IntroSection);