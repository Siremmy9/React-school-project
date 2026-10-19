import Container from "./Container";
import SectionHeading from "./SectionHeading";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "🎓",
    title: "Academic Excellence",
    text: "A rigorous curriculum taught by qualified teachers who bring out the best in every student.",
  },
  {
    icon: "🏫",
    title: "Modern Facilities",
    text: "Bright classrooms, well-equipped science labs, a library and safe sports grounds.",
  },
  {
    icon: "🤝",
    title: "Caring Community",
    text: "Small class sizes and close attention to each child, in a safe and supportive environment.",
  },
];

export default function WhyChooseUs() {
  return (
    <section>
      <Container className="py-20">
        <SectionHeading
          title="Why Choose Us"
          subtitle="Everything your child needs to learn, grow and thrive."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <FeatureCard
              key={f.title}
              icon={f.icon}
              title={f.title}
              text={f.text}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
