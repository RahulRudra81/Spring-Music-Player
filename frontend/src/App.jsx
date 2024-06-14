import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import PagenotFound from "./components/PagenotFound";
import Search from "./components/Search/Search";
import Home from "./components/Home/Home";
import Aboutus from "./pages/Aboutus"
import Blog from "./pages/Blog"
import Terms from "./pages/Terms"
import Contactus from "./pages/Contactus"
import Culture from "./pages/Culture"
import Login from "./components/Auth/Login";


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="search" element={<Search />} />
      <Route path="/" element={<Home />} />
      <Route path="aboutus" element={<Aboutus />} />
      <Route path="terms" element={<Terms />} />
      <Route path="contactus" element={<Contactus />} />
      <Route path="blog" element={<Blog />} />
      <Route path="culture" element={<Culture />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<PagenotFound />} />
    </Routes>
  </Router>
  );
};

export default App;
