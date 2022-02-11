import { Container } from '@material-ui/core';
import React from 'react';
import styles from './index.module.css'
import Slide from '@material-ui/core/Slide';


const ImageHeaderForPaymentForms = ({ backGroundImage }) => {
    return (
        <div className={styles.bgImage} style={{ backgroundImage: `url(${backGroundImage}` }}>
            <Container maxWidth={"lg"}>
                <strong>
                    <Slide direction="right" in={true} timeout={1500} mountOnEnter unmountOnExit>
                        <h1>
                            The Prime Minister's <br />
                            Covid 19 Panademic <br />
                            Releif Fund 2021
                        </h1>
                    </Slide>
                </strong>
            </Container>
        </div>
    );
}

export default React.memo(ImageHeaderForPaymentForms);