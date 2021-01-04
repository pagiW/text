import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const Move = () => {
    useEffect(() => {
        document.title = 'Redirecting...';
    }, []);
    return <Redirect to='/text' />;
}

export default Move;