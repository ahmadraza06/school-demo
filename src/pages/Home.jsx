
import { Link } from "react-router-dom";
import schoolConfig from "../data/schoolConfig";
import PageMeta from "../components/PageMeta";

const features = [
  {
    number: "01",
    title: "Experienced Teachers",
    description: "Supportive educators who help students learn and grow.",
  },
  {
    number: "02",
    title: "Academic Excellence",
    description: "A learning environment focused on understanding and progress.",
  },
  {
    number: "03",
    title: "Modern Learning",
    description: "Learning resources and activities that build practical skills.",
  },
  {
    number: "04",
    title: "All-Round Development",
    description: "Opportunities to develop confidence, creativity and teamwork.",
  },
];

export default function Home() {
  return (
    <>
        <PageMeta
        title="Home"
        description="Discover Bright Future Academy, our learning environment, academic programs and admissions."
        />
      <section className="overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:py-28 lg:px-8">
          <div>
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
              Welcome to {schoolConfig.name}
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Learn Today.
              <span className="block text-blue-700">Lead Tomorrow.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              {schoolConfig.description} Discover a place where every
              student can build knowledge, confidence and a brighter future.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/admissions"
                className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-200 hover:bg-blue-800"
              >
                Explore Admissions
              </Link>
              <Link
                to="/about"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 hover:border-blue-400"
              >
                Discover Our School
              </Link>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Established {schoolConfig.established} ·{" "}
              {schoolConfig.affiliation}
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85"
              alt="Students learning together in a classroom"
              className="h-80 w-full rounded-3xl object-cover shadow-2xl md:h-[460px]"
            />
            <div className="absolute -bottom-5 left-4 right-4 rounded-2xl bg-white p-5 shadow-xl sm:left-8 sm:right-8">
              <p className="text-lg font-bold text-slate-900">
                Every student matters.
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Building strong foundations for lifelong learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold text-blue-700">WHY CHOOSE US</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            A foundation for a bright future
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            We aim to support academic growth, character development and
            curiosity through a welcoming learning environment.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-sm font-bold text-blue-700">
                {feature.number}
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-blue-700 px-4 py-16 text-center text-white">
        <h2 className="text-3xl font-bold">
          Start your child's learning journey
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
          Contact our school office to learn about classes, admission
          requirements and the application process.
        </p>
        <Link
          to="/admissions"
          className="mt-7 inline-block rounded-xl bg-white px-6 py-3 font-bold text-blue-800 hover:bg-blue-50"
        >
          Admission Information
        </Link>
      </section>
    </>
  );
}
