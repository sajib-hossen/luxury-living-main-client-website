import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./pages/Home/About/About";
import Home from "./pages/Home/Home/Home";
import Services from "./pages/Services/Services";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
