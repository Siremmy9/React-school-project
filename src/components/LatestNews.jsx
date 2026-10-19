import { Link } from "react-router-dom";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import NewsCard from "./NewsCard";
import { news } from "../data/news";

export default function LatestNews() {
  const latest = news.slice(0, 3);

  return (
    <section className="bg-slate-50">
      <Container className="py-20">
        <SectionHeading
          title="Latest News & Events"
          subtitle="Stay up to date with what's happening around our school."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {latest.map((item) => (
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

        <div className="mt-10 text-center">
          <Link
            to="/news"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            View All News
          </Link>
        </div>
      </Container>
    </section>
  );
}
