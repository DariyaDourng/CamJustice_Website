import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { SERVICES_DATA_LIST } from "../../constands/services.data";

const CategorySidebar = ({ className, title, setActiveTab, active }) => {
  
  return (
    <div className={className}>
      <h3 className="sidebarTitle">{title}</h3>
      <ul>
        {SERVICES_DATA_LIST.map((service, i) => {
          return (
            <li key={i}>
              <Link className={i === active ? 'active' : ''} onClick={()=> setActiveTab(i)}>{service.title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
};
export default CategorySidebar;
