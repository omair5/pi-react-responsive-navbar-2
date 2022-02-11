import React, { useState } from 'react'
import styles from './index.module.css'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { InputField, CheckBoxField, SelectField } from '../../Utils/FormikControls'
import Grid from '@material-ui/core/Grid';
import { CountryList } from '../../JsUtils/CountryList'
import { v4 as uuidv4 } from 'uuid';
import TermsAndConditionModal from '../Payments/TermsAndConditionModal';
// import FundsDonateDetail from '../../services/PostServices/FundsDonateDetail';
import BankAlfalah from '../../Assets/Images/baf.png'
import MasterCard from '../../Assets/Images/masterCard.png'
import { base_url } from "../../Config"
import axios from 'axios';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { toast } from 'react-toastify';




const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));


const DonationPaymentForm = () => {
    const apiURL = `${base_url}/api/payment/validate/request`
    const classes = useStyles();
    const [backdrop, setbackdrop] = React.useState(false);
    const [openUserConsentDialog, setopenUserConsentDialog] = useState(false)

    // HANDLING ERRORS FOR PAYMENT GATEWAY 
    window.handlePgCancel = () => {
        toast.warn('Payment Process Cancelled')
    }
    window.handleErrorCallback = () => {
        toast.error('Payment gateway Error')
    }
    window.handletimeoutCallback = () => {
        toast.error('Timeout, Payment Not Completed')
    }


    // open User Consent dialog box
    const HandleOpenUserConsent = () => {
        setopenUserConsentDialog(true)
    }
    // close user consent dialog box
    const HandleCloseUserConsentDialog = () => {
        setopenUserConsentDialog(false);
    };


    // formik initial values
    const initialValues = {
        name: '',
        email: '',
        country: 'Pakistan',
        currency: 'PKR',
        amount: '',
        acceptedTerms: false,
    }

    // validation schema
    const validationSchema = Yup.object({
        name: Yup.string().max(20, 'Must be 20 characters or less').min(3, 'Name Should Have Atleast 3 Characters').required('Valid Name is Required'),
        email: Yup.string().email('Invalid email address').required('Valid Email is Required'),
        amount: Yup.number().required('Valid Amount is Required'),
        acceptedTerms: Yup.boolean().required('Required').oneOf([true], 'You must accept the terms and conditions.'),
    })

    // Handle Submit
    const HandleSubmit = (values) => {
        setbackdrop(true)

        const body = {
            country: values.country,
            currency: values.currency,
            merchantName: "",
            paymentReqeustDetail: [
                {
                    amount: parseInt(values.amount),
                    city: "",
                    cnic: "",
                    contactNumber: "",
                    country: values.country,
                    cprNumber: "",
                    currency: values.currency,
                    date: new Date().toJSON().slice(0, 19),
                    dateOfVisit: new Date().toJSON().slice(0, 19),
                    email: values.email,
                    name: values.name,
                    overseasCardNumber: "",
                    passportNumber: "",
                    serialNoGovtIssue: "",
                    sessionId: ""
                }
            ],
            transactionCode: "003",
            requestDate: new Date().toJSON().slice(0, 19),
        }

        axios.post(apiURL, body).then((res) => {
            setbackdrop(false)
            const session_id = res?.data?.data?.sessionId
            const totlalAmount = res?.data?.data?.totlalAmount
            const orderId = res?.data?.data?.orderId
            const currency = values?.currency
            // const merchantName = res.data.data.merchantId

            // PG METHOD
            window.Checkout.configure({
                session: {
                    id: session_id
                },
                order: {
                    amount: function () {
                        return totlalAmount;
                    },
                    currency: currency,
                    description: 'Donation To PM Relief Fund',
                    id: orderId
                },
                interaction: {
                    operation: 'PURCHASE',
                    merchant: {
                        name: 'National Bank',
                        phone: 'UAN +9221 627 627627',
                    },
                    displayControl: {
                        paymentConfirmation: 'SHOW',
                        billingAddress: 'HIDE'

                    },
                }
            })

            window.Checkout.showLightbox()


        }).catch((err) => {
            console.log(err)
            setbackdrop(false)
            toast.error('Server Error')
        }
        )
    }


    return (
        <div className={styles.mainContainer}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={HandleSubmit}>
                <Form>
                    <div className={styles.heading}>Your Details</div>
                    <Grid >
                        {/* name */}
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <InputField
                                name="name"
                                type="text"
                                placeholder="Full Name"
                                className={styles.inputField}
                            />
                        </Grid>

                        {/* email */}
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <InputField
                                name="email"
                                type="email"
                                placeholder="Email Address"
                                className={styles.inputField}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            {/* country */}
                            <SelectField name="country" className={styles.inputField} >
                                <option value='Pakistan'>Pakistan</option>
                                {
                                    CountryList.map((country) => (
                                        <option value={country} key={uuidv4()}>{country}</option>
                                    ))
                                }
                            </SelectField>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            {/* currency */}
                            <InputField
                                name="currency"
                                type="text"
                                placeholder="Currency"
                                className={`${styles.inputField}`}
                                disabled={true}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            {/* amount */}
                            <InputField
                                name="amount"
                                type="tex"
                                placeholder='Amount'
                                className={styles.inputField}
                            />
                        </Grid>

                    </Grid>

                    {/* checkbox */}
                    <CheckBoxField name="acceptedTerms">
                        <span className={styles.userConsent}>
                            <b> I agree to the <span onClick={HandleOpenUserConsent}>Terms and Conditions</span></b>
                        </span>
                    </CheckBoxField>

                    <Grid item xs={12} sm={12} md={6} lg={4} className={styles.buttonContainer}>
                        {/* <button className={styles.buttonStyle} type='submit' disabled={sessionId ? false : true} >
                            Process For Pay
                        </button> */}

                        <button className={styles.buttonStyle} type='submit'  >
                            Process For Pay
                        </button>
                    </Grid>
                </Form>
            </Formik>

            <div className={styles.logoContainer}>
                <div>
                    <img src={BankAlfalah} alt="bank alfalah logo" height={'30px'} width={'50px'} />
                </div>
                <div className={styles.masterCardLogo}>
                    <img src={MasterCard} alt="master card logo" height={'35px'} width={'100px'} />
                </div>
            </div>

            {/* this modal will open when user clicks on terms & condition */}
            <TermsAndConditionModal open={openUserConsentDialog} close={HandleCloseUserConsentDialog} />

            <Backdrop className={classes.backdrop} open={backdrop}>
                <CircularProgress color="inherit" />
            </Backdrop>

        </div>
    );
}
export default React.memo(DonationPaymentForm);