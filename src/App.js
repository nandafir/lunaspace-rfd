import "assets/css/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import Clients from "parts/Clients";
import Sitemap from "parts/Sitemap";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <Clients />
      <Sitemap />
    </div>
  );
}

export default App;
