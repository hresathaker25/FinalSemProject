import { useState, useEffect } from "react";

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Elegant Navbar */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrollY > 50 
          ? 'bg-white/95 backdrop-blur-md shadow-sm' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900 tracking-tight">
            ResumeGenie
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            {['About', 'Features', 'Templates', 'Start'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="text-gray-900 focus:outline-none p-2 hover:bg-gray-50 rounded-md transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
            <nav className="flex flex-col py-4 space-y-3 text-sm font-medium px-6">
              {['About', 'Features', 'Templates', 'Start'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setMenuOpen(false)} 
                  className="text-gray-700 hover:text-gray-900 transition-colors py-2"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section with Video Background */}
      <section className="relative pt-20 min-h-screen text-white text-center px-6 flex flex-col items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <div className="relative z-20 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light leading-tight text-white mb-8 tracking-tight">
            Create Beautiful, AI-Powered 
            <span className="block font-normal">Resumes Effortlessly</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto mb-12 leading-relaxed">
            ResumeGenie helps you craft polished resumes with smart AI suggestions, stunning templates, and professional layouts in minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <button className="bg-white text-gray-900 px-8 py-4 font-medium hover:bg-gray-50 transition-all duration-300 min-w-[200px]">
              📝 Create Resume
            </button>
            <button className="border border-white/50 text-white px-8 py-4 font-medium hover:bg-white/10 hover:border-white transition-all duration-300 min-w-[200px]">
              ⬆️ Upload & Improve
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-900 tracking-tight">
          What is ResumeGenie?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
          ResumeGenie is a modern resume builder powered by AI. It's designed to help students, freshers, and professionals create stunning, error-free resumes with ease.
          From smart content suggestions to elegant design templates — we make sure your resume stands out to every recruiter.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-center mb-16 text-gray-900 tracking-tight">
            Features
          </h2>
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { icon: "🎯", title: "AI Writing Assistant", desc: "Automatically improve grammar, wording, and clarity using OpenAI." },
              { icon: "📄", title: "50+ Templates", desc: "Pick from designer-crafted templates tailored for different careers." },
              { icon: "📥", title: "Export to PDF", desc: "Download polished resumes instantly in PDF format for job applications." },
              { icon: "🧠", title: "Smart Career Selection", desc: "Choose your professional field and get a customized resume form with only the relevant sections shown." }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="text-4xl mb-6 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Preview Section */}
      <section id="templates" className="py-24 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-16 text-gray-900 tracking-tight">
          Resume Templates
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {[
            { name: "Modern Blue", color: "bg-blue-50 border-blue-200" },
            { name: "Classic Elegant", color: "bg-gray-50 border-gray-200" },
            { name: "Creative Designer", color: "bg-purple-50 border-purple-200" }
          ].map((template, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg group cursor-pointer"
            >
              <p className="font-medium mb-4 text-gray-900">{template.name}</p>
              <div className={`h-48 ${template.color} border transition-all duration-300 group-hover:border-gray-300`}>
              </div>
            </div>
          ))}
        </div>

        <a
          href="/templates"
          className="inline-block text-gray-900 border border-gray-900 px-8 py-3 font-medium hover:bg-gray-900 hover:text-white transition-all duration-300"
        >
          👀 View All 50+ Templates
        </a>
      </section>

      {/* Final Call To Action */}
      <section id="start" className="py-24 text-center bg-gray-900 px-6">
        <h2 className="text-4xl md:text-5xl font-light mb-8 text-white tracking-tight">
          Ready to Build Your Resume?
        </h2>
        <button className="bg-white text-gray-900 px-10 py-4 text-lg font-medium hover:bg-gray-100 transition-all duration-300">
          🚀 Get Started Now
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 text-sm text-gray-500 border-t border-gray-200 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="font-light">
            © 2025 ResumeGenie. Built with passion for dream careers.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
