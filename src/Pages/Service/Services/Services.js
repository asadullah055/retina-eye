import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ services }) => {
    const { title, img, description, id } = services
    return (
        <div className="container">
            <div className="col">
                <div className="card border-0 h-100">
                    <img src={img} className="card-img-top rounded-3" alt="..." />
                    <div className="card-body ">
                        <h4 className="card-title fw-bold">{title}</h4>
                        <p className="card-text">{description.slice(0, 200)}</p>
                    </div>
                    <div className="ms-3">
                        <Link to={`serviceDetails/${id}`}>
                            <button className="more-btn btn">Read More</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;