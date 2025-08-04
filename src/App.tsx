import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import "./bg.css"
import Layout from "./layout/Layout"
import Home from "./page/home/Home"
import AboutMe from "./page/aboutMe/AboutMe"
import SkillsTech from "./page/skillsTech/SkillsTech"
import ExpEdu from "./page/expEdu/ExpEdu"
import Projects from "./page/projects/Projects"
import Connect from "./page/connect/Connect"



function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element ={<Home/>}/>
        <Route path="aboutMe" element={<AboutMe/>}/>
        <Route path="skills&tech" element={<SkillsTech/>}/>
        <Route path="exp&edu" element={<ExpEdu/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Route path="contact" element={<Connect/>}/>
      </Route>
    )
  )

  return (
    <main className="min-h-screen w-screen h-screen light:text-periwinkel text-red font-[AnPro] bg-beige dark:text-periwinkel py-10 px-5 animated-bg">
      <RouterProvider router={router}/>
    </main>
  )
}

export default App
