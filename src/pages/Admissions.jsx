import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";
import Accordion from "../components/Accordion";
import CTASection from "../components/CTASection";
import AdmissionForm from "../components/AdmissionForm";

const steps = [
  {
    title: "Submit Application",
    text: "Fill in the application form with your child's details.",
  },
  {
    title: "Document Review",
    text: "We check the birth certificate, past results and passport photos.",
  },
  {
    title: "Entrance Assessment",
    text: "A short, friendly assessment to understand where your child is.",
  },
  {
    title: "Admission Offer",
    text: "Successful applicants receive an offer letter and next steps.",
  },
];

const faqs = [
  {
    question: "When does admission open?",
    answer:
      "Applications are accepted all year, but places are limited and filled on a first-come basis.",
  },
  {
    question: "What documents do I need?",
    answer:
      "A copy of the birth certificate, the most recent report card and two passport photographs.",
  },
  {
    question: "Is there an entrance exam?",
    answer:
      "Yes. It is a short assessment in English and Mathematics, adapted to the age of the child.",
  },
  {
    question: "How do I pay the fees?",
    answer:
      "Fees can be paid by bank transfer or at the school bursary. Details are in the offer letter.",
  },
];

export default function Admissions() {
  return (
    <>
      <PageHeader
        title="Admissions"
        subtitle="Joining our school is simple. Here is how it works."
      />

      <Container className="py-16">
        <SectionHeading
          title="How to Apply"
          subtitle="Four simple steps to get started."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                {index + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </Container>

      <Container>
        <section id="apply" className="bg-slate-50">
          <Container className="py-20">
            <SectionHeading
              title="Admission Enquiry"
              subtitle="Tell us about your child and we will get back to you."
            />
            <div className="mx-auto max-w-3xl">
              <AdmissionForm />
            </div>
          </Container>
        </section>
      </Container>

      <section className="bg-slate-50">
        <Container className="max-w-3xl py-20">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions."
          />
          <Accordion items={faqs} />
        </Container>
      </section>

      <CTASection
        title="Have more questions?"
        text="Our admissions team is happy to help you with anything."
        buttonLabel="Contact Us"
        to="/contact"
      />
    </>
  );
}
