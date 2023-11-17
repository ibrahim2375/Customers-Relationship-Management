/* eslint-disable react/prop-types */
//css style
import { Link } from "react-router-dom";
import "./SlidbarLink.css";
function SlidbarLink({ title, Icon, path }) {
  return (
    <div className="sidebar-link">
      <Link to={path} className="nav-link">
        <div className="nav-link-title">
          <Icon />
          {/* <img className="dropdown-icon" src={`/icons/${icon}`} alt="icon" /> */}
          <span>{title}</span>
        </div>
      </Link>
    </div>
  );
}

export default SlidbarLink;
