import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Teacher from './pages/teacher/Teacher'
import Student from './pages/student/Student'
import SignIn from './pages/SignInpage/SignIn'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/loginPage",
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
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
