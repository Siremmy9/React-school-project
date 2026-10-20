import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import LevelCard from "../components/LevelCard";
import FeatureCard from "../components/FeatureCard";
import CTASection from "../components/CTASection";

const levels = [
  {
    name: "Nursery",
    ages: "Ages 2 - 5",
    image: "/images/hero1.jpg",
    description:
      "A playful, safe start where children build early reading, number and social skills.",
    subjects: ["Phonics", "Numbers", "Creative Play", "Music"],
  },
  {
    name: "Primary School",
    ages: "Ages 6 - 11",
    image: "/images/hero2.jpg",
    description:
      "A strong foundation in core subjects, with plenty of hands-on learning.",
    subjects: [
      "English",
      "Mathematics",
      "Basic Science",
      "Social Studies",
      "Computer Studies",
    ],
  },
  {
    name: "Secondary School",
    ages: "Ages 12 - 17",
    image: "/images/hero3.jpg",
    description:
      "Preparing students for national exams, university and the world of work.",
    subjects: [
      "English",
      "Mathematics",
      "Biology",
      "Chemistry",
      "Physics",
      "Economics",
    ],
  },
];

const extras = [
  {
    icon: "⚽",
    title: "Sports",
    text: "Football, athletics and inter-house competitions that build teamwork.",
  },
  {
    icon: "🎨",
    title: "Arts & Music",
    text: "Drama, choir and art clubs that let creativity shine.",
  },
  {
    icon: "💻",
    title: "Technology",
    text: "A computer lab and Tech club that prepare students for the future.",
  },
];

export default function Academics() {
  return (
    <>
      <PageHeader
        title="Academics"
        subtitle="A complete learning journey, from the first day of nursery to graduation."
      />

      <Container className="py-16">
        <SectionHeading
          title="Our Programmes"
          subtitle="Age-appropriate learning at every stage."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {levels.map((level) => (
            <LevelCard
              key={level.name}
              name={level.name}
              ages={level.ages}
              image={level.image}
              description={level.description}
              subjects={level.subjects}
            />
          ))}
        </div>
      </Container>

      <section className="bg-slate-50">
        <Container className="py-20">
          <SectionHeading
            title="Beyond the Classroom"
            subtitle="Learning continues in clubs, sports and creative activities."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {extras.map((e) => (
              <FeatureCard
                key={e.title}
                icon={e.icon}
                title={e.title}
                text={e.text}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to join our school?"
        text="Applications are open. Start your child's journey with us today."
        buttonLabel="Apply Now"
        to="/admissions"
      />
    </>
  );
}
