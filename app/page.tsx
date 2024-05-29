import Navbar from "./components/navbar";
import { MotionDiv } from "./components/motion";
import Hero from "./components/hero";
import FeaturesSection from "./components/features";

export default function Home() {
  return (
    <MotionDiv
    className="relative w-full h-auto">
      <Navbar />
      <Hero />
      <FeaturesSection />
    </MotionDiv>
  );
}
