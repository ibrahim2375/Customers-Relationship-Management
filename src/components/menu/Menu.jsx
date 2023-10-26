// import { useState } from "react";
//css style
import "./Menu.css";

// import { Link } from "react-router-dom";

//components
// import Dropdown from "../dropdown/Dropdown";

//pages data
import { menu_links } from "../../data";

function Menu() {
  //handle dropdown 
  // const handleDropdown = (e) => {
  //     // e.target
  // }
  
  return (
    <div className="side-menu">
      {/* side menu head */}
      <header>
        {/* logo */}
        <img src="/logo.png" alt="logo" className="logo" width={40} />
        <span>WISE SOFT CRM</span>
      </header>
      {/* side menu content and pages */}
      <div className="menu-content">
        {menu_links?.map((menu_link) => (
          <div className="dropdown" key={menu_link.id}>
            <div className="dropdown-title">
              <img className="dropdown-icon" src={menu_link.icon} alt="icon" />
              <span> {menu_link.title}</span>
            </div>
            <div className="deopdown-list">
              {menu_link.list.map((l) => (
                <div className="deopdown-link" key={l.id}>
                  {l.page}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
