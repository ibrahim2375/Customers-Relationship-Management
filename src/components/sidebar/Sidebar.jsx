/* eslint-disable react/prop-types */
//components
import Dropdown from "../dropdown/Dropdown";
// import SlidbarLink from "../navlink/SlidbarLink";
//css style
import "./Sidebar.css";
//page data file
import { menu_links } from "../../data";
function Sidebar({isClosed}) {
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
        {menu_links.map((links) => (
          <Dropdown
            key={links.id}
            title={links.title}
            Icon={links.icon}
            list={links.list}
            isClosed={isClosed}
          />
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
