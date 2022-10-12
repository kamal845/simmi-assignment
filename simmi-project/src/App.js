import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Welcome from './Components/Welcome';
import Objective from './Components/Objective';
import Help from './Components/Help';
import Current from "./Components/Current";
import Countries from "./Components/Countries";
import Speaker from "./Components/Speaker";
import Social from "./Components/Social";
import Partner from "./Components/Partner";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
  <Navbar/>
  <About/>
  <Welcome/>
  <Objective/>
  <Help/>
  <Current/>
  <Countries/>
  <Speaker/>
  <Social/>
  <Partner/>
  <Footer/>
    </div>
  );
}

export default App;
