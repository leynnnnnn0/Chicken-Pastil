import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import About from './Pages/About/About';
import BeAReseller from './Pages/BeAReseller/BeAReseller';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <HomePage />
      <About />
      <BeAReseller />
      <Footer/>
    </>
  );
}

export default App

