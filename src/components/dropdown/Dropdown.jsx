/* eslint-disable react/prop-types */
import { useState } from "react";
//icons
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
//css style
import "./Dropdown.css";
import { NavLink } from "react-router-dom";
function Dropdown({ title, Icon, list }) {
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
          <Icon className="dropdown-icon" />
          <span>{title}</span>
          {/* arrow dropdown */}
        </div>
        {showList ? (
          <IoIosArrowUp className="arrow-icon" />
        ) : (
          <IoIosArrowDown className="arrow-icon" />
        )}
      </div>
      <div className="submenu" style={{ display: showList && "flex" }}>
        {list?.map((Link) => (
          <NavLink to={Link?.path} className="submenu-link" key={Link?.id}>
            <Link.icon className="dot-icon" />
            {Link.page}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
