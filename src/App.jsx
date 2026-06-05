import React, { useState, Suspense, lazy } from "react";
import "./assets/css/index.css";
import Header from "./pages/Header/Header";
import { Route, Routes } from "react-router-dom";

// Lazy-load page-level components for better initial-performance
const Hero = lazy(() => import("./pages/Hero/Hero"));
const Skills = lazy(() => import("./pages/Skills/Skills"));
const Experience = lazy(() => import("./pages/Experience/Experience"));
const Education = lazy(() => import("./pages/Education/Education"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Projects = lazy(() => import("./pages/Projects/Projects"));

export default function App() {
  const [isOnePage] = useState(false); // Keep toggle reserved if needed

  return (
    <>
      <Header />
      {/* Router Mode with lazy-loaded pages and a small Suspense fallback */}
      <Suspense
        fallback={<div className="min-h-screen flex items-center justify-center">Loading…</div>}
      >
        {isOnePage ? (
          <>
            <Hero />
            <Skills />
            <Experience />
            <Education />
            <Contact />
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        )}
      </Suspense>
    </>
  );
}
