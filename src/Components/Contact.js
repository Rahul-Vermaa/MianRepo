import React from "react";

const Contact = () => {
    return (
        <div className="contact-page-wrapper">
            <h1 className="primary-heading4">Let's talk about a
            potential <span className="heighligth2"> collaboration</span></h1>
            <p className="edit">Take the first step towards success. Get in touch today to discuss your project requirements.</p>
            <div className="contact-form-container">
                <input type="text" placeholder="yourmail@gmail.com"/>
                <button className="secondary-button">Submit</button>
            </div>
        </div>
    );
};

export default Contact;