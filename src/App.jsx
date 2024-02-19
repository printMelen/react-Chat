import Header from "./Header"
import Login from "./Login"
import "./App.css"

import { useState } from "react"
function App() {
  const [logeado,setLogeado] = useState(false);
  return (
    <>
      <Header/>
      {logeado ? null : <Login logeado={setLogeado}></Login> }
    </>
  )
}

export default App
