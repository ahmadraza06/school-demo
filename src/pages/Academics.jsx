
const programs = [
  {
    title: "Primary Classes",
    classes: "Classes I–V",
    description:
      "Build foundations in language, mathematics, environmental studies and creative learning.",
  },
  {
    title: "Middle Classes",
    classes: "Classes VI–VIII",
    description:
      "Strengthen subject knowledge, problem-solving, independent learning and collaboration.",
  },
  {
    title: "Secondary Classes",
    classes: "Classes IX–X",
    description:
      "Develop deeper subject understanding and prepare for board examinations.",
  },
  {
    title: "Senior Secondary",
    classes: "Classes XI–XII",
    description:
      "Offer subject pathways and examination preparation based on the school's actual curriculum.",
  },
];

export default function Academics() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <p className="font-semibold text-blue-700">ACADEMICS</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-950">
        Learning at every stage
      </h1>
      <p className="mt-4 max-w-2xl leading-7 text-slate-600">
        Explore the academic stages and learning opportunities offered
        by our school. Confirm the actual classes and subjects with the
        school before publishing.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {programs.map((program) => (
          <article
            key={program.title}
            className="rounded-2xl border border-slate-200 p-7 shadow-sm"
          >
            <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
              {program.classes}
            </span>
            <h2 className="mt-5 text-2xl font-bold text-slate-900">
              {program.title}
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              {program.description}
            </p>
          </article>
        ))}
      </div>

      <section className="mt-10 rounded-2xl bg-slate-50 p-7">
        <h2 className="text-xl font-bold">Subjects and facilities</h2>
        <p className="mt-3 leading-7 text-slate-600">
          Add the school's confirmed subject list, laboratories, library,
          sports facilities, timetable and examination policies here.
        </p>
      </section>
    </div>
  );
}
