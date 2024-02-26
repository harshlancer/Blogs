import React from "react";
import "./App.css"; // Make sure the path to your CSS file is correct
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Investment from "./components/Investment";
import Trading from "./components/Trading";
import Learning from "./components/Learning";
import Contact from "./components/Contact";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  return (
    <div className="home">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/investment">Investment</Link>
          </li>
          <li>
            <Link to="/trading">Trading</Link>
          </li>
          <li>
            <Link to="/learning">Learning</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/signUp">SignUp</Link>
          </li>
          <li>
            <Link to="/signIn">SignIn</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
