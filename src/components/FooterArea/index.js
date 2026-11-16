import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo/logo.png";
import { META_DATA } from '../../constands/metadata';
import "./style.scss";

const footerLinks = [
  {
    title: "Quick Link",
    menus: [
      { name: "Home", route: "/" },
      { name: "ABOUT", route: "about" },
      { name: "Our Service", route: "our-service" },
      { name: "ATTORNEYS", route: "attorneys" },
      { name: "CONTACT", route: "contact" },
    ],
  },
  {
    title: "Our Service",
    menus: [
      { name: "Litigation & Dispute Resolution", route: "our-service" },
      { name: "Contracts of Employment and HR Policies", route: "our-service" },
      { name: "Corporate Tax Services", route: "our-service" },
      { name: "Mining and Energy", route: "our-service" },
      { name: "Real Estate and Construction", route: "our-service" },
      { name: "Intellectual Property and Technology", route: "our-service" },
    ],
  },
  {
    title: "Contact Us",
    menus: [
      { name: "Head Office Address" },
      {
        name: META_DATA.address,
      },
      { name: `Phone: ${META_DATA.phone}` },
      { name: `Email: ${META_DATA.email}` },
    ],
  },
];

const FooterArea = () => {
  return (
    <footer className="footerArea">
      <div className="footerTopArea">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footerLogo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
                <p>Working with You, Like a Friend, for Legal Excellence.</p>
              </div>
            </div>
            {footerLinks.map((menu, i) => (
              <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                <div className="footerWrap">
                  <h3>{menu.title}</h3>
                  <ul>
                    {menu.menus.map((item, i) => (
                      <li key={i}>
                        {item.route ? (
                          <Link to={`/${item.route}`}>{item.name}</Link>
                        ) : (
                          `${item.name}`
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footerBottomArea">
        <div className="container">
          <div className="footerBottomContent">
            <div className="row">
              <div className="col-md-8 col-sm-10 col-12">
                <span>
                  Privacy Policy | © 2026 {META_DATA.name}. All rights reserved
                </span>
              </div>
              <div className="col-md-4 col-sm-2 col-12">
                <ul className="socialListFooter">
                  <li>
                    <a
                      href={META_DATA.fb}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a target='_blank' href={META_DATA.telegram} rel="noreferrer">
                      <i className="fa fa-telegram" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterArea;
