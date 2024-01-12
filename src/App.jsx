import { BrowserRouter, Outlet,Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import NavabarLayout from "./Layout/NavabarLayout"
import Home from "./components/Home"
import Footer from "./components/Footer"
import NotFound from "./components/NotFound"


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavabarLayout/>} >

        <Route index element={<Home/>} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
        <Route path="services" element={<h1>services</h1>} />
        <Route path='*' element={<NotFound/>} />
        </Route>


    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
