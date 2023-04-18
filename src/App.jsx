import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";
import { Tvcomp } from "./pages/Tvcomp";
import { Moviecomp } from "./pages/Moviecomp";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/movie" element={<Moviecomp />} />
        <Route path="/tv" element={<Tvcomp />} />
        <Route path="/search" element={<Tvcomp />} />
        <Route path="/top" element={<Tvcomp />} />
        <Route path="/upcoming" element={<Tvcomp />} />
        <Route path="/profile" element={<Tvcomp />} />
        <Route path="/darkmode" element={<Tvcomp />} />
        <Route path="/signout" element={<Tvcomp />} />
      </Routes>
    </Router>
  );
}

export default App;
