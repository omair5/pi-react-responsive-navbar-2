import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '../../../Utils/Button';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        borderRadius: '7px',
        padding: theme.spacing(2, 4, 3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& h2': {
            padding: '15px 0'
        },
        '& p': {
            textAlign: 'center',
            padding: '10px 0',
            fonSize: '16px',
            fontWeight: 'normal'
        }
    },
    done: {
        borderRadius: '50%',
        backgroundColor: '#00733f',
        width: '50px',
        height: '50px',
        color: 'white'
    }
}));

export default function PaymentSuccessfulModal({ openModal, closeModal }) {
    const classes = useStyles();


    return (
        <div>
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
                        <div ><DoneIcon className={classes.done} /></div>
                        <h2>Payment Successful</h2>
                        <p>
                            Payment of Rs. 2,000 for Covid-19 Booster shot has been
                            <br /> made successfully.
                        </p>
                        <Button innerText='Done' bgColor='#009a54' width={'50%'} HandleButtonClick={closeModal} />
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
