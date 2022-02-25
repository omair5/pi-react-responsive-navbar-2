import React from "react";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import AlfalahLogo from "../../../Assets/Images/baf.png";
import Grid from "@material-ui/core/Grid";
import styles from './index.module.css'
import LargeVaccineImg from '../../../Assets/Images/vaccine-2-x.png'



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
                                        The Prime Minister's <br />
                                        Covid 19 Pandemic <br />
                                        Relief Fund 2020
                                    </h1>
                                </strong>
                                <p>
                                    you can donate from across the globe to the prime Minister's
                                    Covid-19 pandemic relief fund with your debit card/credit Card.
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