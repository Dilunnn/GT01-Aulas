import React, { useState } from "react";

const Home = () => {
  let [email, setemail] = useState();
  let [senha, setSenha] = useState();

  const fazerlogin = async (e) => {
    e.preventDefault();
    try {
      const resposta = await fetch("htttp://localhost:3000/verificarlogin", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, senha: senha }),
      });
      const dados = await resposta.json();
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <>
      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center">
        <div className="card p-4">
          <h2>Login:</h2>
          <form onSubmit={fazerlogin}>
            <div className="mb-3 ">
              <label htmlFor="email" className="form-label">
                E-mail:
              </label>
              <input
                type="email"
                id="username"
                name="email"
                className="form-control"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="senha" className="form-label">
                Senha:
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                className="form-control"
                onChange={(e) => {
                  setSenha(e.target.value);
                }}
              />{" "}
              <br />
              <button type="submit" className="btn btn-secondary w-100">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
