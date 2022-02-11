import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, positionBottom }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer positionBottom={positionBottom} />
        </>
    );
}

export default React.memo(Layout);