import Container from "./Container";
import StatCard from "./StatCard";

const stats = [
  { value: "1,200+", label: "Students" },
  { value: "85", label: "Expert Teachers" },
  { value: "25", label: "Years of Excellence" },
  { value: "98%", label: "Pass Rate" },
];

export default function StatsSection() {
  return (
    <section className="bg-slate-50">
      <Container>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}
