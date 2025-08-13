import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TemplateGallery from "./pages/TemplateGallery";
import ResumeBuilder from './pages/ResumeBuilder';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/templates" element={<TemplateGallery />} />
        <Route path="/builder/:templateId" element={<ResumeBuilder />} />
      </Routes>
    </Router>
  );
}
 
export default App;
