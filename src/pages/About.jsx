import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import FeatureCard from "../components/FeatureCard";

const highlights = [
  "Established in 1999 with over 25 years of experience",
  "Qualified, caring and experienced teachers",
  "Small class sizes for personal attention",
  "A strong focus on character, discipline and leadership",
];

const principles = [
  {
    icon: "🎯",
    title: "Our Mission",
    text: "To provide quality education that develops knowledge, character and confidence in every child.",
  },
  {
    icon: "👁️",
    title: "Our Vision",
    text: "To be a leading school that produces responsible, curious and capable future leaders.",
  },
  {
    icon: "💎",
    title: "Our Values",
    text: "Integrity, respect, hard work, teamwork and a lifelong love of learning.",
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Learn about our story, our mission and what we stand for."
      />

      {/* Our story */}
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-blue-600" />
            <p className="mt-6 leading-relaxed text-slate-600">
              For more than two decades, our school has helped children grow
              into confident, capable young people. We combine strong academics
              with good character, in a safe and welcoming environment.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              {highlights.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-1 text-blue-600">✓</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <img
            src="/images/hero2.jpg"
            alt="Students learning in a classroom"
            className="h-80 w-full rounded-2xl object-cover shadow-lg"
          />
        </div>
      </Container>

      {/* Mission, vision, values */}
      <section className="bg-slate-50">
        <Container className="py-20">
          <SectionHeading
            title="What Guides Us"
            subtitle="The principles behind everything we do."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((p) => (
              <FeatureCard
                key={p.title}
                icon={p.icon}
                title={p.title}
                text={p.text}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
