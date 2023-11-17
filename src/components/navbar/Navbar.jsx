/* eslint-disable react/prop-types */
import { useContext } from "react";
//theme hook
import { themeContext } from "../../hooks/ThemeContext";
// icons
import { HiOutlineMenuAlt1 } from "react-icons/hi";
//css style
import "./Navbar.css";
function Navbar({ isClosed, setIsClosed, toggleTheme }) {
  const theme = useContext(themeContext);
  const handleMenuDisplay = () => {
    setIsClosed(!isClosed);
  };
  return (
    <nav
      className={`navbar ${theme === "dark" ? "dark-theme" : "light-theme"}`}
    >
      <div className="left-side">
        {/* menu icon */}
        <div className="menu-icon" onClick={handleMenuDisplay}>
          <HiOutlineMenuAlt1 />
        </div>
      </div>

      <div className="right-side">
        {/* theme button */}
        <label className="ui-switch">
          <input type="checkbox" onChange={(e) => toggleTheme(e)} />
          <div className="slider">
            <div className="circle"></div>
          </div>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
