import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container">
            <img width="80%" src="https://i.ibb.co/Sv4VyrK/error.jpg" alt="" />
            <div className="text-center">
                <Link className="more-btn btn" to="/home">Back to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;