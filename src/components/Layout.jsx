
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
        <a
        href="#main-content"
        className="absolute left-4 top-2 z-100 -translate-y-20 rounded-lg bg-white px-4 py-3 font-semibold text-blue-800 shadow focus:translate-y-0"
      >
        Skip to main content
      </a>
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
