import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '../../../Utils/Button';
import DoneIcon from '@material-ui/icons/Done';
import currencyFormatter from 'currency-formatter';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';



const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        maxWidth: '700px',
    },
    paper: {
        outline: 'none',
        backgroundColor: theme.palette.background.paper,
        color: '#484e53',
        boxShadow: theme.shadows[5],
        borderRadius: '7px',
        padding: theme.spacing(4, 4, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& h2': {
            padding: '15px 0',
            color: '#484e53',
            fontSize: 'clamp(1rem,5vw,2rem)'
        },
        '& h1': {
            color: '#209e65'

        },
        '& p': {
            padding: '20px 0',
            fontSize: '18px',
            fontWeight: '900',
        }
    },
    done: {
        borderRadius: '50%',
        backgroundColor: '#209e65',
        width: '50px',
        height: '50px',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        fontSize: '40px'
    },
    wrapper: {
        marginRight: 'auto',
        marginBottom: '20px',
        "& div": {
            fontWeight: 'bold',
            fontSize: '18px',
            padding: '10px 0px',
            color: '#209e65',
            "& span": {
                marginLeft: '5px',
                color: '#484e53',
                fontWeight: 'bold'
            }
        }
    },
    title: {
        textAlign: 'center',
        fontSize: '18px',
        marginTop: '15px',
        fontWeight: 'bold'
    }
}));

export default function PaymentSuccessfulModal({ openModal, closeModal, HandlePdfDownload, circularProgress }) {
    const classes = useStyles();
    const amount = sessionStorage.getItem('amount')
    const currency = sessionStorage.getItem('currency')
    const description = sessionStorage.getItem('description')

    const GenerateTotalAmount = (amount) => {
        return currencyFormatter.format(amount, {
            "code": "PKR",
            "symbol": "",
            "thousandsSeparator": ",",
            "decimalSeparator": ".",
            "symbolOnLeft": true,
            "spaceBetweenAmountAndSymbol": false,
            "decimalDigits": 2
        });
    }


    return (
        <Modal
            className={classes.modal}
            open={openModal}
            onClose={closeModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openModal}>
                <div className={classes.paper}>
                    <div className={classes.done}><DoneIcon className={classes.icon} /></div>
                    <div className={classes.title}>{description}</div>

                    <h2>Payment Successful</h2>
                    <h1>ThankYou!</h1>

                    <div className={classes.wrapper}>
                        <p>Your Payment is Being processed. You will be Notify through Email.</p>
                        <div>Date: <span>{`${new Date()}`}</span></div>
                        <div>Amount:<span>{`${currency} ${(GenerateTotalAmount(amount))}`}</span></div>
                    </div>
                    <Button innerText='Download PDF' bgColor='#209e65' width={'50%'} icon={<PictureAsPdfIcon />} HandleButtonClick={HandlePdfDownload} circularProgress={circularProgress} />
                </div>
            </Fade>
        </Modal>
    );
}