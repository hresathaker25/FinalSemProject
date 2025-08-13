import { useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Navbar */}
      <header className="fixed w-full top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-extrabold text-indigo-700">ResumeGenie</div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#about" className="hover:text-indigo-600 transition">About</a>
            <a href="#features" className="hover:text-indigo-600 transition">Features</a>
            <a href="#templates" className="hover:text-indigo-600 transition">Templates</a>
            <a href="#start" className="hover:text-indigo-600 transition">Start</a>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-indigo-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {menuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur border-t border-gray-200 shadow-sm">
            <nav className="flex flex-col items-center py-4 space-y-4 text-sm font-medium">
              <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600">About</a>
              <a href="#features" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600">Features</a>
              <a href="#templates" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600">Templates</a>
              <a href="#start" onClick={() => setMenuOpen(false)} className="hover:text-indigo-600">Start</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section with Background Video */}
      <section className="relative pt-28 md:pt-32 min-h-[90vh] text-white text-center px-6 flex flex-col items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        <div className="relative z-20 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Create Beautiful, AI-Powered Resumes Effortlessly
          </h1>
          <p className="text-lg md:text-xl text-white/90 mt-6 max-w-2xl mx-auto">
            ResumeGenie helps you craft polished resumes with smart AI suggestions, stunning templates, and professional layouts in minutes.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition">
              📝 Create Resume
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-700 transition">
              ⬆️ Upload & Improve
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">What is ResumeGenie?</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          ResumeGenie is a modern resume builder powered by AI. It’s designed to help students, freshers, and professionals create stunning, error-free resumes with ease.
          From smart content suggestions to elegant design templates — we make sure your resume stands out to every recruiter.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">
          <div>
            <h3 className="text-xl font-bold mb-2 text-indigo-700">🎯 AI Writing Assistant</h3>
            <p className="text-gray-700">Automatically improve grammar, wording, and clarity using OpenAI.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-indigo-700">📄 50+ Templates</h3>
            <p className="text-gray-700">Pick from designer-crafted templates tailored for different careers.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-indigo-700">📥 Export to PDF</h3>
            <p className="text-gray-700">Download polished resumes instantly in PDF format for job applications.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-indigo-700">🧠 Smart Career Selection</h3>
            <p className="text-gray-700">Choose your professional field and get a customized resume form with only the relevant sections shown.</p>
          </div>
        </div>
      </section>

      {/* Templates Preview Section */}
      <section id="templates" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">Explore Resume Templates</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl border shadow hover:shadow-md p-4">
            <p className="font-semibold mb-2">Modern Blue</p>
            <div className="h-40 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-white rounded-xl border shadow hover:shadow-md p-4">
            <p className="font-semibold mb-2">Classic Elegant</p>
            <div className="h-40 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-white rounded-xl border shadow hover:shadow-md p-4">
            <p className="font-semibold mb-2">Creative Designer</p>
            <div className="h-40 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* View All Templates Link */}
        <div className="mt-10">
          <Link
            to="/templates"
            className="inline-block text-indigo-700 border border-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-indigo-100 transition"
          >
            👀 View All 50+ Templates
          </Link>
        </div>
      </section>

      {/* Final Call To Action */}
      <section id="start" className="py-20 text-center bg-indigo-50 px-6">
        <h2 className="text-3xl font-bold mb-6">Ready to Build Your Resume?</h2>
        <button className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition">
          🚀 Get Started Now
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-sm text-gray-500 border-t border-gray-200 px-4">
        © 2025 ResumeGenie. Built with passion for dream careers.
      </footer>
    </div>
  );
}

export default HomePage;
