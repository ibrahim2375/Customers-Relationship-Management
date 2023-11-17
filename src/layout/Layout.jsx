//router outlet
import { Outlet } from "react-router-dom";
//components
import Navbar from "../components/navbar/Navbar";
// import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";

import { useState } from "react";
//components
import Sidebar from "../components/sidebar/Sidebar";
//css style
import "./Layout.css";
// theme context
import { themeContext } from "../hooks/ThemeContext";
function Layout() {
  const [theme, setTheme] = useState("light");
  const [isClosed, setIsClosed] = useState(false);

  //handle theme changes
  const toggleTheme = (e) => {
    e.target.checked === true ? setTheme("dark") : setTheme("light");
  };
  return (
    <themeContext.Provider value={theme}>
      <main className={`${theme === "dark" ? "dark-theme" : "light-theme"}`}>
        <div className="container">
          {/* <Menu /> */}
          <Sidebar isClosed={isClosed} />
          <div className={isClosed ? "content closed" : "content"}>
            {/* navbar */}
            <Navbar
              isClosed={isClosed}
              setIsClosed={setIsClosed}
              toggleTheme={toggleTheme}
            />
            {/* Outlet to navigate between pages */}
            <div className="pages">
              <Outlet />
            </div>
            {/* footer */}
            <Footer />
          </div>
        </div>
      </main>
    </themeContext.Provider>
  );
}

export default Layout;
