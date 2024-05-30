import "./styles/index.scss";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Recepies from "./pages/recpies";
import Settings from "./pages/settings";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/recepies" element={<Recepies />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
