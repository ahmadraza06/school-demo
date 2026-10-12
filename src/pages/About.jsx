
import schoolConfig from "../data/schoolConfig";

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <div className="max-w-3xl">
        <p className="font-semibold text-blue-700">ABOUT OUR SCHOOL</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-950">
          Helping every learner reach their potential
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          {schoolConfig.name} is committed to providing students with
          meaningful learning experiences in a supportive environment.
          Our goal is to encourage curiosity, responsibility, respect and
          lifelong learning.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <section className="rounded-2xl bg-blue-50 p-8">
          <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
          <p className="mt-4 leading-7 text-slate-600">
            To provide inclusive, engaging education that helps students
            develop knowledge, integrity, confidence and practical skills.
          </p>
        </section>

        <section className="rounded-2xl bg-indigo-50 p-8">
          <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
          <p className="mt-4 leading-7 text-slate-600">
            To nurture responsible, thoughtful and capable individuals
            who contribute positively to their communities.
          </p>
        </section>
      </div>

      <section className="mt-12 rounded-2xl border border-slate-200 p-8">
        <h2 className="text-2xl font-bold text-slate-900">School at a Glance</h2>
        <dl className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <dt className="text-sm text-slate-500">Established</dt>
            <dd className="mt-1 font-semibold">{schoolConfig.established}</dd>
          </div>
          <div>
            <dt className="text-sm text-slate-500">Affiliation</dt>
            <dd className="mt-1 font-semibold">{schoolConfig.affiliation}</dd>
          </div>
          <div>
            <dt className="text-sm text-slate-500">Address</dt>
            <dd className="mt-1 font-semibold">{schoolConfig.address}</dd>
          </div>
          <div>
            <dt className="text-sm text-slate-500">Office</dt>
            <dd className="mt-1 font-semibold">{schoolConfig.officeHours}</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
