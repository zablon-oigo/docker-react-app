import { BrowserRouter, Outlet,Routes, Route } from "react-router-dom"
import NavabarLayout from "./Layout/NavabarLayout"
import Home from "./components/Home"
import NotFound from "./components/NotFound"
import About from "./components/About"
import Contact from "./components/Contact"
import Services from "./components/Services"


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavabarLayout/>} >

        <Route index element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="services" element={<Services/>} />
        <Route path='*' element={<NotFound/>} />
        </Route>


    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
