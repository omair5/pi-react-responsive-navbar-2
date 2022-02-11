import React from 'react'
import styles from './index.module.css'

const Header = ({ heading }) => {
    return (
        <>
            <h2 className={styles.mainTitle}>
                {heading}
            </h2>
        </>
    );
}

export default React.memo(Header);


