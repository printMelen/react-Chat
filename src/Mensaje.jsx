import React from 'react'

const Mensaje = () => {
  return (
    <form method='post' className="w-[500px] mx-auto">
        <input
        type="text"
        placeholder="mensaje"
        name="mensaje"
        className="w-full bg-white rounded-lg mb-5 p-3"
      />
      <input
        type="submit"
        value="Enviar"
        className="w-full bg-green-500 p-3 rounded-lg text-white"
      />
    </form>
  )
}

export default Mensaje