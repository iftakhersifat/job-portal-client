import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Pages/Home.jsx';
import Register from './Components/Pages/Register.jsx';
import AuthProvider from './Components/Firebase/AuthProvider.jsx';
import Login from './Components/Pages/Login.jsx';
import JobDetails from './Components/Jobs/JobDetails.jsx';
import PrivateRoute from './Components/Firebase/PrivateRoute.jsx';
import JobApply from './Components/Jobs/JobApply.jsx';
import MyApplications from './Components/Applications/MyApplications.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, Component:Home},
      {path: "/register", Component:Register},
      {path: "/login", Component:Login},

      // single job details id 
      {path: "/jobs/:id",
        Component:JobDetails,
        loader: ({params}) =>fetch(`http://localhost:3000/jobs/${params.id}`)
      },{path: "/apply/:id", element: <PrivateRoute><JobApply></JobApply></PrivateRoute>},

      // applications
      {path: '/my-applications', element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>}
      ,
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>,
)
