import React, { useEffect, useState } from 'react';
import Services from './Services/Services';
import './Services.css'

const Service = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="container mt-4">
            <h2 className="text-center fw-bold sky-color">Service</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(services => <Services
                        key={services.id}
                        services={services}
                    ></Services>)
                }
            </div>
        </div>
    );
};

export default Service;