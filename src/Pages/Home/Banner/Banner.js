import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'
const Banner = () => {
    
    return (
        <div className="container p-50">
            <div className="row">
                <div className="col-lg-6 pt-5 mt-5 pb-5">
                    <h4 className="title">Critical Care Center</h4>
                    <h1 className="main-title">Eye Care Specialist Services That You Can Trust</h1>
                    <Link to="/about">
                        <button className="more-btn btn">More About Us</button>
                    </Link>

                </div>

            </div>
        </div>

    );
};

export default Banner;