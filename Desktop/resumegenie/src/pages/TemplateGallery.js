import React from 'react';
import templates from '../data/templates';
import { useNavigate } from 'react-router-dom';

const TemplateGallery = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-6">
          Choose Your Perfect Resume Template
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          Preview and select from 50+ stunning, professional resume templates.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {templates.map(template => (
            <div
              key={template.id}
              className="group bg-white border rounded-xl shadow transition-transform duration-300 hover:scale-105 hover:z-10 hover:shadow-xl cursor-pointer"
              onClick={() => navigate(`/builder/${template.id}`)}
            >
              <img
                src={template.image}
                alt={template.title}
                className="w-full h-60 object-cover rounded-t-xl"
              />
              <div className="p-4 text-left">
                <h3 className="text-indigo-700 font-semibold text-lg">{template.title}</h3>
                <p className="text-sm text-gray-500 italic">{template.category}</p>
                <p className="text-sm text-gray-600 mt-1">{template.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateGallery;