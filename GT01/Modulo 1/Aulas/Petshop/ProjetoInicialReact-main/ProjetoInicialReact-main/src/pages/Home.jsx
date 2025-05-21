import React from 'react'

const Home = () => {
  return (
    <>
    {/* Carousel */}
    <div
  id="carousel"
  className="container-global carousel slide mx-auto pt-3 container"
  data-bs-ride="carousel"
>
  <div className="carousel-inner rounded-3">
    <div className="carousel-item active">
      <img src="/banner.png" className="d-block w-100 img-fluid" alt="Banner" />
    </div>
    <div className="carousel-item">
      <img src="/car.png" className="d-block w-100 img-fluid" alt="Carro" />
    </div>
    <div className="carousel-item">
      <img src="/vacina.png" className="d-block w-100 img-fluid" alt="Vacina" />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carousel"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Anterior</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carousel"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Próximo</span>
  </button>
</div>
{/*  --------*/}
    <div className="container-global d-flex flex-column mt-4 mb-4 rounded-2 custom-banner">
  <img
    src="/banner-brinquedo.png"
    alt="Banner Brinquedo"
    className="rounded-4 align-self-center mt-2 img-fluid"
  />
  <div className="mt-1 mb-2">
    {/* Conteúdo opcional aqui */}
  </div>
</div>
{/* --------------------- */}
<div className="container-global mb-3">
  <div className="row row-cols-1 row-cols-md-2 g-4">
    <div className="col">
      <div className="card">
        <a href="/servicos/serviço.html">
          <img
            src="/seriços.png"
            className="card-img-top mx-auto rounded-2 img-fluid"
            alt="Serviços"
          />
        </a>
      </div>
    </div>
    <div className="col">
      <div className="card border-0">
        <a href="/adocao/adocao.html">
          <img
            src="/adote.png"
            className="card-img-top rounded-2 img-fluid"
            alt="Adote"
          />
        </a>
      </div>
    </div>
  </div>
</div>
{/* --------------------------------------------- */}
<div className="container-global mb-5 mt-5 p-2 shadow-lg rounded-3">
  <h3 className="text-center">Mundo Petzzy - Cuidado com amor!</h3>
  <p>
    No nosso petshop, seu pet é tratado como parte da família! Oferecemos banho,
    tosa, consultas veterinárias, vacinação e produtos de qualidade para o
    bem-estar do seu melhor amigo. Aqui, cada latido e ronronar é recebido com
    carinho. 💙
  </p>
</div>


    </>
  )
}

export default Home