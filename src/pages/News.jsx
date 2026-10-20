import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import NewsCard from "../components/NewsCard";
import { news } from "../data/news";

const tabs = [
  { value: "ALL", label: "All" },
  { value: "NEWS", label: "News" },
  { value: "EVENT", label: "Events" },
];

export default function News() {
  const [filter, setFilter] = useState("ALL");

  const visible =
    filter === "ALL" ? news : news.filter((item) => item.type === filter);

  return (
    <>
      <PageHeader
        title="News & Events"
        subtitle="The latest stories and upcoming events from our school."
      />

      <Container className="py-16">
        {/* Filter tabs */}
        <div className="mb-10 flex justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setFilter(tab.value)}
              aria-pressed={filter === tab.value}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                filter === tab.value
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <NewsCard
              key={item.id}
              title={item.title}
              excerpt={item.excerpt}
              image={item.image}
              type={item.type}
              date={item.date}
            />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center text-slate-500">
            Nothing here yet. Check back soon!
          </p>
        )}
      </Container>
    </>
  );
}
