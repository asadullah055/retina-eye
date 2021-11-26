import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css'

const Doctor = ({ doctor }) => {
    return (
        <div className="">
            <div className="col">
                <div className="card">
                    <div className="text-center">
                        <img src={doctor.img} className="img-hight card-img-top" alt="..." />
                    </div>
                    <div className="card-body text-center">
                        <h3 className="card-title sky-color fw-bold">{doctor.name}</h3>
                        <p className="card-text">{doctor.designation}</p>
                        <Link to="/appointment" className="more-btn btn">REQUEST AN APPOINTMENT</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Doctor;