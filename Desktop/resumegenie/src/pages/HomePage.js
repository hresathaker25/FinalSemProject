import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const HomePage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Create Professional Resumes
            <span className="text-blue-600 block">in Minutes</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Build stunning, ATS-friendly resumes with our easy-to-use builder.
            Choose from 50+ professional templates and land your dream job.
            No design skills required - just your information and our AI-powered suggestions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={handleGetStarted}
              className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              {isAuthenticated ? 'Go to Dashboard' : 'Get Started Free'}
            </button>
            <Link
              to="/templates"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 text-lg font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              View Templates
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Free to start</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>ATS-optimized</span>
            </div>
          </div>
        </div>
      </main>

      {/* Statistics Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Professional Templates</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <div className="text-gray-600">Resumes Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">User Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Create a professional resume in just 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-4">Choose a Template</h3>
              <p className="text-gray-600">
                Browse our collection of 50+ professionally designed templates.
                Select one that matches your industry and style preferences.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-4">Fill in Your Information</h3>
              <p className="text-gray-600">
                Use our intuitive form builder to input your experience, education,
                and skills. Our AI helps optimize your content for ATS systems.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-4">Download & Apply</h3>
              <p className="text-gray-600">
                Preview your resume in real-time and download as a high-quality PDF.
                Start applying to jobs with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ResumeGenie?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to create standout resumes that get results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-3">50+ Professional Templates</h3>
              <p className="text-gray-600">Carefully crafted templates for every career field, from tech to finance to creative industries.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-gray-600">Create a professional resume in minutes with our intuitive drag-and-drop interface.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-semibold mb-3">High-Quality PDF Export</h3>
              <p className="text-gray-600">Download crisp, professional PDFs that look great on any device or printer.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Suggestions</h3>
              <p className="text-gray-600">Get intelligent recommendations to improve your resume content and formatting.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">ATS-Optimized</h3>
              <p className="text-gray-600">Our templates are designed to pass Applicant Tracking Systems used by employers.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-4xl mb-4">💾</div>
              <h3 className="text-xl font-semibold mb-3">Cloud Storage</h3>
              <p className="text-gray-600">Save your resumes securely in the cloud and access them from anywhere.</p>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about ResumeGenie</p>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg">
              <button className="w-full text-left p-6 focus:outline-none">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">Is ResumeGenie really free?</h3>
                  <span className="text-blue-600">▼</span>
                </div>
              </button>
              <div className="px-6 pb-6">
                <p className="text-gray-600">
                  Yes! You can create and download unlimited resumes for free. We also offer premium features for advanced users.
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg">
              <button className="w-full text-left p-6 focus:outline-none">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">Are the templates ATS-friendly?</h3>
                  <span className="text-blue-600">▼</span>
                </div>
              </button>
              <div className="px-6 pb-6">
                <p className="text-gray-600">
                  Absolutely! All our templates are designed to pass Applicant Tracking Systems used by most employers.
                </p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg">
              <button className="w-full text-left p-6 focus:outline-none">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">Can I edit my resume after creating it?</h3>
                  <span className="text-blue-600">▼</span>
                </div>
              </button>
              <div className="px-6 pb-6">
                <p className="text-gray-600">
                  Yes! Save your resumes to your dashboard and edit them anytime. All changes are automatically saved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Perfect Resume?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of professionals who have landed their dream jobs with ResumeGenie
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGetStarted}
              className="px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isAuthenticated ? 'Go to Dashboard' : 'Start Building Now'}
            </button>
            <Link
              to="/templates"
              className="px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Browse Templates
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">ResumeGenie</h3>
              <p className="text-gray-600">
                Create professional resumes that get results. Fast, easy, and effective.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link to="/templates" className="hover:text-blue-600">Templates</Link></li>
                <li><a href="#features" className="hover:text-blue-600">Features</a></li>
                <li><a href="#pricing" className="hover:text-blue-600">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#help" className="hover:text-blue-600">Help Center</a></li>
                <li><a href="#contact" className="hover:text-blue-600">Contact Us</a></li>
                <li><a href="#faq" className="hover:text-blue-600">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#about" className="hover:text-blue-600">About</a></li>
                <li><a href="#blog" className="hover:text-blue-600">Blog</a></li>
                <li><a href="#careers" className="hover:text-blue-600">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
            <p>&copy; 2024 ResumeGenie. All rights reserved. Create amazing resumes with ease.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;