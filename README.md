# 🚀 Job Hunt – MERN Stack Job Portal
<img width="1896" height="911" alt="image" src="https://github.com/user-attachments/assets/28320725-24a0-470a-bde6-e0293614f261" />


A modern full-stack job portal built with the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. The platform enables job seekers to discover opportunities, apply for jobs, and manage their profiles, while recruiters can create companies, publish job openings, and review applications.

The application also includes secure authentication, email-based OTP verification, resume uploads, AI-assisted job recommendations, and a responsive user interface for a smooth experience across devices.

---

## ✨ Key Features

### 👨‍🎓 Job Seekers

- Create an account with email OTP verification
- Secure login using JWT authentication
- Browse and search job listings
- View detailed job information
- Apply for jobs online
- Save jobs for future reference
- Manage profile, resume, bio, and skills
- Change password securely using OTP verification
- View application history

### 🏢 Recruiters

- Register and login as a recruiter
- Create and manage companies
- Publish and edit job postings
- View applicants for each job
- Manage recruiter dashboard

### 🔐 Authentication & Security

- Email OTP verification during registration
- Forgot password using OTP
- Secure password update
- JWT authentication with HTTP-only cookies
- Password encryption using bcrypt

### 🤖 AI Features

- AI-powered job recommendations
- OpenAI-compatible integration
- Fallback recommendation logic based on job type and location

---

## 🛠️ Technology Stack

### Frontend

- React 18
- Vite
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- shadcn/ui
- Axios
- Sonner
- Lucide Icons

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- Multer
- Cloudinary
- Nodemailer
- Fetch API

---

## 📂 Project Structure

```text
JOB-PORTAL
│
├── Backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   ├── index.js
│   └── .env
│
└── Frontend
    ├── src
    │   ├── components
    │   ├── hooks
    │   ├── redux
    │   └── utils
    └── vite.config.js
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Anish9304/Job_Portal.git
cd Job_Portal
```

### Backend

```bash
cd Backend
npm install
npm run dev
```

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **Backend** folder.

```env
MONGO_URI=
JWT_SECRET=

CLOUD_NAME=
CLOUD_API=
API_SECRET=

PORT=5011
NODE_ENV=development

CORS_ORIGIN=http://localhost:5173

AI_BASE_URL=https://api.clod.io/v1
AI_API_KEY=
AI_MODEL=openai/gpt-oss-120b

EMAIL_USER=
CLIENT_ID=
CLIENT_SECRET=
REFRESH_TOKEN=
```

---

## 🚀 API Modules

### User

- Register
- Login
- Verify OTP
- Forgot Password
- Reset Password
- Update Profile

### Company

- Create Company
- Update Company
- Get Company Details

### Jobs

- Create Job
- Browse Jobs
- Search Jobs
- AI Recommendations

### Applications

- Apply Job
- View Applicants
- Application History

---

## 🧪 Development

Backend

```bash
npm run dev
```

Frontend

```bash
npm run dev
```

---

## 🌐 Deployment

### Backend

- Render

### Frontend

- Vercel

### Database

- MongoDB Atlas

### File Storage

- Cloudinary

---

## 👨‍💻 Author

**Anish Raj**

GitHub: https://github.com/Anish9304

---

⭐ If you find this project useful, consider giving it a star on GitHub.
