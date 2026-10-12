
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="text-7xl font-extrabold text-blue-700">404</p>
      <h1 className="mt-5 text-3xl font-bold text-slate-950">
        Page not found
      </h1>
      <p className="mt-4 text-slate-600">
        The page you requested doesn't exist or may have moved.
      </p>
      <Link
        to="/"
        className="mt-7 inline-block rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white"
      >
        Return Home
      </Link>
    </section>
  );
}
