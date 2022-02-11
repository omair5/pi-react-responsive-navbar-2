import React from 'react'
import Container from '@material-ui/core/Container';
import Layout from '../Layout';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Header from '../Utils/Header';
import QuestionsAndAnswers from '../Components/FAQS/QuestionsAndAnswers';
import GoToTop from '../Utils/GoToTop';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '40px'
    },
}));

const FAQS = () => {
    const classes = useStyles();
    return (
        <Layout >
            <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={1200}>
                <Container maxWidth="lg" className={classes.root} >
                    <Header heading='FREQUENTLY ASKED QUESTIONS' />
                    <QuestionsAndAnswers />
                    <GoToTop />
                </Container>
            </Slide>
        </Layout>
    );
}
export default React.memo(FAQS);