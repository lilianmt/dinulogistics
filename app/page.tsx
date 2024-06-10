import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className='relative justify-between items-center w-full h-full bg-black overflow-hidden'>
      <nav className="fixed z-10 flex flex-col w-full items-center">
      <Navbar 
        navItems={[
          {name: 'About',
            link: '/',},
          {name: 'Safety',
          link: '/',},
        {name: 'Contacts',
        link: '/',}
        ]}
      />
      </nav>
      <Hero />
      <Features />
    </main>
  );
}
