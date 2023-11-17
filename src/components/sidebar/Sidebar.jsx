/* eslint-disable react/prop-types */
import { useState } from "react";
//components
import Dropdown from "../dropdown/Dropdown";
import SlidbarLink from "../navlink/SlidbarLink";
//css style
import "./Sidebar.css";
//page data file
import { menu_links } from "../../data";
function Sidebar({ isClosed }) {
  const [dashboardLinks, setDashboardLinks] = useState(menu_links);
  // handle to dropdown and normal link to check if its active or not and make sure just one is active (link or dropdown)
  const handleActiveMenu = (id) => {
    setDashboardLinks(
      dashboardLinks?.map((menu) =>
        menu.id === id ? { ...menu, active: menu.active ? false : true } : { ...menu, active: false }
      )
    );
  };

  return (
    <div className={isClosed ? "sidebar closed" : "sidebar"}>
      <header>
        {/* logo */}
        <img src="/logo.png" alt="logo" className="logo" width={25} />
        <span>WISE SOFT CRM</span>
      </header>
      {/* nav links */}
      <nav className="nav-links">
        {/* ============dropdown=============== */}
        {dashboardLinks?.map((links) =>
          links.list ? (
            <Dropdown
              key={links.id}
              id={links.id}
              title={links.title}
              Icon={links.icon}
              active={links.active}
              list={links.list}
              isClosed={isClosed}
              handleActiveMenu={handleActiveMenu}
            />
          ) : (
            <SlidbarLink
              key={links.id}
              id={links.id}
              title={links.title}
              Icon={links.icon}
              active={links.active}
              path={links.path}
              handleActiveMenu={handleActiveMenu}
            />
          )
        )}
      </nav>
    </div>
  );
}

export default Sidebar;
