import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

function Dropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <Paper
            elevation={3}
            onClick={handleClick}
            className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
            <div>
                <Link
                    className='dropdown-link'
                    to='/donate-to-pm-relief-fund'
                    onClick={() => setClick(false)}
                >
                    Donate in PM Relief Fund COVID-19
                </Link>
                <Link
                    className='dropdown-link'
                    to='/donate-to-ehsaas-programme'
                    onClick={() => setClick(false)}
                >
                    Donate In Ehsaas Program
                </Link>
                <Link
                    className='dropdown-link'
                    to='/booster-fee-payment'
                    onClick={() => setClick(false)}
                >
                    Covid Vaccination Booster Fee
                </Link>
            </div>
        </Paper>
    );
}
export default React.memo(Dropdown);