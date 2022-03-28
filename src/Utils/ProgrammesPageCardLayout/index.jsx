import React from 'react'
import styles from './index.module.css'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '../Button';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import { v4 as uuidv4 } from 'uuid';

const ProgrammesPageCardLayout = ({ cardData }) => {
    return (
        <Container maxWidth="lg" className={styles.container}>
            <Grid container spacing={3} className={styles.card_container}>

                {
                    cardData.map(val => (
                        <Slide direction="up" in={true} timeout={1200} mountOnEnter unmountOnExit key={uuidv4()}>
                            <Grid xs={12} md={4} className={styles.marginRight}>
                                <Link to={val.redirectUrl} style={{ textDecoration: 'none' }}>
                                    <Paper className={styles.card} elevation={3}>
                                        <div>
                                            <img src={val.icon} alt="donate logo" style={{ color: 'white' }} />
                                        </div>
                                        <div className={styles.rightColumn}>
                                            <h4>{val.heading}</h4>
                                            <p>{val.description}</p>
                                            {/* this is custom button component which accepts following props (innerText, type, HandleButtonClick, color, bgColor, width )*/}
                                            <Button innerText={val.buttonInnerText} color='#0d1821' bgColor='white' />
                                        </div>
                                    </Paper>
                                </Link>
                            </Grid>
                        </Slide>
                    ))
                }
            </Grid>
        </Container>
    );
}
export default React.memo(ProgrammesPageCardLayout);