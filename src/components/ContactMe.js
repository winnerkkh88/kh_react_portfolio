import React, { useEffect, useRef } from "react";
import { FaMapMarkerAlt, FaRegEnvelope, FaMobileAlt } from "react-icons/fa";
import "./css/ContactMe.css";
import { UseScreenLiveHeight } from "../lib/responsiveSizeUtils";

function ContactMe({ inputs, onChange, onReset, onSubmit }) {
    const { name, email, feedback } = inputs;
    //console.log(inputs);
    const nameInput = useRef();
    const emailInput = useRef();
    const feedbackInput = useRef();

    useEffect(() => {
        window.scrollTo(0, 0);
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div
                className="home_contactme"
                style={{ height: `${UseScreenLiveHeight() + 56}px` }}
            >
                <div
                    className="contact_me_layout_cover"
                    style={{ height: `${UseScreenLiveHeight() + 56}px` }}
                >
                    <div className="text-center contact-position">
                        <header className="animated fadeInDown">
                            <h1>Contact Me</h1>
                            <p className="contact-appreciation">
                                Thank you so much for taking your time!
                            </p>
                        </header>
                    </div>

                    {/* contact form part */}
                    <div className="container text-center">
                        <div className="row contact-form-info ">
                            <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 mx-auto conatact-form animated fadeInDown">
                                <div className="conatact-form">
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            onSubmit(name, email, feedback);
                                            nameInput.current.value = "";
                                            emailInput.current.value = "";
                                            feedbackInput.current.value = "";
                                        }}
                                    >
                                        <input
                                            className="contact-input"
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            onChange={onChange}
                                            ref={nameInput}
                                            required
                                        />
                                        <input
                                            className="contact-input"
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            onChange={onChange}
                                            ref={emailInput}
                                            required
                                        />
                                        <textarea
                                            className="contact-text-area"
                                            rows="8"
                                            name="feedback"
                                            placeholder=" I’m eager to receive your feedback...!"
                                            onChange={onChange}
                                            ref={feedbackInput}
                                            required
                                        ></textarea>

                                        <input
                                            className="contact-button btn btn-success"
                                            type="submit"
                                            value="Submit"
                                        />
                                    </form>
                                    <button
                                        className="contact-button btn btn-danger"
                                        onClick={() => {
                                            onReset();
                                            nameInput.current.value = "";
                                            emailInput.current.value = "";
                                            feedbackInput.current.value = "";
                                        }}
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>

                            <div className="col-sm-12 contact-info animated fadeInDown">
                                <div className="row">
                                    <div
                                        id="contactInfoTop"
                                        className="col-md-12"
                                    >
                                        <p>
                                            <strong>
                                                <FaMapMarkerAlt />
                                                Address:&nbsp;
                                            </strong>
                                            <span>
                                                47 Ravencliff, Scarborough, ON.
                                            </span>
                                        </p>
                                        <p>
                                            <strong>
                                                <FaRegEnvelope /> Email:&nbsp;
                                            </strong>
                                            <span>winnerkkh88@gmail.com</span>
                                        </p>
                                        <p>
                                            <strong>
                                                <FaMobileAlt /> Cell No:&nbsp;
                                            </strong>
                                            <span> +1-647-907-7725</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactMe;
