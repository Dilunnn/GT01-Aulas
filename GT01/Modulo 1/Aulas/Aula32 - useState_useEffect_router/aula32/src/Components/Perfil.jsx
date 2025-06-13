import React, { useEffect, useState } from 'react'

const Perfil = () => {

    let [dados,setdados] = useState(null)
    let [nome,setnome] = useState('')
    let [sobrenome,setsobrenome] = useState('')
    let [carregando,setcarregando] = useState('')
    let [pais,setpais] = useState('')
    let [telefone,settelefone] = useState('')
    useEffect(() => {
        fetch('https://randomuser.me/api/')
        .then(resp => resp.json())
        .then((resp) => {
            
            
           setdados(resp)
           setnome(resp.results[0].name.first)
           setsobrenome(resp.results[0].name.last)
           settelefone(resp.results[0].cell)
           setpais(resp.results[0].location.country)
        } 
    ) .catch((erro) => {
      console.log(erro);
      
    })
    },[])


      console.log(dados);
      

  return (
    <div className='container'>
      <div className='row  justify-content-center'>
          <div className="col-3">
              <div className="card" style={{width: '20rem'}}>
                {dados && (<img src={dados.results[0].picture.large} id='imagemUser' className="card-img-top" alt="cara da pessoa"/>)}
                    
                    <div className="card-body">
                      
                        <p className="card-text" >
                            Nome: {nome} {sobrenome} <br />
                            telefone: {telefone} <br />
                            País: {pais}
                        </p>
                    </div>
                </div>
          </div>
      </div>
    </div>
  )
}

export default Perfil
 