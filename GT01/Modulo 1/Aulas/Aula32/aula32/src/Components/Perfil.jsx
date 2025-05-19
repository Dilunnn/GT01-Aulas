import React, { useEffect, useState } from 'react'

const Perfil = () => {

    let [dados,setdados] = useState('')
    let [nome,setnome] = useState('')
    let [sobrenome,setsobrenome] = useState('')
    let [carregando,setcarregando] = useState('')

    useEffect(() => {
        fetch('https://randomuser.me/api/')
        .then(resp => resp.json())
        .then((resp) => {
            console.log(resp);
            console.log(resp.results[0].name);
            
           setdados(resp)
           setnome(resp.results[0].name.first)
           setsobrenome(resp.results[0].name.last)  
        }
        
    )
    },[])




  return (
    <div className='container'>
      <div className='row text-center justify-content-center'>
          <div className="col-3">
              <div className="card" style={{width: '20rem'}}>
                {dados && (<img src={dados.results[0].picture.large} className="card-img-top" alt="cara da pessoa"/>)}
                    
                    <div className="card-body">
                        <p className="card-text" >
                            Nome: {nome} {sobrenome}
                        </p>
                    </div>
                </div>
          </div>
      </div>
    </div>
  )
}

export default Perfil
