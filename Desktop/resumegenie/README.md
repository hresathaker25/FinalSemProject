# ResumeGenie

A modern resume builder application with AI-powered improvements and professional templates.

## 🚀 Features

- **52 Professional Templates** - Choose from a comprehensive collection of ATS-friendly resume templates
- **AI-Powered Text Improvements** - Advanced grammar, spelling, and style corrections using Hugging Face AI
- **Real-time Preview** - Live preview of your resume as you type
- **User Authentication** - Secure login and registration system
- **Resume Management** - Save, edit, and organize multiple resumes
- **PDF Export** - High-quality PDF generation with proper formatting
- **Responsive Design** - Works perfectly on desktop and mobile devices

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (v5 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd resumegenie
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   npm install

   # Install backend dependencies
   cd resumegenie-backend
   npm install
   cd ..
   ```

3. **Set up MongoDB**
   - Download and install MongoDB from https://www.mongodb.com/try/download/community
   - Start MongoDB service: `net start MongoDB` (Windows) or `brew services start mongodb/brew/mongodb-community` (macOS)

4. **Configure Environment Variables**

   Copy the example environment file:
   ```bash
   cp resumegenie-backend/.env.example resumegenie-backend/.env
   ```

   Update `resumegenie-backend/.env` with your configuration:
   ```env
   MONGODB_URI=mongodb://localhost:27017/resumegenie
   JWT_SECRET=your-super-secret-jwt-key-here
   PORT=5000

   # Optional: Cloudinary for image uploads
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret

   # Hugging Face AI Integration (Highly Recommended)
   REACT_APP_HUGGINGFACE_TOKEN=your-huggingface-token-here
   ```

### Hugging Face AI Setup (Recommended)

For the best AI-powered text improvements, set up Hugging Face:

1. **Create a Hugging Face account** at https://huggingface.co/join
2. **Generate an API token**:
   - Go to https://huggingface.co/settings/tokens
   - Click "New token"
   - Select "Read" role
   - Copy the token
3. **Add to your `.env` file**:
   ```env
   REACT_APP_HUGGINGFACE_TOKEN=hf_xxxxxxxxxxxxxxxxxxxxxxxxx
   ```

**Benefits of Hugging Face integration:**
- ✅ Advanced grammar correction using state-of-the-art AI models
- ✅ Contextual text improvement and rephrasing
- ✅ Professional writing style suggestions
- ✅ Better error detection than traditional grammar checkers
- ✅ Free tier with generous usage limits

### Running the Application

1. **Start the backend server**:
   ```bash
   cd resumegenie-backend
   npm run dev
   ```

2. **Start the frontend** (in a new terminal):
   ```bash
   npm start
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## 🤖 AI Features

### Without Hugging Face Token
- Basic spelling corrections (100+ common misspellings)
- Grammar pattern matching
- Punctuation and spacing fixes
- Capitalization corrections

### With Hugging Face Token (Recommended)
- **Advanced AI Text Improvement**: Uses BART model for contextual text enhancement
- **Intelligent Grammar Correction**: Detects complex grammatical errors
- **Style and Clarity Improvements**: Suggests professional writing improvements
- **Context-Aware Suggestions**: Understands resume-specific language and terminology

### Testing AI Improvements

You can test the AI improvements directly in your browser console:

```javascript
// Test basic improvements
languageToolService.testImprovements("i have alot of experiance in buisness developement");

// Test Hugging Face specifically (if token is configured)
languageToolService.testHuggingFace("This is a sample text with some errors to fix");
```

## 📁 Project Structure

```
resumegenie/
├── public/                          # Static assets
├── src/
│   ├── components/                  # Reusable UI components
│   │   ├── templates/              # Resume template components (52 templates)
│   │   ├── AIImprovementModal.js   # AI text improvement interface
│   │   ├── Dashboard.js            # User dashboard
│   │   ├── Login.js                # Authentication
│   │   └── Register.js             # User registration
│   ├── contexts/                   # React contexts
│   │   └── AuthContext.js          # Authentication state management
│   ├── data/                       # Static data and configurations
│   │   ├── ResumeFieldsConfig.js   # Resume field definitions
│   │   └── templates.js            # Template metadata
│   ├── pages/                      # Page components
│   │   ├── HomePage.js             # Landing page
│   │   ├── ResumeBuilder.js        # Main resume editor
│   │   └── TemplateGallery.js      # Template selection
│   ├── services/                   # API and utility services
│   │   ├── languageToolService.js  # AI text improvement service
│   │   └── resumeService.js        # Resume CRUD operations
│   └── styles/                     # CSS stylesheets
├── resumegenie-backend/            # Backend API server
│   ├── models/                     # MongoDB schemas
│   ├── routes/                     # API endpoints
│   ├── middleware/                 # Authentication middleware
│   └── server.js                   # Express server setup
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user info

### Resume Management
- `GET /api/resumes` - Get user's resumes
- `POST /api/resumes` - Create new resume
- `GET /api/resumes/:id` - Get specific resume
- `PUT /api/resumes/:id` - Update resume
- `DELETE /api/resumes/:id` - Delete resume
- `POST /api/resumes/:id/duplicate` - Duplicate resume

## 🎨 Template System

The application includes 52 professionally designed resume templates:

- **Professional**: Corporate Steel, Modern Blue, Oxford Charm
- **Creative**: Creative Muse, Vogue Script, Aurora Highlight
- **Technical**: Tech Grid, Tokyo Grid, Grid Pro
- **Minimal**: Minimal Graphite, Simple Sleek, Scandinavian Touch
- **Executive**: Monaco Bold, Prestige Gray, Executive Luxe
- **And many more...**

Each template is fully responsive and ATS-friendly.

## 🚀 Deployment

### Frontend Deployment
```bash
npm run build
# Deploy the build folder to your hosting service (Netlify, Vercel, etc.)
```

### Backend Deployment
```bash
# Set NODE_ENV=production in your environment
cd resumegenie-backend
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `net start MongoDB`
- Check connection string in `.env` file
- Verify MongoDB is installed and accessible

### AI Features Not Working
- Check if Hugging Face token is properly set in `.env`
- Verify token has "Read" permissions
- Check browser console for API errors

### Build Issues
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear npm cache: `npm cache clean --force`
- Restart development server

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Check the troubleshooting section above
- Review the API documentation

---

**Made with ❤️ for job seekers worldwide**
