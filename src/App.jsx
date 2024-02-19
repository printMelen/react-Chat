import Header from "./Header"
import Login from "./Login"
import "./App.css"

import Formulario from "./Login"
import { useState } from "react"
function App() {
  const [logeado,setLogeado] = useState(false);
  return (
    <>
      <Header/>
      <Login/>
    </>
  )
}

export default App
