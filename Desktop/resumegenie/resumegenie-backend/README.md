# ResumeGenie Backend

A Node.js/Express backend API for the ResumeGenie application.

## Features

- 🔐 User authentication (JWT)
- 📄 Resume CRUD operations
- 🖼️ Image upload to Cloudinary
- 🔒 Protected routes with middleware
- 📊 Public resume sharing

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer + Cloudinary
- **Password Hashing**: bcryptjs

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd resumegenie-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your configuration:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/resumegenie
   JWT_SECRET=your-super-secret-jwt-key
   FRONTEND_URL=http://localhost:3000
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   ```

4. **Start the server**
   ```bash
   # Development mode (with auto-restart)
   npm run dev

   # Production mode
   npm start
   ```

The server will start on `http://localhost:5000` (or your configured PORT).

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Resumes
- `GET /api/resumes` - Get all user resumes (protected)
- `GET /api/resumes/:id` - Get specific resume (protected)
- `POST /api/resumes` - Create new resume (protected)
- `PUT /api/resumes/:id` - Update resume (protected)
- `DELETE /api/resumes/:id` - Delete resume (protected)
- `GET /api/resumes/public/all` - Get all public resumes

### Upload
- `POST /api/upload/image` - Upload image to Cloudinary (protected)
- `DELETE /api/upload/image/:publicId` - Delete image from Cloudinary (protected)

## Project Structure

```
resumegenie-backend/
├── models/
│   ├── User.js          # User model
│   └── Resume.js        # Resume model
├── routes/
│   ├── auth.js          # Authentication routes
│   ├── resumes.js       # Resume CRUD routes
│   └── upload.js        # File upload routes
├── middleware/
│   └── auth.js          # JWT authentication middleware
├── server.js            # Main server file
├── package.json         # Dependencies and scripts
├── .env.example         # Environment variables template
└── README.md           # This file
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `PORT` | Server port | No (defaults to 5000) |
| `MONGODB_URI` | MongoDB connection string | Yes |
| `JWT_SECRET` | JWT signing secret | Yes |
| `FRONTEND_URL` | Frontend application URL | No (defaults to localhost:3000) |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | Yes (for image uploads) |
| `CLOUDINARY_API_KEY` | Cloudinary API key | Yes (for image uploads) |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | Yes (for image uploads) |

## Development

### Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (placeholder)

### Error Handling

The server includes comprehensive error handling:
- Database connection errors
- Authentication failures
- File upload errors
- Route not found (404)
- Internal server errors (500)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.