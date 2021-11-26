import React, { useEffect, useState } from 'react';
import Doctor from './Doctor/Doctor';

const About = () => {
    const [doctor, setDoctor] = useState([])

    useEffect(() => {
        fetch('/doctor.json')
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [])
    return (
        <div className="container">

            <h2 className="sky-color fw-bold text-center pt-3 mb-4">About Us</h2>
            <div class="card mb-3 border-0">
                <div class="row g-0 justify-content-center">
                    <div class="col-md-4">
                        <img src="https://i.ibb.co/r0nJ0JK/about-us.jpg" class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-6">
                        <div class="card-body ">
                            <div className="row">
                                <h2 className="fw-bold fs-1 ps-3">We Are Caring For Your Eye Health Hospital</h2>
                                <p className="p-2 ps-3">The eye is our organ of sight. The eye has a number of components which include but are not limited to the cornea, iris, pupil, lens, retina, macula, optic nerve, choroid and vitreous. Cornea: clear front window of the eye that transmits and focuses light into the eye.</p>
                                <div className="col-lg-6">
                                    <ul className="list-group">
                                        <li className="list-group-item border-0"><span><i class="fas fa-check-square"></i></span> Conducts eye health checkups</li>
                                        <li className="list-group-item border-0 "><span><i class="fas fa-check-square"></i></span>Best lasik treatment</li>
                                        <li className="list-group-item border-0"><span><i class="fas fa-check-square"></i></span>Treats minor illnesses</li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="list-group">
                                        <li className="list-group-item border-0"><span><i class="fas fa-check-square"></i></span>Special eye exam</li>
                                        <li className="list-group-item border-0"><span><i class="fas fa-check-square"></i></span>Contact lens service</li>
                                        <li className="list-group-item border-0"><span><i class="fas fa-check-square"></i></span>Special Retina exam
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className="sky-color fw-bold text-center mt-3">Doctor</h3>
            <h3 className="fw-bold fs-1 text-center">Retina Eye Care Specialist</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4">

                {
                    doctor.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default About;