import Navbar from "@/components/navbar";
import Hero from "@/components/hero"
import TestimonialRow from "@/components/testimonialRow"
import Features from "@/components/features"
import Feedback from "@/components/feedback"
import Features2 from "@/components/features2"
import Features3 from "@/components/features3"
import Testimonials from "@/components/testimonials";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TestimonialRow />
      <Features />
      <Feedback />
      <Features2 />
      <Features3 />
      <Testimonials />
    </main>
  );
}
