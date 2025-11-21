import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Vision from "./components/Vision";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="font-sans min-h-screen bg-slate-900 text-gray-100">
      <Header />
      <ScrollToTop />
      <main>
        <Hero />
        <hr className="border-t-2 border-gray-300/60 mx-auto max-w-6xl" />
        <About />
        <hr className="border-t-2 border-gray-300/60 mx-auto max-w-6xl" />
        <Vision />
        <hr className="border-t-2 border-gray-300/60 mx-auto max-w-6xl" />
        <Projects />
        <hr className="border-t-2 border-gray-300/60 mx-auto max-w-6xl" />
        <Blog />
        <hr className="border-t-2 border-gray-300/60 mx-auto max-w-6xl" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
