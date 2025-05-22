import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // Navbar
    <nav className="navbar fixed-top navbar-expand-lg navbar-light shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand ps-3" href="#">
          <img src="logo (1).png" alt="Mundo-Petzzy" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Alternar navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse ps-4" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="servicos/serviço.html">
                Serviços
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="produtos/produtos.html">
                Produtos
              </a>
            </li>
          </ul>

          <form className="d-flex me-3 pe-4 tamanho">
            <input
              className="form-control me-2 search-input"
              type="search"
              placeholder="Pesquisar produtos"
              aria-label="Pesquisar"
            />
            <button className="btn btn-outline-dark" type="submit">
              Buscar
            </button>
          </form>

          <ul className="navbar-nav pe-4">
            <li className="nav-item">
              <a className="nav-link" href="login/login.html">
                <img
                  src="pngwing.com.png"
                  className="mb-2 me-1"
                  alt=""
                  style={{ width: "20px" }}
                />
                Entrar
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link position-relative"
                href="adocao/adocao.html"
              >
                <img
                  src="306277.png"
                  alt=""
                  className="mb-1 me-1"
                  style={{ width: "20px" }}
                />
                Adote
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // 
  );
};

export default Navbar;
