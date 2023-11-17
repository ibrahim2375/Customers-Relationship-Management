/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
//css style
import "./SlidbarLink.css";
function SlidbarLink({ title, Icon, path }) {
  const { pathname } = useLocation();
  return (
    <div className="sidebar-link">
      <Link
        to={path}
        className={`nav-link ${pathname === path && "active-sidebar-link"}`}
      >
        <div className="nav-link-title">
          <Icon />
          <span>{title}</span>
        </div>
      </Link>
    </div>
  );
}

export default SlidbarLink;
