import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const TemplateGallery = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const templates = [
    { id: 'modernblue', name: 'Modern Blue', category: 'professional', icon: '🔵' },
    { id: 'youthstartup', name: 'Youth Startup', category: 'creative', icon: '🚀' },
    { id: 'voguescript', name: 'Vogue Script', category: 'elegant', icon: '✨' },
    { id: 'urbanslate', name: 'Urban Slate', category: 'modern', icon: '🏙️' },
    { id: 'urbanmonochrome', name: 'Urban Monochrome', category: 'modern', icon: '⚫' },
    { id: 'tokyogrid', name: 'Tokyo Grid', category: 'minimal', icon: '🗾' },
    { id: 'thevisionary', name: 'The Visionary', category: 'creative', icon: '🔮' },
    { id: 'theanalyst', name: 'The Analyst', category: 'finance', icon: '📊' },
    { id: 'boldnoir', name: 'Bold Noir', category: 'elegant', icon: '⚫' },
    { id: 'brushstrokebold', name: 'Brushstroke Bold', category: 'creative', icon: '🎨' },
    { id: 'techgrid', name: 'Tech Grid', category: 'tech', icon: '💻' },
    { id: 'startupfresh', name: 'Startup Fresh', category: 'youthful', icon: '🌱' },
    { id: 'spectrumvibe', name: 'Spectrum Vibe', category: 'creative', icon: '🌈' },
    { id: 'aurorahighlight', name: 'Aurora Highlight', category: 'creative', icon: '🌈' },
    { id: 'skylineblue', name: 'Skyline Blue', category: 'modern', icon: '🌤️' },
    { id: 'simplesleek', name: 'Simple Sleek', category: 'minimal', icon: '👔' },
    { id: 'serifqueen', name: 'Serif Queen', category: 'elegant', icon: '👑' },
    { id: 'scandinavian', name: 'Scandinavian Touch', category: 'minimal', icon: '🇸🇪' },
    { id: 'roundedclassic', name: 'Rounded Classic', category: 'modern', icon: '🔘' },
    { id: 'retroresume', name: 'Retro Resume', category: 'vintage', icon: '🎨' },
    { id: 'resumeroyale', name: 'Resume Royale', category: 'premium', icon: '👑' },
    { id: 'professionalmint', name: 'Professional Mint', category: 'minimal', icon: '💰' },
    { id: 'prestigegray', name: 'Prestige Gray', category: 'executive', icon: '🖤' },
    { id: 'pearlwhite', name: 'Pearl White', category: 'elegant', icon: '🐚' },
    { id: 'parisianclass', name: 'Parisian Class', category: 'elegant', icon: '🇫🇷' },
    { id: 'oxfordcharm', name: 'Oxford Charm', category: 'classic', icon: '🇬🇧' },
    { id: 'monarchsignature', name: 'Monarch Signature', category: 'luxury', icon: '👑' },
    { id: 'monacobold', name: 'Monaco Bold', category: 'executive', icon: '💼' },
    { id: 'minimalgraphite', name: 'Minimal Graphite', category: 'minimal', icon: '⚫' },
    { id: 'minimalessentials', name: 'Minimal Essentials', category: 'minimal', icon: '📋' },
    { id: 'midnightfocus', name: 'Midnight Focus', category: 'dark', icon: '🌙' },
    { id: 'ivoryserif', name: 'Ivory Serif', category: 'classic', icon: '🦢' },
    { id: 'iconiccompact', name: 'Iconic Compact', category: 'compact', icon: '📐' },
    { id: 'indigoshadow', name: 'Indigo Shadow', category: 'dark', icon: '🟦' },
    { id: 'gridpro', name: 'Grid Pro', category: 'tech', icon: '🗂️' },
    { id: 'futuristicglow', name: 'Futuristic Glow', category: 'creative tech', icon: '⚡' },
    { id: 'elegantrose', name: 'Elegant Rose', category: 'elegant', icon: '🌹' },
    { id: 'elegantdivide', name: 'Elegant Divide', category: 'elegant', icon: '✨' },
    { id: 'digitalminimalist', name: 'Digital Minimalist', category: 'modern', icon: '📱' },
    { id: 'digitalcurve', name: 'Digital Curve', category: 'tech', icon: '🌊' },
    { id: 'designerglow', name: 'Designer Glow', category: 'creative', icon: '✨' },
    { id: 'crimsonprestige', name: 'Crimson Prestige', category: 'executive', icon: '🔴' },
    { id: 'crimsonline', name: 'Crimson Line', category: 'formal', icon: '📏' },
    { id: 'creativemuse', name: 'Creative Muse', category: 'creative', icon: '🎨' },
    { id: 'corporatesteel', name: 'Corporate Steel', category: 'professional', icon: '🏢' },
    { id: 'cleanvector', name: 'Clean Vector', category: 'design', icon: '🔺' },
    { id: 'cleantimeline', name: 'Clean Timeline', category: 'chronological', icon: '📅' },
    { id: 'classicivory', name: 'Classic Ivory', category: 'classic', icon: '📜' },
    { id: 'emeraldclean', name: 'Emerald Clean', category: 'minimal', icon: '💚' },
    { id: 'executiveluxe', name: 'Executive Luxe', category: 'luxury', icon: '👑' },
    { id: 'formalbrilliance', name: 'Formal Brilliance', category: 'professional', icon: '💼' },
    { id: 'freelancepop', name: 'Freelance Pop', category: 'creative', icon: '🎨' },
  ];

  const categories = [
    { id: 'all', name: 'All Templates' },
    { id: 'professional', name: 'Professional' },
    { id: 'creative', name: 'Creative' },
    { id: 'modern', name: 'Modern' },
    { id: 'minimal', name: 'Minimal' },
    { id: 'elegant', name: 'Elegant' },
    { id: 'tech', name: 'Tech' },
  ];

  const filteredTemplates = selectedCategory === 'all'
    ? templates
    : templates.filter(template => template.category === selectedCategory);

  const handleTemplateSelect = (templateId) => {
    if (isAuthenticated) {
      navigate(`/resume-builder?template=${templateId}`);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTemplates.map(template => (
            <div
              key={template.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleTemplateSelect(template.id)}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{template.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {template.name}
                </h3>
                <p className="text-sm text-gray-600 capitalize mb-4">
                  {template.category}
                </p>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Use Template
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to create your resume?
          </h2>
          <p className="text-gray-600 mb-6">
            Choose a template above and start building your professional resume today.
          </p>
          {!isAuthenticated && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-blue-800 mb-4">
                Sign up for free to save your resumes and access all features!
              </p>
              <button
                onClick={() => navigate('/register')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Create Free Account
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default TemplateGallery;