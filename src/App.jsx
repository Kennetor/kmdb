import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";
import { Tvcomp } from "./pages/Tvcomp";
import { Moviecomp } from "./pages/Moviecomp";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/tv" element={<Tvcomp />} />
          <Route path="/movie" element={<Moviecomp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
