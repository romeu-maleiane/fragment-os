import Navbar from "@/components/navbar";
import Hero from "@/components/hero"
import TestimonialRow from "@/components/testimonialRow"
import Features from "@/components/features"
import Feedback from "@/components/feedback"


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TestimonialRow />
      <Features />
      <Feedback />
    </main>
  );
}
