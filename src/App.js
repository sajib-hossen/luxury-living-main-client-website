import { Routes, Route, BrowserRouter } from "react-router-dom";
import AboutHeader from "./pages/AboutUs/AboutHeader/AboutHeader";
import AdminHeader from "./pages/Admin/AdminHeader/AdminHeader";
import ContactsHeader from "./pages/Contacts/ContactsHeader/ContactsHeader";
import Home from "./pages/Home/Home/Home";
import ProjectsHeader from "./pages/Projects/ProjectsHeader/ProjectsHeader";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<AboutHeader />}></Route>
          <Route path="/admin" element={<AdminHeader />}></Route>
          <Route path="/projects" element={<ProjectsHeader />}></Route>
          <Route path="/contacts" element={<ContactsHeader />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
