import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <Router basename="/Weather_Moniter">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/weather" element={<WeatherApp />} />
      </Routes>
    </Router>
  );
}
export default App;
