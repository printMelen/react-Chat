import React, { useEffect, useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    user: "",
    pass: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = e.target.user.value.trim();
    const pass = e.target.pass.value.trim();
    console.log(user, pass);
    if (user !== "" && pass !== "") {
      const formData = new FormData();
      formData.append("user", user);
      formData.append("pass", pass);
      
      const xmlHttpReq = new XMLHttpRequest();
      xmlHttpReq.open(
        "POST",
        "https://handmadegames.es/chat/API/v1/chat/login",
        true
      );
      xmlHttpReq.onreadystatechange = () => {
        if (xmlHttpReq.readyState === 4 && xmlHttpReq.status === 200) {
          let respuestaLogin;
          try {
            respuestaLogin = JSON.parse(xmlHttpReq.responseText);
            console.log(respuestaLogin);
          } catch (error) {
            console.error("Error al parsear la respuesta JSON:", error);
          }
        }
      };
      xmlHttpReq.send(formData);
    }
  };
  // useEffect(() => {
  //   const respuesta = async () => {
  //     const xmlHttpReq = new XMLHttpRequest();
  //     const formDataEnviar = new FormData();
  //     let respuestaLogin;
  //     formDataEnviar.append("user", formData.user);
  //     formDataEnviar.append("pass", formData.pass);
  //     xmlHttpReq.open(
  //       "POST",
  //       "https://handmadegames.es/chat/API/v1/chat/login",
  //       true
  //     );
  //     xmlHttpReq.onreadystatechange = () => {
  //       if (xmlHttpReq.readyState === 4 && xmlHttpReq.status === 200) {
  //         try {
  //           respuestaLogin = JSON.parse(xmlHttpReq.responseText);
  //           console.log(respuestaLogin);
  //         } catch (error) {
  //           console.error("Error al parsear la respuesta JSON:", error);
  //         }
  //       }
  //     };
  //     xmlHttpReq.send(formDataEnviar);
  //   };
  //   respuesta();
  // }, [formData]);
  return (
    <form method="post" className="w-[500px] mx-auto" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Usuario"
        name="user"
        className="w-full bg-white rounded-lg mb-5 p-3"
      />
      <input
        type="password"
        placeholder="Password"
        name="pass"
        className="w-full bg-white rounded-lg mb-5 p-3"
      />
      <input
        type="submit"
        value="Enviar"
        className="w-full bg-green-500 p-3 rounded-lg text-white"
      />
    </form>
  );
};

export default Login;
