import { Container, Grid } from '@material-ui/core';
import React from 'react';
import styles from './index.module.css'
import Slide from '@material-ui/core/Slide';


const LayoutForPaymentForms = ({ headingLine1, headingLine2, paragraph, children }) => {
    return (
        <div className={styles.mainContainer}>
            <Container maxWidth="lg" className={styles.wrapper}>
                <Slide direction="right" in={true} timeout={1500} mountOnEnter unmountOnExit >
                    <div className={styles.heading}>
                        <p>{headingLine1}</p>
                        <p>{headingLine2}</p>
                    </div>
                </Slide>
                <Grid container >
                    <Grid xs={12} md={7}>
                        <p className={styles.paragraph}>
                            {paragraph}
                        </p>
                    </Grid>
                </Grid>

                {children}

            </Container>
        </div >
    );
}

export default React.memo(LayoutForPaymentForms);