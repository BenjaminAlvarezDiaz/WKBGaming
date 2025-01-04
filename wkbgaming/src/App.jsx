import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from  "./components/Contact"
import Privacy from "./components/Privacy";
import Blog from "./components/Blog"
import Announcement from "./components/Home/Announcement"
import ServicesGridView from "./components/ServicesGridView";

function App() {
  console.log("Developed by:Luis Fernando Goytia Cabezas {Full Stack Developer}");
  console.log("Email:luisgoytia.dev@gmail.com");
  console.log("Phone:+549 3872 277 407");
  console.log("Design and photography by:WKB Gaming")
  return (
    <main className="App">
      <Router>
      {/* <Announcement/> */}
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/*<Route path="/services" element={<Services />} />*/}
            <Route path="/services" element={<ServicesGridView />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            {/* <Route path="/admin" element={<Admin />} /> */}
            <Route path="/privacypolicy" element={<Privacy/>}/>
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
