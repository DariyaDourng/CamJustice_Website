import React from "react";
import "./style.scss";
import { META_DATA } from "../../constands/metadata";
const HeaderTop = (props) => {

  return (
    <div className={props.className}>
      <div className="container">
        <div className="headerTopMainWrapper">
          <div className="row">
            <div className="col-md-3 col-sm-12 col-12 col-lg-5">
              <ul className="d-flex accountLoginArea">
                <li>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <a
                    className="text-white"
                    target="_blank"
                    href="https://maps.app.goo.gl/9UA78puDLsH5ZnpE8"
                    rel="noreferrer"
                  >
                    {META_DATA.address}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-12 col-12 col-lg-5">
              <ul className="headerContact">
                <li>
                <a
                    className="text-white"
                    target="_blank"
                    href={`tel:${META_DATA.phone}`}
                    rel="noreferrer"
                  >
                    <i className="fa fa-phone"></i> {META_DATA.phone_1}
                  </a>
                  
                </li>
                <li>
                  <i className="fa fa-clock-o"></i> 9AM - 5PM
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-12">
              <div className="btnStyle btnStyle text-right">
                <a target="_blank" href="https://t.me/ONP7327" rel="noreferrer">
                  Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderTop;
