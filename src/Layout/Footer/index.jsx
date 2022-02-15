import React from 'react'
import { useState } from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import TermsAndConditionModal from '../../Components/Payments/TermsAndConditionModal';
import Grid from '@material-ui/core/Grid';



const Footer = ({ positionBottom }) => {
    const [openUserConsentDialog, setopenUserConsentDialog] = useState(false)
    const HandleCloseUserConsentDialog = () => {
        setopenUserConsentDialog(false);
    };
    const HandleOpenUserConsent = () => {
        setopenUserConsentDialog(true)
    }

    return (
        <div className={styles.mainContainer} style={{ position: positionBottom && 'fixed', bottom: 0, left: 0, right: 0 }}>
            {/* <Container maxWidth="lg" className={styles.wrapper}> */}
            <Grid container spacing={3} >
                <Grid item xs={12} md={6} className={styles.wrapper}>
                    <div className={styles.nbp}>
                        ©  2021 National Bank Of Pakistan
                    </div>
                </Grid>

                {/* FOOTER NAVIGATION */}
                <Grid item xs={12} md={6} className={styles.wrapper}>
                    <ul className={styles.footer_nav}>
                        <li className='nav-item-foot'>
                            <Link to='/aboutcovid19' className='nav-links-foot' >About</Link>
                        </li>

                        <li className='nav-item-foot'>
                            <p onClick={HandleOpenUserConsent} className='nav-links-foot'>Terms & Conditions</p>
                        </li>

                        {/* <li className='nav-item-foot'>
                            <Link to='/' className='nav-links-foot'>NBP</Link>
                        </li> */}

                        <li className='nav-item-foot'>
                            <Link to='/contact' className='nav-links-foot'>Contact</Link>
                        </li>
                    </ul>
                </Grid>
            </Grid>
            <TermsAndConditionModal open={openUserConsentDialog} close={HandleCloseUserConsentDialog} />
            {/* </Container> */}
        </div>
    );
}
export default React.memo(Footer);