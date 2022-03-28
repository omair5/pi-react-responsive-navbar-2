import React, { useState } from 'react'
import styles from './index.module.css'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { InputField, CheckBoxField, SelectField } from '../../Utils/FormikControls'
import Grid from '@material-ui/core/Grid';
import { CountryList } from '../../JsUtils/CountryList'
import { v4 as uuidv4 } from 'uuid';
import TermsAndConditionModal from '../Payments/TermsAndConditionModal';
import BankAlfalah from '../../Assets/Images/baf.png'
import MasterCard from '../../Assets/Images/mastercard.png'
import { base_url } from "../../Config"
import axios from 'axios';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { toast } from 'react-toastify';
import NumberFormat from 'react-number-format';
import { FormHelperText } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));


const EhsaasDonationPaymentForm = () => {
    const apiURL = `${base_url}/api/payment/validate/request`
    const classes = useStyles();
    const [backdrop, setbackdrop] = React.useState(false);
    const [openUserConsentDialog, setopenUserConsentDialog] = useState(false)

    // HANDLING ERRORS FOR PAYMENT GATEWAY 
    window.handlePgCancel = () => {
        toast.warn('Payment Process Cancelled')
        sessionStorage.clear()
    }
    window.handleErrorCallback = () => {
        toast.error('Payment gateway Connection Error')
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


    // FORMIK INITIAL VALUES
    const initialValues = {
        name: '',
        email: '',
        country: 'Pakistan',
        currency: 'PKR',
        amount: '',
        mobileNumber: '',
        acceptedTerms: false,
    }

    // YUP VALIDATION SCHEMA
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, 'Name Should Have Atleast 3 Characters')
            .required('Valid Name is Required'),
        email: Yup.string()
            .email('Invalid email address'),
        amount: Yup.string().required('Valid Amount is Required'),
        acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
        mobileNumber: Yup.string()
            .min(11, 'Incorrect Mobile Number')
    })

    // HANDLE SUBMIT
    const HandleSubmit = (values) => {
        let formatAmount = values.amount.replaceAll(',', '')
        formatAmount = Number(formatAmount)

        setbackdrop(true)

        const body = {
            country: values.country,
            currency: values.currency,
            paymentReqeustDetail: [
                {
                    amount: formatAmount,
                    cnic: "",
                    contactNumber: `92${values.mobileNumber.slice(1)}`,
                    cprNumber: "",
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
            transactionType: "Ehsaas",
            requestDate: new Date().toJSON().slice(0, 19),
        }

        axios.post(apiURL, body).then((res) => {
            setbackdrop(false)
            if (res.status === 200) {
                sessionStorage.clear()
                const session_id = res?.data?.data?.sessionId
                const totlalAmount = res?.data?.data?.totlalAmount
                const orderId = res?.data?.data?.orderId
                const currency = values?.currency

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
                        description: 'Donation To Ehsaas Programme',
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

                sessionStorage.setItem('amount', totlalAmount)
                sessionStorage.setItem('currency', currency)
                sessionStorage.setItem('description', `DONATION IN EHSAAS PROGRAMME 2022`)
                sessionStorage.setItem('transactionType', 'Donation')
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
        }
        )
    }


    return (
        <div className={styles.mainContainer}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={HandleSubmit}>
                {(formikProps) => (
                    <Form>
                        <div className={styles.heading}>Your Details</div>
                        <Grid >
                            {/* NAME*/}
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <InputField
                                    name="name"
                                    type="text"
                                    placeholder="Full Name *"
                                    className={styles.inputField}
                                    maxLength={50}
                                    onChange={(e) => {
                                        if (e.target.value.match(/^[a-zA-Z ]*$/)) {
                                            formikProps.setFieldValue('name', e.target.value)
                                        }
                                    }}
                                />
                            </Grid>

                            {/* EMAIL */}
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <InputField
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                    className={styles.inputField}
                                    maxLength={50}

                                />
                            </Grid>

                            {/* COUNTRY */}
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

                            {/* CURRENCY */}
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

                            {/* AMOUNT */}
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                {/* amount */}
                                <NumberFormat
                                    name="amount"
                                    placeholder='Amount *'
                                    customInput={InputField}
                                    thousandSeparator={true}
                                    prefix={formikProps.values.currency === 'PKR' ? 'Rs.' : '$'}
                                    className={styles.inputField}
                                    inputMode='numeric'
                                    maxLength={15}
                                    decimalScale={0}
                                    onValueChange={(e) => {
                                        formikProps.setFieldValue('amount', e.value)
                                    }}

                                    isAllowed={(values) => {
                                        const { value } = values;
                                        if (value[0] === "0" || value[0] === "-") {
                                            return false;
                                        }
                                        return true;
                                    }}
                                />
                            </Grid>

                            {/* MOBILE NUMBER */}
                            <Grid item xs={12} sm={12} md={6} lg={4}>
                                <NumberFormat
                                    format="###########"
                                    customInput={InputField}
                                    className={styles.inputField}
                                    name="mobileNumber"
                                    placeholder='Mobile Number (optional)'
                                    inputMode='numeric'
                                    onValueChange={(e) => {
                                        formikProps.setFieldValue('mobileNumber', e.value)

                                    }}

                                    isAllowed={(values) => {
                                        const { value } = values;
                                        if (value[0] === undefined) {
                                            return true
                                        }
                                        if (value[0] !== "0") {
                                            return false;
                                        }
                                        if (value[1] !== undefined) {
                                            if (value[1] !== "3") {
                                                return false
                                            }
                                        }
                                        return true;
                                    }}

                                />
                                <FormHelperText>e.g: 03XXXXXXXXX</FormHelperText>
                            </Grid>


                        </Grid>

                        {/* checkbox */}
                        <CheckBoxField name="acceptedTerms">
                            <span className={styles.userConsent}>
                                <b> I agree to the <span onClick={HandleOpenUserConsent}>Terms and Conditions</span></b>
                            </span>
                        </CheckBoxField>

                        <Grid item xs={12} sm={12} md={6} lg={4} className={styles.buttonContainer}>

                            <button className={styles.buttonStyle} type='submit'  >
                                Proceed to Pay
                            </button>
                        </Grid>
                    </Form>
                )
                }
            </Formik>

            <div className={styles.logoContainer}>
                <div>
                    <img src={BankAlfalah} alt="bank alfalah logo" height={'40px'} />
                </div>
                <div className={styles.masterCardLogo}>
                    <img src={MasterCard} alt="master card logo" height={'45px'} />
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
export default React.memo(EhsaasDonationPaymentForm);