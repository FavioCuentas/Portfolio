import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Experience />
      <Portfolio />
      <ChatBot />
      <Footer />
    </main>
  );
}
