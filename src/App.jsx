import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";
import { Tvcomp } from "./pages/Tvcomp";
import { Moviecomp } from "./pages/Moviecomp";
import { ComingSoon } from "./pages/ComingSoon";
import SearchInput from "./components/SearchInput";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/movie" element={<Moviecomp />} />
        <Route path="/tv" element={<Tvcomp />} />
        <Route path="/search" element={<SearchInput />} />

        <Route path="/upcoming" element={<ComingSoon />} />
        <Route path="/profile" element={<Tvcomp />} />
        <Route path="/darkmode" element={<Tvcomp />} />
        <Route path="/signout" element={<Tvcomp />} />
      </Routes>
    </Router>
  );
}

export default App;
