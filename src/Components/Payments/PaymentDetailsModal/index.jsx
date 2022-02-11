import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { InputField, SelectField } from '../../../Utils/FormikControls'
import { v4 as uuidv4 } from 'uuid';
import MyButton from '../../../Utils/Button'
import { Formik, Form, useFormikContext } from 'formik';
import * as Yup from 'yup';
import styles from './index.module.css'
import VisaMaster from '../../../Assets/Images/visa-master.jpg'
import Last3Digits from '../../../Assets/Images/3digits.png'
import BankAlfalah from '../../../Assets/Images/bankAlfalah.png'
import { ExpiryMonthList } from '../../../JsUtils/ExpiryMonthList';
import { GenerateExpiryYearList } from '../../../JsUtils/ExpiryYearList';
import valid from "card-validator";
import currencyFormatter from 'currency-formatter';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function PaymentDetailsModal({ open, close }) {
    // using formik context here to use payment form values in in this component
    const { values: { amount, currency } } = useFormikContext()

    // currency formatter
    const CurrencyFormatter = (amount, currency) => {
        if (currency === 'USD') {
            return currencyFormatter.format(amount, { code: 'USD' });
        }
        else {
            return currencyFormatter.format(amount, {
                "code": "PKR",
                "symbol": "Rs",
                "thousandsSeparator": ",",
                "decimalSeparator": ".",
                "symbolOnLeft": true,
                "spaceBetweenAmountAndSymbol": false,
                "decimalDigits": 2
            });
        }
    }

    // formik initial values
    const initialValues = {
        card_number: '',
        expiry_month: '',
        expiry_year: '',
        cardholder_name: '',
        security_code: ''
    }

    // validation schema
    const validationSchema = Yup.object({
        card_number: Yup.string().required('This Field is Required').test(
            "test-number",
            "Credit Card number is invalid",
            value => valid.number(value).isValid
        ),
        expiry_month: Yup.string().required(' This Field is Required'),
        expiry_year: Yup.string().required(' This Field is Required'),
        cardholder_name: Yup.string().required(' This Field is Required'),
        security_code: Yup.string().required(' This Field is Required').min(3, 'invalid format').max(4, 'invalid format')
    })

    // formik handle submit
    const HandleSubmit = (values, formSubmittingProps) => {
        console.log(values, formSubmittingProps)
    }

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={close}
                fullWidth={true}
                maxWidth={'xs'}
            >

                <div className={styles.title}>
                    <h2>National Bank of Pakistan</h2>
                    <span>{CurrencyFormatter(amount, currency)} {currency}</span>
                </div>

                <div className={styles.content}>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={HandleSubmit}>
                        {
                            (formik) => (
                                <Form>
                                    {console.log(formik)}
                                    {/* card number */}
                                    <div className={styles.fieldContainer}>
                                        <InputField
                                            label="Card Number"
                                            name="card_number"
                                            type="text"
                                            className={styles.input_field}
                                            showAsterik={true}
                                        />
                                        <img src={VisaMaster} alt="Visa Master" height={'30px'} />
                                    </div>



                                    <div className={styles.expiry_container}>
                                        {/* expiry month */}
                                        <div className={styles.expiry_month}>
                                            <SelectField label="Expiry Month" name="expiry_month" className={`${styles.input_field}`} >
                                                <option hidden>MM</option>

                                                {
                                                    ExpiryMonthList.map((value) => (
                                                        <option value={value} key={uuidv4()}>{value}</option>
                                                    ))
                                                }
                                            </SelectField>
                                        </div>

                                        {/* Expiry Year */}
                                        <div className={styles.expiry_year}>
                                            <SelectField label="Expiry Year" name="expiry_year" className={`${styles.input_field}`} >
                                                <option hidden>YY</option>

                                                {
                                                    GenerateExpiryYearList().map((value) => (
                                                        <option value={value} key={uuidv4()}>{value}</option>
                                                    ))
                                                }
                                            </SelectField>
                                        </div>
                                    </div>

                                    {/* cardholder name */}
                                    <div className={styles.fieldContainer}>
                                        <InputField
                                            label="Cardholder Name"
                                            name="cardholder_name"
                                            type="text"
                                            className={`${styles.input_field}`}
                                            showAsterik={true}
                                        />
                                    </div>

                                    <div className={styles.security_code_container}>
                                        {/* security code */}
                                        <div>
                                            <InputField
                                                label="Security Code"
                                                name="security_code"
                                                type="text"
                                                className={`${styles.input_field} ${styles.security_code}`}
                                                showAsterik={true}
                                            />
                                        </div>
                                        <div className={styles.digits_container}>
                                            <div>
                                                <img src={Last3Digits} alt="Card Back" />
                                            </div>
                                            <p><b>3 digits</b> on back of your card</p>
                                        </div>
                                    </div>

                                    <p className={styles.next_screen}>The next screen you see may be payment card verification through your card issuer.</p>

                                    {/* button container */}
                                    <div className={styles.button_container}>
                                        {/* cancel button */}
                                        <div className={styles.cancel_button}>
                                            <span onClick={close}>Cancel</span>
                                        </div>
                                        <MyButton
                                            innerText='Pay Now'
                                            type='submit'
                                        />
                                    </div>

                                    <div className={styles.bank_logo}>
                                        <img src={BankAlfalah} alt="Bank Alfalah" height='20px' />
                                    </div>

                                </Form>
                            )
                        }

                    </Formik>
                </div>
            </Dialog>
        </div>
    );
}
export default React.memo(PaymentDetailsModal);