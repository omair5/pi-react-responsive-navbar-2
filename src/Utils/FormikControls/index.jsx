import React, { useEffect } from 'react'
import { useField, useFormikContext } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    label: {
        color: '#444444',
        margin: '4px 0px',
        '& span': {
            color: 'red',
            marginLeft: '3px'
        }
    },
    error: {
        marginTop: '0.25rem',
        fontSize: '80%',
        color: '#dc3545',
    },
    termsAndConditionContainer: {
        margin: '20px 0px'
    }
}));

// --------------------TEXTFIELD

export const InputField = ({ label, showAsterik, ...props }) => {
    const [field, meta] = useField(props);
    const classes = useStyles();

    return (
        <>
            <div className={classes.label}>
                <strong>
                    <label htmlFor={props.id || props.name}>
                        {label}{showAsterik && <span>*</span>}
                    </label>
                </strong>
            </div>

            <input {...field} {...props} />

            {meta.touched && meta.error ? (
                <div className={classes.error}>{meta.error}</div>
            ) : null}
        </>
    );
};


// --------------------CHECKBOX

export const CheckBoxField = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    const classes = useStyles();

    return (
        <div className={classes.termsAndConditionContainer}>
            <label className="checkbox-input">
                <input type="checkbox" {...field} {...props} />

                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className={classes.error}>{meta.error}</div>
            ) : null}
        </div>
    );
};

// --------------------SELECT

export const SelectField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const classes = useStyles();
    const { values, setFieldValue } = useFormikContext()

    // this effect will run when country select is changed
    useEffect(() => {
        if (values.country !== 'Pakistan') {
            setFieldValue('currency', 'USD')
        }
        else {
            setFieldValue('currency', 'PKR')
        }
    }, [values.country, setFieldValue])

    return (
        <div>
            <div className={classes.label}>
                <strong>
                    <label htmlFor={props.id || props.name}>
                        {label}
                    </label>
                </strong>
            </div>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className={classes.error}>{meta.error}</div>
            ) : null}
        </div>
    );
};