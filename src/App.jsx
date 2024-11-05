import React from 'react'
import Applayout from './component/Applayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Aboutme from './component/Aboutme'
import Home from './component/Home'
import Projects from './component/Projects'
import Skills from './component/Skills'
import Contact from './component/Contact'
import Resume from './component/Resume'
 
 


 const router = createBrowserRouter([
{path: '/', element: <Applayout/>,
  children: [
    { path: '/', element: <Home /> },
    { path: '/About', element: <Aboutme /> },
    { path: '/projects', element: < Projects/> },
    { path: 'skills', element: <Skills /> },
    { path: 'contact', element: <Contact /> },
    { path: 'resume', element: <Resume/> }
  ],
   
}

 ])
 const App = () => {
   return (
     <>
     <RouterProvider router={router}></RouterProvider>
     </>
   )
 }
 
 export default App
 