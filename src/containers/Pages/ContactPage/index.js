import React, { Fragment } from "react";
import HeaderBotton from "../../../components/HeaderBottom";
import HeaderTop from "../../../components/HeaderTop";
import Breadcumb from "../../../components/Breadcumb";
import NewsLetter from "../../../components/Newsletter";
import FooterArea from "../../../components/FooterArea";
import breadcumb from "../../../images/breadcumb/contact-bg.png";
import "./style.scss";
import Map from "../../../components/Map";

const breadcumbMenu = [{ name: "Home", route: "/" }, { name: "Contact" }];

const ContactPage = () => {
  return (
    <Fragment>
      <header className="headerArea">
        <HeaderTop className="headerTop" />
        <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
      </header>
      <Breadcumb
        className="breadcumbArea"
        title="Contact"
        breadcumbMenu={breadcumbMenu}
        background={breadcumb}
      />

      <div className="contactusPageArea">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="contactUsInfo">
                <h3>Office</h3>
                <p>
                  Building No.150, Level 4, Corner St.516 and Samdach Penn Nouth
                  Blvd, Sangkat Boeungkak 1, Khan TuolKok, Phnom Penh
                </p>
                <h4>Phone</h4>
                <span>+855 17 872 392</span>
                <h4>Email</h4>
                <span>info@CamJusticelawfirm.com</span>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contactUSForm">
                <h3>Quick Directions</h3>
                <Map />
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewsLetter className="newsLetterArea" />
      <FooterArea />
    </Fragment>
  );
};
export default ContactPage;
