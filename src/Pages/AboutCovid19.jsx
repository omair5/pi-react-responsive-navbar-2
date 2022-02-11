import React from 'react'
import Container from '@material-ui/core/Container';
import Layout from '../Layout';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Header from '../Utils/Header';
import AboutCovid from '../Components/AboutCovid19/AboutCovid';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '40px'
    },
}));

const AboutCovid19 = () => {
    const classes = useStyles();
    return (
        <Layout positionBottom={true}>
            <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={1500}>
                <Container maxWidth="lg" className={classes.root} >
                    <Header heading='ABOUT COVID-19' />
                    <AboutCovid />
                </Container>
            </Slide>
        </Layout>
    );
}
export default React.memo(AboutCovid19);