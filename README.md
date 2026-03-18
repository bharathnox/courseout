# CourseOut

CourseOut is a modern, responsive Learning Management System (LMS) built with the MERN stack. It empowers instructors to easily create and manage courses, while providing students with a seamless, immersive platform to browse, enroll, and manage their continuous learning journey.

## Key Features

### For Instructors
* **Dedicated Dashboard:** A personalized space to manage your content.
* **Course Creation:** Instantly publish new courses with pricing and descriptions.
* **Secure Authentication:** JWT-protected routes and session management.

### For Students
* **Sleek Course Catalog:** Browse all available courses in a beautiful, glassmorphic layout.
* **One-Click Enrollment:** Instantly enroll in courses you're interested in.
* **My Learning:** A dedicated, personal library of all your enrolled courses.

### UI / UX
* **Premium Glassmorphism:** Frosted glass UI cards, fluid gradients, and sleek navigation.
* **Responsive Design:** A fully mobile-friendly web app using modern CSS Flexbox and Grid.
* **Real-time Error Handling:** Beautiful inline validation and API error popups for authentication flows.

## Tech Stack

**Frontend:**
* React (Vite)
* React Router DOM
* Axios for API integrations
* Custom CSS variables & global styling 

**Backend:**
* Node.js & Express
* MongoDB & Mongoose
* JSON Web Tokens (JWT) & bcryptjs for secure authentication
* Cookie-parser

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites
* [Node.js](https://nodejs.org/) (v16 or higher)
* [MongoDB Atlas](https://www.mongodb.com/atlas) account (or local MongoDB instance)

### 1. Installation

Clone the repo and navigate to the project directory. You will need to install the dependencies for both the frontend and backend architectures:

```bash
# Install backend dependencies
cd courseout-server
npm install

# Install frontend dependencies
cd ../courseout
npm install
```

### 2. Environment Variables

Create a `.env` file inside the `courseout-server` directory and configure the following variables properly:

```env
PORT=5002
MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/yourdbname
SECRET_KEY=your_super_secret_jwt_key
```

### 3. Running the Application

You will need two terminal windows to run both the client and the server simultaneously.

**Terminal 1 (Backend):**
```bash
cd courseout-server
npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd courseout
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

## Project Structure

```text
courseout/
├── courseout/               # React Frontend (Vite)
│   ├── src/
│   │   ├── assets/          # Brand imagery and vectors
│   │   ├── components/      # Reusable UI (Navbar, Footer, AvailableCourses)
│   │   ├── courses/         # Course-specific components (Course creation form)
│   │   ├── pages/           # Distinct views (Landing, SignIn, Teacher / Student Dashboards)
│   │   ├── App.jsx          # Root React component
│   │   └── index.css        # Global CSS variables and glassmorphism utilities
│   └── package.json
└── courseout-server/        # Node.js/Express Backend
    ├── model/               # MongoDB Schemas (userTr, userStd, coursemodel)
    ├── routes/              # Express API Routes (auth, enroll, course creation)
    ├── server.js            # Express server entry point
    └── package.json
```

