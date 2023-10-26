/* eslint-disable react/prop-types */
import { useState } from "react";
//css style
import "./Dropdown.css";
import { NavLink } from "react-router-dom";
function Dropdown({ title, icon, list }) {
  const [showList, setShowList] = useState(false);
  const handleDropdown = () => {
    setShowList(!showList);
  };
  return (
    <div className="dropdown">
      <div
        className={`nav-link ${showList && "active-dropdown"}`}
        onClick={handleDropdown}
      >
        <div className="nav-link-title">
          <img className="dropdown-icon" src={icon} alt="icon" />
          <span>{title}</span>
          {/* arrow dropdown */}
        </div>
        <img className="arrow-icon" src={"/icons/arrow-down.png"} alt="icon" />
      </div>
      <div className="submenu" style={{ display: showList && "flex" }}>
        {list?.map((link) => (
          <NavLink to={link?.path} className="submenu-link" key={link?.id}>
            <img className="dot-icon" src={"/icons/dot-0.png"} alt="icon" />
            {link.page}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
