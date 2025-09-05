import axios from 'axios';

export const resumeService = {
  // Get all resumes
  getResumes: async () => {
    const response = await axios.get('/resumes');
    return response.data;
  },

  // Get specific resume
  getResume: async (id) => {
    const response = await axios.get(`/resumes/${id}`);
    return response.data;
  },

  // Create resume
  createResume: async (resumeData) => {
    const response = await axios.post('/resumes', resumeData);
    return response.data;
  },

  // Update resume
  updateResume: async (id, resumeData) => {
    const response = await axios.put(`/resumes/${id}`, resumeData);
    return response.data;
  },

  // Delete resume
  deleteResume: async (id) => {
    const response = await axios.delete(`/resumes/${id}`);
    return response.data;
  },

  // Duplicate resume
  duplicateResume: async (id) => {
    const response = await axios.post(`/resumes/${id}/duplicate`);
    return response.data;
  }
};