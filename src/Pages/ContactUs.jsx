import React from 'react'
import Container from '@material-ui/core/Container';
import Layout from '../Layout';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Utils/Header';
import CardsContainer from '../Components/ContactUs/CardsContainer'
import { ContactUsCardsData } from '../JsUtils/ContactUsCardsData';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '40px',
        marginTop: '3px'
    },
}));

const ContactUs = () => {
    const classes = useStyles();
    return (
        <Layout >
            <Container maxWidth="lg" className={classes.root} >
                <Header heading='CONTACT US' />
                <CardsContainer data={ContactUsCardsData} />
            </Container>
        </Layout>
    );
}
export default React.memo(ContactUs);