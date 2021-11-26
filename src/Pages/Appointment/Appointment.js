import React from 'react';

const Appointment = () => {
    return (
        <div className="container mt-4">
            <div className="text-center">
                <img className="img-fluid" src="https://i.ibb.co/Y8XNwV2/appoint.jpg" alt="" />
            </div>
            <div className="text-center fs-5 mt-5 mb-5">
                <p>Please fill-in the form below and make an oppointment with any of our specialist doctors</p>
            </div>
            <div className="justify-content-center d-flex">
                <form action="" className="col-lg-7">
                    <div className="row g-3 mb-3">
                        <div className="col-12 col-lg-6">
                            <input type="text" className="form-control p-3 rounded-pill" placeholder="First name" aria-label="First name" />
                        </div>
                        <div className="col-12 col-lg-6">
                            <input type="text" className="form-control rounded-pill p-3" placeholder="Last name" aria-label="Last name" />
                        </div>
                    </div>
                    <div className="row g-3 mb-3">
                        <div className="col-12 col-lg-6">
                            <input type="email" className="form-control p-3 rounded-pill" placeholder="Email Address" aria-label="First name" />
                        </div>
                        <div className="col-12 col-lg-6">
                            <input type="tell" className="form-control rounded-pill p-3" placeholder="Phone" aria-label="Last name" />
                        </div>
                    </div>
                    <div className="row g-3 mb-3">
                        <div className="col-12">
                            <input type="" className="form-control p-3 rounded-pill" placeholder="Subject / Brief Description" aria-label="First name" />
                        </div>
                    </div>
                    <div class="mb-3">
                        <textarea class="form-control"
                            id="exampleFormControlTextarea1" placeholder="Type Your Massage Details" rows="8"></textarea>
                    </div>
                    <button className="btn btn-info p-3">Book Appointment</button>
                </form>
            </div>
        </div>
    );
};

export default Appointment;