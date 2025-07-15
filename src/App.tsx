import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./page/home/Home"
import AboutMe from "./page/aboutMe/AboutMe"
import SkillsTech from "./page/skillsTech/SkillsTech"
import ExpEdu from "./page/expEdu/ExpEdu"
import Projects from "./page/projects/Projects"
import Contact from "./page/contact/Contact"
import "./bg.css"



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element ={<Home/>}/>
        <Route path="aboutMe" element={<AboutMe/>}/>
        <Route path="skills&tech" element={<SkillsTech/>}/>
        <Route path="exp&edu" element={<ExpEdu/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Route path="contact" element={<Contact/>}/>

      </Route>
    )
  )

  return (
    <main className="min-h-screen w-screen h-screen  text-red bg-beige font-[TiltNeon] animated-bg py-10 px-5">
      <RouterProvider router={router}/>
    </main>
  )
}

export default App
