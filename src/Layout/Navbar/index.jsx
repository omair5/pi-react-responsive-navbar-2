import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom'
import './navbar.css';
import NBPLOGO from '../../Assets/Images/NBPFinal.png'
import Dropdown from './Dropdown';
import { BiChevronDown } from "react-icons/bi";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const HandleDropdown = () => {
        setDropdown(!dropdown)
    }
    const handleClickAway = () => {
        setDropdown(false)
    }

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu} >
                    <img src={NBPLOGO} alt='NBP logo' title='NBP' />
                </Link>

                {/* RESPONSIVE ICONS */}
                <div className='menu-icon' onClick={handleClick} >
                    {click ? <FaTimes className={'fa-bars'} /> : <GiHamburgerMenu className={'fa-bars'} />}
                </div>

                <ul className={click ? 'nav-menu active nav-backoverlay-active' : 'nav-menu nav-backoverlay-inactive '}>

                    <li className='nav-item ' onClick={HandleDropdown}>
                        <ClickAwayListener onClickAway={handleClickAway}>
                            {/* this will be shown on larger screen */}
                            <div className='show-dropdown-for-web'>
                                <div className='nav-links payment' >Payments <BiChevronDown onClick={HandleDropdown} className='carret' /></div>
                                <div>
                                    {dropdown ? <Dropdown /> : null}
                                </div>
                            </div>
                        </ClickAwayListener>
                    </li>

                    {/* this will be shown on small screen */}
                    <div className={'show-dropdown-for-mobile'} >

                        <li className='nav-item'>
                            <Link to='/donate' className='nav-links' onClick={closeMobileMenu}>Donate in PM Relief Fund COVID-19</Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/booster-fee-payment' className='nav-links' onClick={closeMobileMenu}>Covid Vaccination Booster Fee Payment</Link>
                        </li>
                    </div>

                    {/* <li className='nav-item'>
                        <Link to='/receipts' className='nav-links' onClick={closeMobileMenu}>Receipts</Link>
                    </li> */}

                    <li className='nav-item'>
                        <Link to='/faqs' className='nav-links' onClick={closeMobileMenu}>FAQs</Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>Contact</Link>
                    </li>

                    <li className='nav-item'>
                        <Link className='donate_link' to='/donate' onClick={closeMobileMenu}>Donate</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
export default Navbar;