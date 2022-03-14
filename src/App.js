
import './App.css';
import { Home } from './components/Home';
import { CountryDetails } from './components/CountryDetails';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
