/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
//css style
import "./SlidbarLink.css";
function SlidbarLink({ id, title, Icon, active, path, handleActiveMenu }) {
  const { pathname } = useLocation();
  return (
    <div className="sidebar-link" onClick={() => handleActiveMenu(id)}>
      <Link
        to={path}
        className={`nav-link ${
          (pathname == path) | active && "active-sidebar-link"
        }`}
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
