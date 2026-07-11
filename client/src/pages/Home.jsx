import MainLayout from "../layouts/MainLayout";

import Hero from "../components/home/Hero";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
    </MainLayout>
  );
}

export default Home;