import HeroSlider from "../components/HeroSlider";
import StatsSection from "../components/StatsSection";
import WhyChooseUs from "../components/WhyChooseUs";
import LatestNews from "../components/LatestNews";
import Testimonials from "../components/Testimonials";
import StaffCard from "../components/StaffCard";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <StatsSection />
      <WhyChooseUs />
      <LatestNews />
      <Testimonials />

      <StaffCard />
    </>
  );
}
