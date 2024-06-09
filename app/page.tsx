import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesSection from "./components/Features";

export default function Home() {
  return (
    <div
    className='relative w-full h-auto bg-black'>
      <Navbar 
        navItems={[
          {name: 'About',
            link: '/',},
          {name: 'Safety',
          link: '/',},
        {name: 'Contacts',
        link: '/',}
      ]} />
      <Hero />
      <FeaturesSection />
    </div>
  );
}
