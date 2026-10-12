
import { Link } from "react-router-dom";
import schoolConfig from "../data/schoolConfig";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="text-xl font-bold text-white">
            {schoolConfig.name}
          </h2>
          <p className="mt-3 text-sm leading-6">
            {schoolConfig.description}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">Quick Links</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <Link to="/about">About Us</Link>
            <Link to="/academics">Academics</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/notices">Notices</Link>
            <Link to="/admissions">Admissions</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white">Contact</h3>
          <div className="mt-4 space-y-3 text-sm">
            <p>{schoolConfig.address}</p>
            <a href={`tel:${schoolConfig.phone}`}>
              {schoolConfig.phone}
            </a>
            <a href={`mailto:${schoolConfig.email}`}>
              {schoolConfig.email}
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white">Office Hours</h3>
          <p className="mt-4 text-sm leading-6">
            {schoolConfig.officeHours}
          </p>
          <Link
            to="/contact"
            className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
          >
            Contact School
          </Link>
        </div>
      </div>

      <div className="border-t border-slate-800 px-4 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {schoolConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
