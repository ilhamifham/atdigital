import "./App.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Feature from "./components/Feature.jsx";
import Faq from "./components/Faq.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Feature />
        <Faq />
      </main>
      <Footer />
    </>
  )
}

export default App;