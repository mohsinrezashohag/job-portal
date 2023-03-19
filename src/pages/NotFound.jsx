import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{
            textAlign: 'center',
            padding: '150px'
        }}>
            <p style={{ color: 'red' }}>page ot found</p>
            <Link to="/" style={{ color: 'green' }}>GO BACK HOME</Link>
        </div>
    );
};

export default NotFound;