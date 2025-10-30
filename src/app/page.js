import Navbar from "@/components/navbar";
import Hero from "@/components/hero"
import TestimonialRow from "@/components/testimonialRow"
import Features from "@/components/features"


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TestimonialRow />
      <Features />
    </main>
  );
}
