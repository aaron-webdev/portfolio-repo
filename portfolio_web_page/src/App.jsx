import { HashRouter, Route, Routes } from "react-router-dom"
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js"

import Homepage from "./Homepage.jsx";

export default function App() {

  return (
    <>
    <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
    </HashRouter>
    </>
  )
}