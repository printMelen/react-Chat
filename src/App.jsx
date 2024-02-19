import Header from "./Header"
import Login from "./Login"
import "./App.css"

import { useState } from "react"
import Mensaje from "./Mensaje.jsx";
function App() {
  const [logeado,setLogeado] = useState(false);
  const [error,setError] = useState(false);
  return (
    <>
      <Header/>
      {logeado ? null : <Login logeado={setLogeado} error={setError}></Login> }
      {error ? <p className="text-center text-white">Datos incorrectos</p> : null}
      {logeado ? <Mensaje/> : null}
    </>
  )
}

export default App
