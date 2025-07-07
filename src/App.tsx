import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./page/home/Home"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element ={<Home/>}/>

      </Route>
    )
  )

  return (
    <main className="p-5 text-red bg-beige font-[TiltNeon]">
      <RouterProvider router={router}/>
    </main>
  )
}

export default App
