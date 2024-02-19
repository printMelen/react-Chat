import Header from "./Header"
import Login from "./Login"
import "./App.css"

import { useState } from "react"
import Mensaje from "./Mensaje.jsx";
function App() {
  const [logeado,setLogeado] = useState(false);
  return (
    <>
      <Header/>
      {logeado ? null : <Login logeado={setLogeado}></Login> }
      {logeado ? <Mensaje/> : null}
    </>
  )
}

export default App
