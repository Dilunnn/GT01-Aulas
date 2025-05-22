
const Footer = () => {
   return (
    <>
      <footer className="pt-4 pb-4" style={{ backgroundColor: '#acd6d1' }}>
        <div className="container text-center">
          <div className="row">
            <div className="col-md-6">
              <p>
                <img src="/local_nobg.png" alt="Localização" id="imgfooter1" />
                Av Santos Dumont, 2554, Aldeota, Fortaleza.
              </p>
              <p>
                <img src="/tel.png" alt="Telefone" id="imgfooter1" />
                85 9 9876 5432
              </p>
              <p>
                <img src="/email_nobg.png" alt="Email" id="imgfooter1" />
                mundopetzzy@pet.com
              </p>
            </div>
            <div className="col-md-6">
              <p>Nos siga nas redes:</p>
              <img src="/icon_1.png" alt="Rede social 1" id="imgfooter" className="me-2" />
              <img src="/icon_2.png" alt="Rede social 2" id="imgfooter" className="me-2" />
              <img src="/icon_3.png" alt="Rede social 3" id="imgfooter" className="me-2" />
            </div>
          </div>
        </div>
      </footer>

      <footer className="text-center text-light" style={{ backgroundColor: '#845cdc' }}>
        Todos os direitos reservados - &copy; Mundo Petzzy - 2025
      </footer>
    </>
  );
};



export default Footer
