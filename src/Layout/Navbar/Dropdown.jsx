import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

function Dropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <ul
                onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
                <Paper elevation={3} >
                    <li >
                        <Link
                            className='dropdown-link'
                            to='/donate'
                            onClick={() => setClick(false)}
                        >
                            Donate in PM Relief Fund COVID-19
                        </Link>
                        <Link
                            className='dropdown-link'
                            to='/booster-fee-payment'
                            onClick={() => setClick(false)}
                        >
                            Covid Vaccination Booster Fee
                        </Link>
                    </li>
                </Paper>
            </ul>
        </>
    );
}
export default React.memo(Dropdown);