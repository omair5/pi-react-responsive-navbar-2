import React from 'react'
import Layout from '../Layout';

const Receipts = () => {
    return (
        <Layout positionBottom={true}>
            <h1>Receipts will be shown here</h1>
        </Layout>
    );
}

export default React.memo(Receipts);