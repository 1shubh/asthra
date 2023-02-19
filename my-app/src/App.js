// import logo from './logo.svg';
import { Navbar1 } from './components/Navbar1';
import './App.css';
import { Footer } from './components/Footer';
import { AllRoutes } from './Routes/AllRoutes';


function App() {
  return (
    <div className="App">
      <Navbar1/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
