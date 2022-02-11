import React from 'react'
import Layout from '../Layout';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: '100%',
        height: '76vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        "& h1": {
            fontSize: '120px',
            fontWeight: 'bolder'
        },
        "& h2": {
            fontSize: '40px',
            letterSpacing: '1px'
        }
    },
    link: {
        marginTop: '20px',
        textDecoration: 'none',
        color: '#f2c417',
        fontWeight: 'bold',
        letterSpacing: '1.1px'
    }
}));

const PageNotFound = () => {
    const classes = useStyles();

    return (
        <Layout positionBottom={true}>
            <div className={classes.mainContainer}>
                <h1>404</h1>
                <h2>PAGE NOT FOUND</h2>
                <Link to='/' className={classes.link}>BACK TO HOME</Link>
            </div>
        </Layout>
    );
}
export default React.memo(PageNotFound);