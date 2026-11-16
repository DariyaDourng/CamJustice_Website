import React, { Fragment } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePageOne from "../Pages/HomePageOne";
import AboutPage from "../Pages/AboutPage";
import TeamPage from "../Pages/TeamPage";
import ContactPage from "../Pages/ContactPage";
import BlogLeftPage from "../Pages/BlogLeftPage";
import NotFound from "../Pages/NotFound/NotFound";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <ToastContainer autoClose={2500} position="top-center" />
      {/* <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<HomePageOne />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="attorneys" element={<TeamPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="service" element={<BlogLeftPage />} />
          <Route path="our-service" element={<BlogLeftPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePageOne />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="attorneys" element={<TeamPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="service" element={<BlogLeftPage />} />
            <Route path="our-service" element={<BlogLeftPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Fragment>
  );
}
export default App;
