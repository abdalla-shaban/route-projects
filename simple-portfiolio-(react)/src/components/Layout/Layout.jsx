import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Layout() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 flex mt-16">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
