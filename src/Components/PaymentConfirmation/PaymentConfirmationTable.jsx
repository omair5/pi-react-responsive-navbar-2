import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '../../Utils/Button';
import { useLocation } from 'react-router';
import currencyFormatter from 'currency-formatter';
import NothingToShow from '../../Assets/Images/NothingToShow.svg'
import { base_url } from "../../Config"
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const StyledTableCell = withStyles((theme) => ({
    head: {
        color: '#0d1821',
        fontSize: '18px',
        fontWeight: '600'
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#f0eff4',
        },
    },
}))(TableRow);


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        margin: '5vh 0'
    },
    table: {
        minWidth: 700,
    },
    greenRow: {
        backgroundColor: '#009a54',
        width: '100%',
        height: '30px'
    },
    totalAmount: {
        backgroundColor: '#cfccdc',
        width: '100%',
        height: '10vh',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '0px 15px',
        '& p': {
            fontSize: '12px',
            fontWeight: 600,
            marginRight: '10px'
        }
    },
    buttonContainer: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
        },
        "& div": {
            marginLeft: '15px'
        }
    },
    fallBack: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function PaymentConfirmationTable() {
    const classes = useStyles();
    const navigate = useNavigate();
    const apiURL = `${base_url}/api/payment/validate/request`
    const state = useLocation()
    let values = state?.state?.values || []
    const [backdrop, setbackdrop] = React.useState(false);

    // HANDLING ERRORS FOR PAYMENT GATEWAY 
    window.handlePgCancel = () => {
        toast.warn('Payment Process Cancelled')
        sessionStorage.clear()
    }
    window.handleErrorCallback = () => {
        toast.error('Payment Gateway Connection Failed')
    }
    window.handletimeoutCallback = () => {
        toast.error('Timeout, Payment Not Completed')
    }


    // CREATING ROWS FOR TABLE
    const rows = values?.map(val => (
        { name: val?.fullName, cnic: val?.cnic, amount: 'Rs. 1,290' }
    ))

    // Generate Total
    const GenerateTotalAmount = (rows) => {
        const amount = parseInt(rows) * 1290
        return currencyFormatter.format(amount, {
            "code": "PKR",
            "symbol": "Rs. ",
            "thousandsSeparator": ",",
            "decimalSeparator": ".",
            "symbolOnLeft": true,
            "spaceBetweenAmountAndSymbol": false,
            "decimalDigits": 2
        });
    }

    // Handle Fee Cancel
    const handleFeeCancel = () => {
        navigate('/booster-fee-payment')
    }

    // API POST REQUEST TO SUBMIT FEE
    const handleFeePayment = () => {
        setbackdrop(true)
        let currency;
        const country = values[0].country;

        if (country === 'Pakistan') {
            currency = 'PKR'
        }
        else {
            currency = 'USD'
        }

        const mappedUserDetailsArray = values.map(val => (
            {
                name: val.fullName,
                lastName: '',
                cnic: val.cnic,
                email: val.email,
                contactNumber: `92${val.mobileNumber.slice(1)}`,
                amount: '',
                cprNumber: "",
                date: new Date().toJSON().slice(0, 19),
                dateOfVisit: new Date().toJSON().slice(0, 19),
                overseasCardNumber: "",
                passportNumber: "",
                serialNoGovtIssue: "",
                sessionId: ""
            }
        ))


        const body = {
            country: country,
            currency: currency,
            paymentReqeustDetail: mappedUserDetailsArray,
            transactionType: "BoosterFeePayment",
            requestDate: new Date().toJSON().slice(0, 19),
        }

        axios.post(apiURL, body).then((res) => {
            setbackdrop(false)
            if (res.status === 200) {
                sessionStorage.clear()
                const session_id = res?.data?.data?.sessionId
                const totlalAmount = res?.data?.data?.totlalAmount
                const orderId = res?.data?.data?.orderId

                // Payment gateway Integration
                window.Checkout.configure({
                    session: {
                        id: session_id
                    },
                    order: {
                        amount: function () {
                            return totlalAmount;
                        },
                        currency: currency,
                        description: 'Booster Fee Payment',
                        id: orderId
                    },
                    interaction: {
                        operation: 'PURCHASE',
                        merchant: {
                            name: "National Bank",
                            phone: 'UAN +9221 627 627627',
                        },
                        displayControl: {
                            paymentConfirmation: 'SHOW',
                            billingAddress: 'HIDE'
                        },
                    }
                })

                window.Checkout.showLightbox()
                sessionStorage.setItem('amount', totlalAmount)
                sessionStorage.setItem('currency', currency)
                sessionStorage.setItem('description', 'COVID-19 BOOSTER VACCINATION FEE')
                sessionStorage.setItem('transactionType', 'BoosterFeePayment')
                sessionStorage.setItem('id', orderId)

            }
            else {
                const errorDescription = res.data.message
                toast.error(errorDescription)
            }
        }).catch((err) => {
            console.log(err)
            setbackdrop(false)
            toast.error('Server Error')
        })
    }

    return (
        <>
            {
                (values.length === 0) ?
                    // Show this if user is trying to route directly to this page
                    <div className={classes.fallBack}>
                        <img src={NothingToShow} alt='No result Found' height='50%' width={'50%'} />
                    </div>
                    :
                    <div className={classes.mainContainer}>
                        <div className={classes.greenRow}></div>
                        <TableContainer >
                            <Table className={classes.table} aria-label="customized table">

                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Name</StyledTableCell>
                                        <StyledTableCell >CNIC/NICOP</StyledTableCell>
                                        <StyledTableCell align="right">Amount</StyledTableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {rows.map((row, index) => (
                                        <StyledTableRow key={index} >
                                            <StyledTableCell component="th" scope="row">
                                                {row.name}
                                            </StyledTableCell>
                                            <StyledTableCell >{row.cnic}</StyledTableCell>
                                            <StyledTableCell align="right">{row.amount}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        {/* Total Amount */}
                        <div className={classes.totalAmount}>
                            <div>
                                <p>Total</p>
                                <p>Amount</p>
                            </div>
                            <h2>{GenerateTotalAmount(rows.length)}</h2>
                        </div>

                        {/* Confirm Button */}
                        <div className={classes.buttonContainer}>
                            <div>
                                <Button innerText='Cancel' bgColor={'#e7e7e7'} color={'black'} width={'160px'} HandleButtonClick={handleFeeCancel} />

                            </div>
                            <div>
                                <Button innerText='Confirm' bgColor={'#009a54'} width={'160px'} HandleButtonClick={handleFeePayment} />
                            </div>
                        </div>


                        <Backdrop className={classes.backdrop} open={backdrop}>
                            <CircularProgress color="inherit" />
                        </Backdrop>

                    </div >

            }
        </>

    );
}