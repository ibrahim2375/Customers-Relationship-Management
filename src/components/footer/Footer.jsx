import { useContext } from "react";
//theme hook
import { themeContext } from "../../hooks/ThemeContext";
//css style
import "./Footer.css";
function Footer() {
  const theme = useContext(themeContext);
  return (
    <footer className={`${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <div className="copy-right">
        COPYRIGHT © 2024 ERP SYSTEM, All rights Reserved
      </div>
      <div className="made-by"> Made by Wise Soft</div>
    </footer>
  );
}

export default Footer;
