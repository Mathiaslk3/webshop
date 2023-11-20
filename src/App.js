import './App.css';
import Navigator from './components/Navigator/Navigator';
import { Router } from '@reach/router';
import Home from "./pages/Home/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
        <Navigator/>
        <Router>
          <Home path="/" />
          <About path="/about" />
        </Router>
    </div>
  );
}

export default App;
