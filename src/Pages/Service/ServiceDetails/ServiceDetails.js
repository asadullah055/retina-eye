import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetails = () => {

    const { serviceId } = useParams()
    // console.log(aboutId);
    const [serviceDetails, setServiceDetails] = useState([])

    const [service, setService] = useState({})


    useEffect(() => {
        fetch("/service.json")
            .then((res) => res.json())
            .then((data) => setServiceDetails(data));
    }, []);



    useEffect(() => {
        const foundService = serviceDetails.find(
            (sevice) => sevice.id === serviceId
        );
        setService(foundService);
    }, [serviceDetails]);


    return (
        <div className="container mt-5">
            <div className="row ">
                <div className="card mb-3 border-0 ">
                    <div className="row g-0 justify-content-center">
                        <div className="col-md-3">
                            <img src={service?.img} className="service-img img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-4 rounded">
                            <div className="card-body">
                                <h4 className="card-title fw-bold">{service?.title}</h4>
                                <p className="card-text">{service?.description}</p>
                                <h5 className="doctor-name">{service?.doctorName}</h5>
                                <h5 className="fw-bold">{service?.fee} Taka</h5>
                                <Link to="/appointment" className="more-btn btn">REQUEST AN APPOINTMENT</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ServiceDetails;