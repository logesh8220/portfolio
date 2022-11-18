import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Project from './Project';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      
      <Navbar/>
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />

    </div>
  );
}

export default App;
