import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.tsx'
import Teacher from './pages/teacher/Teacher.jsx'
import Student from './pages/student/Student.jsx'
import SignIn from './pages/SignInpage/SignIn'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import Signuptr from './pages/signuptr/Signuptr'
import Logintr from './pages/logintr/Logintr'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/loginpage",
    element: <SignIn/>
  },
  {
    path: "/teachers",
    element: <Teacher/>,
  },
  {
    path: "/students",
    element: <Student/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signuptr",
    element: <Signuptr/>,
  },
  {
    path: "/logintr",
    element: <Logintr/>,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
