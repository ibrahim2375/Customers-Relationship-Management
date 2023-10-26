/* eslint-disable react/prop-types */
//css style
import { Link } from "react-router-dom";
import "./SlidbarLink.css";
function SlidbarLink({ page, icon, path }) {
  return (
    <Link to={path} className="nav-link">
      <div className="nav-link-title">
        <img className="dropdown-icon" src={`/icons/${icon}`} alt="icon" />
        <span>{page}</span>
      </div>
    </Link>
  );
}

export default SlidbarLink;
