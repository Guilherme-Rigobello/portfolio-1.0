// Components Import
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Footer from './components/Footer/Footer';


// CSS Import
import './App.css';

function App() {
  return (
    <div className=' w-100'>
      <Navbar/>
      <Home />
      <Skills />
      <About />
      <Portfolio />

      <Footer />
    </div>
  );
}

export default App;
