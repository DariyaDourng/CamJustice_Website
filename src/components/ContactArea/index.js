import React from "react";
import "./style.scss";
const ContactArea = ({ className }) => {
  return (
    <div className={className}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="contactInfo">
              <span>For Our Honorabe Clients</span>
              <br />
              <h2>Free Consulting</h2>
              <h6>Call us 24/7 at (+855) 17 872 392 or fill out the form.</h6>
              <p>
                At CamJustice, we understand the importance of clear, expert
                legal advice. That’s why we offer free consultations to help you
                navigate your legal challenges. Our experienced team is ready to
                provide tailored solutions and guide you through the
                complexities of the law. Don’t hesitate—reach out today and let
                us help you make informed decisions with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactArea;
