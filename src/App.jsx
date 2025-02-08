
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import HomePage from './pages/HomePage'
import Jobseekers from './pages/Jobseekers';
import Companies from './pages/Companies';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import JobSeekerDashboard from "./components/JobSeekerDashboard";
import RecruitersDashboard from "./components/RecruitersDashboard";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
       <div>
          <Navbar/>
          <HomePage/>,
       </div>
    },
    {
      path:"/jobseekers",
      element:
      <div>
        <Navbar/>
        <Jobseekers/>,
      </div>
    },
    {
      path:"/companies",
      element:
      <div>
        <Navbar/>
        <Companies/>,
      </div>
    },
    {
      path:"/login",
      element: <Login/>,
    },
    {
      path: "/signup",
      element: <Signup/>,
    },
    {
      path: "/jobseekerdashboard",
      element: <JobSeekerDashboard/>,
    },
    {
      path: "/recruiterdashboard",
      element: <RecruitersDashboard/>,
    },
  ]
);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
