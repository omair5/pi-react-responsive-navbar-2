import React from 'react';
import { Formik, Form, FieldArray } from 'formik';
import styles from './index.module.css'
import { InputField, SelectField } from '../../Utils/FormikControls'
import Grid from '@material-ui/core/Grid';
import { CountryList } from '../../JsUtils/CountryList'
import { v4 as uuidv4 } from 'uuid';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Button from '../../Utils/Button';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { ConnectedFocusError } from 'focus-formik-error'
import { toast } from 'react-toastify';
import currencyFormatter from 'currency-formatter';



const BoosterFeePaymentForm = () => {
    const navigate = useNavigate();

    const AmountInPakistaniRupees = 1270
    const ServiceCharges = 20

    const GenerateAmount = (NUmberOfPeople) => {
        return parseInt(NUmberOfPeople) * AmountInPakistaniRupees
    }

    const GenerateServiceCharges = (NUmberOfPeople) => {
        return parseInt(NUmberOfPeople) * ServiceCharges
    }

    const GenerateTotalAmount = (NUmberOfPeople) => {
        const amount = (AmountInPakistaniRupees + ServiceCharges) * parseInt(NUmberOfPeople)
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

    // formik initial values
    const initialValues = {
        userDetails: [{
            fullName: '',
            cnic: '',
            email: '',
            mobileNumber: '',
            country: 'Pakistan'
        }]
    }

    // Validation Schema
    const validationSchema = Yup.object({
        userDetails: Yup.array()
            .of(
                Yup.object().shape({
                    fullName: Yup.string().min(3, 'Name is Too Short').required('This Field is Required'),
                    cnic: Yup.string()
                        .required('This Field is Required')
                        .min(13, 'Must be exactly 13 digits Without dashes')
                        .max(13, 'Must be exactly 13 digits Without dashes'),
                    email: Yup.string().email('Invalid email address').required('This Field is Required'),
                    mobileNumber: Yup.string()
                        .max(15, 'Incorrect Mobile Number')
                        .required('This Field is Required'),
                })
            )
    })

    // HANDLE SUBMIT
    const HandleProceedForPay = (values) => {
        navigate('/payment-confirmation', {
            state: {
                values: values.userDetails
            }
        })
    }

    return (
        <>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={HandleProceedForPay}>
                {
                    (formikProps) => (
                        <>
                            <Form >
                                {/* This is used to scroll to the first error in formik component */}
                                <ConnectedFocusError />

                                <FieldArray name='userDetails'>
                                    {
                                        ({ push, remove, form: { values: { userDetails } } }) => {

                                            if (userDetails.length > 1) {
                                                const selectedCountry = userDetails[0].country
                                                const mappingCountry = userDetails.slice(1).map(val => ({
                                                    fullName: val.fullName,
                                                    cnic: val.cnic,
                                                    email: val.email,
                                                    mobileNumber: val.mobileNumber,
                                                    country: selectedCountry,
                                                    disabled: true
                                                }))
                                                formikProps.values.userDetails = [userDetails[0], ...mappingCountry]
                                            }
                                            else {
                                                formikProps.values.userDetails = [...userDetails]
                                            }

                                            return (
                                                // USER DETAILS FORM
                                                <div>
                                                    {
                                                        userDetails.map((value, index) => (
                                                            <Grid className={styles.mainContainer} key={index} >
                                                                <Grid item xs={12} sm={12} md={6} lg={4}>
                                                                    <div className={styles.header}>
                                                                        <p>{`Personal Details ${index + 1}`}</p>
                                                                        {/* if index is greater than zero than only show remove button */}
                                                                        {
                                                                            index > 0 &&
                                                                            <div className={styles.remove} onClick={() => remove(index)}>
                                                                                <HighlightOffIcon />
                                                                                <h5>Remove</h5>
                                                                            </div>
                                                                        }
                                                                    </div>
                                                                </Grid>
                                                                {/* name */}
                                                                <Grid item xs={12} sm={12} md={6} lg={4}>
                                                                    <InputField
                                                                        name={`userDetails[${index}].fullName`}
                                                                        type="text"
                                                                        placeholder="Full Name *"
                                                                        className={styles.inputField}
                                                                        maxLength={50}
                                                                        onChange={(e) => {
                                                                            if (e.target.value.match(/^[a-zA-Z ]*$/)) {
                                                                                formikProps.setFieldValue(`userDetails[${index}].fullName`, e.target.value)
                                                                            }
                                                                        }}
                                                                    />
                                                                </Grid>

                                                                {/* cnic */}
                                                                <Grid item xs={12} sm={12} md={6} lg={4}>
                                                                    <InputField
                                                                        name={`userDetails[${index}].cnic`}
                                                                        type="text"
                                                                        placeholder="CNIC / NICOP Without Dashes *"
                                                                        className={styles.inputField}
                                                                        inputMode='numeric'
                                                                        maxLength={13}
                                                                        onChange={(e) => {
                                                                            if (e.target.value.match(/^[0-9]*$/)) {
                                                                                formikProps.setFieldValue(`userDetails[${index}].cnic`, e.target.value)
                                                                            }
                                                                        }}

                                                                    />
                                                                </Grid>

                                                                {/* email */}
                                                                <Grid item xs={12} sm={12} md={6} lg={4}>
                                                                    <InputField
                                                                        name={`userDetails[${index}].email`}
                                                                        type="email"
                                                                        placeholder="Email Address"
                                                                        className={`${styles.inputField}`}
                                                                        maxLength={50}
                                                                    />
                                                                </Grid>

                                                                {/* number */}
                                                                <Grid item xs={12} sm={12} md={6} lg={4}>
                                                                    <InputField
                                                                        name={`userDetails[${index}].mobileNumber`}
                                                                        type="text"
                                                                        placeholder='Mobile Number'
                                                                        className={styles.inputField}
                                                                        inputMode='numeric'
                                                                        maxLength={15}
                                                                        onChange={(e) => {
                                                                            if (e.target.value.match(/^[0-9]*$/)) {
                                                                                formikProps.setFieldValue(`userDetails[${index}].mobileNumber`, e.target.value)
                                                                            }
                                                                        }}
                                                                    />
                                                                </Grid>

                                                                {/* country */}
                                                                <Grid item xs={12} sm={12} md={6} lg={4}>
                                                                    <SelectField name={`userDetails[${index}].country`} disabled={value.disabled} value={value.country} className={styles.inputField} >
                                                                        {/* <option value={value.country}>Pakistan</option> */}
                                                                        {
                                                                            CountryList.map((country) => (
                                                                                <option value={country} key={uuidv4()}>{country}</option>
                                                                            ))
                                                                        }
                                                                    </SelectField>
                                                                </Grid>
                                                            </Grid>
                                                        ))
                                                    }

                                                    <hr className={styles.hr} />

                                                    <Grid item xs={12} sm={12} md={7} lg={5} className={styles.buttonContainer}>
                                                        <button className={styles.buttonStyle} type='button' onClick={() => {
                                                            if (userDetails.length === 5) {
                                                                toast.info(`Sorry, You Can Not Add More Than 5 Entries`)
                                                            }
                                                            else {
                                                                push({
                                                                    fullName: '',
                                                                    cnic: '',
                                                                    email: '',
                                                                    mobileNumber: '',
                                                                    country: formikProps.values.userDetails[0].country
                                                                })
                                                            }

                                                        }}>
                                                            Add More
                                                        </button>

                                                        <p>
                                                            To add more people to the list,
                                                            please click the add button given on the left.
                                                        </p>
                                                    </Grid>

                                                </div>
                                            )
                                        }
                                    }
                                </FieldArray>

                                {/* SHOW AMOUNT SUMMARY */}
                                <div className={styles.showAmountSummaryContainer}>
                                    <Grid container className={styles.wrapper}>
                                        <Grid item xs={12} sm={12} md={6} lg={2}>
                                            <p>Total Number <br /> of People</p>
                                            <h2>
                                                {`0${parseInt(formikProps.values.userDetails.length)}`}
                                            </h2>
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={6} lg={2}>
                                            <p>Amount in <br />Pakistani Rupees</p>
                                            <h2>
                                                {GenerateAmount(formikProps.values.userDetails.length)}
                                            </h2>
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={6} lg={2}>
                                            <p>Services<br />Charges</p>
                                            <h2>
                                                {GenerateServiceCharges(formikProps.values.userDetails.length)}
                                            </h2>
                                        </Grid>

                                        <Grid item xs={12} sm={12} md={6} lg={2}>

                                        </Grid>

                                        <Grid item xs={12} sm={12} md={6} lg={4}>
                                            <p>Total Amount<br /> in Pakistani Rupees</p>
                                            <h2>
                                                {GenerateTotalAmount(formikProps.values.userDetails.length)}
                                            </h2>
                                        </Grid>

                                    </Grid>
                                </div>

                                {/* PROCESS FOR PAY */}
                                <Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={4}>
                                        <Button innerText="Proceed For Pay" bgColor={'#009a54'} type='submit' />
                                    </Grid>
                                </Grid>

                            </Form>
                        </>
                    )
                }
            </Formik>

        </>
    );
}
export default React.memo(BoosterFeePaymentForm);