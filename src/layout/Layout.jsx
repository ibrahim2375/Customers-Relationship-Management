//router outlet
import { Outlet } from "react-router-dom";
//components
import Navbar from "../components/navbar/Navbar";
// import Menu from "../components/menu/Menu";
import Footer from "../components/footer/Footer";

//css style
import "./Layout.css";
import Sidebar from "../components/sidebar/Sidebar";


function Layout() {
  return (
    <main>
      <div className="container">
        {/* <Menu /> */}
        <Sidebar  />
        <div className={`content`}>
          {/* navbar */}
          <Navbar />
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
