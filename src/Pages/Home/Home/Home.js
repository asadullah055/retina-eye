import React, { useEffect, useState } from 'react';
import Services from '../../Service/Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="">
            <div className="banner">
                <Banner></Banner>
            </div>
            <div className="container mt-4">
                <h2 className="text-center fw-bold sky-color mb-3">Service</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.slice(0, 6).map(services => <Services
                            key={services.id}
                            services={services}
                        ></Services>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;