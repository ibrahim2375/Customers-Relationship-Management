/* eslint-disable react/prop-types */
// icons
import { HiOutlineMenuAlt1 } from "react-icons/hi";
//css style
import "./Navbar.css";
function Navbar({ isClosed, setIsClosed }) {
  const handleMenuDisplay = () => {
    setIsClosed(!isClosed);
  };
  return (
    <nav>
      <div className="menu-icon" onClick={handleMenuDisplay}>
        <HiOutlineMenuAlt1 />
      </div>
    </nav>
  );
}

export default Navbar;
