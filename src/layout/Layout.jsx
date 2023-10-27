//router outlet
import { Outlet } from "react-router-dom";
//components
import Navbar from "../components/navbar/Navbar";
// import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";

//css style
import "./Layout.css";
import Sidebar from "../components/sidebar/Sidebar";
import { useState } from "react";

function Layout() {
  const [isClosed, setIsClosed] = useState(true);
  return (
    <main>
      <div className="container">
        {/* <Menu /> */}
        <Sidebar isClosed={isClosed} />
        <div className={isClosed ? "content closed" : "content"}>
          {/* navbar */}
          <Navbar isClosed={isClosed} setIsClosed={setIsClosed} />
          {/* Outlet to navigate between pages */}
          <div className="pages">
            <Outlet />
          </div>
          {/* footer */}
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default Layout;
