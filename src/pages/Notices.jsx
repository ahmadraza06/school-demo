
import { useState } from "react";
import notices from "../data/notices";

export default function Notices() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(notices.map((notice) => notice.category)),
  ];

  const filteredNotices = notices.filter((notice) => {
    const matchesSearch =
      notice.title.toLowerCase().includes(search.toLowerCase()) ||
      notice.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || notice.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <p className="font-semibold text-blue-700">LATEST UPDATES</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-950">
        Notices and announcements
      </h1>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search notices..."
          aria-label="Search notices"
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          aria-label="Filter by category"
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-8 space-y-4">
        {filteredNotices.map((notice) => (
          <article
            key={notice.id}
            className="rounded-2xl border border-slate-200 p-6"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                {notice.category}
              </span>
              {notice.important && (
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
                  Important
                </span>
              )}
              <time
                dateTime={notice.date}
                className="text-sm text-slate-500"
              >
                {new Date(notice.date + "T00:00:00").toLocaleDateString(
                  "en-IN",
                  { day: "numeric", month: "short", year: "numeric" }
                )}
              </time>
            </div>

            <h2 className="mt-4 text-xl font-bold text-slate-900">
              {notice.title}
            </h2>
            <p className="mt-2 leading-7 text-slate-600">
              {notice.description}
            </p>
          </article>
        ))}

        {filteredNotices.length === 0 && (
          <p className="rounded-xl bg-slate-50 p-6 text-slate-600">
            No notices match your search.
          </p>
        )}
      </div>
    </div>
  );
}
