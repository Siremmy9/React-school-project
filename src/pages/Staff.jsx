import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import StaffCard from "../components/StaffCard";
import { staff } from "../data/staff";

export default function Staff() {
  return (
    <>
      <PageHeader
        title="Meet our Dedicated Team"
        subtitle="Teachers and staff who care about every child's progress."
      />

      <Container className="py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {staff.map((person) => (
            <StaffCard
              key={person.id}
              name={person.name}
              title={person.title}
              department={person.department}
              photo={person.photo}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
