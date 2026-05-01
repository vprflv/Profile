import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Pricing from "@/components/Pricing";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Pricing />
            <Contact />
            <Footer />

            <ScrollToTop />
        </>
    );
}