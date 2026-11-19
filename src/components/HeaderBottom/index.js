import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo/logo.png";
import "./style.scss";

const menuItems = [
  { label: "Home", to: "/", end: true },
  {
    label: "About Us",
    to: "/about",
    children: [
      "Our Firm",
      "Leadership & Values",
      "BAKC Credentials & Licenses",
      "International Alliances",
      "Careers",
    ],
  },
  {
    label: "Practice Areas",
    to: "/practice-areas",
    children: [
      "Corporate, M&A & Investment",
      "Real Estate & Construction",
      "Banking, Finance & FinTech",
      "Labor & Employment",
      "Tax & Customs",
      "Dispute Resolution & Arbitration",
      "Intellectual Property",
      "Family, Immigration & Notarial Services",
    ],
  },
  {
    label: "Our Team",
    to: "/attorneys",
  },
  {
    label: "Insights",
    to: "/insights",
    children: [
      "Legal Updates & Alerts",
      "Doing Business in Cambodia Guides",
      "Firm News & Events",
    ],
  },
  {
    label: "Contact Us",
    to: "/contact",
    children: ["Phnom Penh Office", "Provincial Offices", "Book a Consultation"],
  },
];

const HeaderBottom = (props) => {
  const [search, setSearch] = useState();
  const [responsive, setResponsive] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(search);
  };
  const clickHandler = () => {
    setTrigger(!trigger);
  };
  const responsiveHandler = () => {
    setResponsive(!responsive);
  };
  const toggleSubMenu = (label) => {
    setExpandedMenu((current) => (current === label ? null : label));
  };
  return (
    <div className={props.className}>
      <div className="container">
        <div className="headerBottomMainWrapper">
          <div className="row">
            <div className="col-lg-2 col-md-10 col-sm-6 col-8">
              <div className="logo">
                <NavLink to="/">
                  <img style={{ height: "75px" }} src={logo} alt="" />
                </NavLink>
              </div>
            </div>
            <div
              className={
                responsive
                  ? "col-lg-9 responsiveWrapper active"
                  : "col-lg-9 responsiveWrapper"
              }
            >
              <ul className="mainMenuWrap">
                {menuItems.map((item) => (
                  <li
                    key={item.label}
                    className={[
                      item.children ? "hasSubMenu" : "",
                      expandedMenu === item.label ? "submenu-open" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <NavLink
                      to={item.to}
                      end={item.end}
                      onClick={() => setResponsive(false)}
                    >
                      {item.label}
                    </NavLink>
                    {item.children && (
                      <>
                        <button
                          type="button"
                          className="subMenuToggle"
                          aria-label={`Toggle ${item.label} submenu`}
                          aria-expanded={expandedMenu === item.label}
                          onClick={() => toggleSubMenu(item.label)}
                        >
                          <i className="fa fa-angle-down" aria-hidden="true" />
                        </button>
                        <ul className="subMenu">
                          {item.children.map((child) => (
                            <li key={child}>
                              <NavLink
                                to={item.to}
                                onClick={() => setResponsive(false)}
                              >
                                {child}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-1 col-md-2 col-sm-6 col-4">
              <div className="searchMenuWrapper">
                <div className="searchWrap">
                  <i onClick={clickHandler} className="fa fa-search"></i>
                  <div className={trigger ? "searchform active" : "searchform"}>
                    <form onSubmit={submitHandler}>
                      <input
                        placeholder="search here"
                        value={search}
                        type="text"
                        onChange={(event) => setSearch(event.target.value)}
                      />
                      <button>
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div onClick={responsiveHandler} className="responsiveTrigger">
                  <span className="first"></span>
                  <span className="second"></span>
                  <span className="third"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderBottom;
