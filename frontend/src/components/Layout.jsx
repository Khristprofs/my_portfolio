import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer"

const Layout = () => {
  return (
    <>
      <Navbar />
      <main >
        <Outlet />
      </main>

      {/* Scroll to top button */}
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Layout;
