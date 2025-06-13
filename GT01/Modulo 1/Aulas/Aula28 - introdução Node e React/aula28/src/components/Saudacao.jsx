import React from 'react'

const Saudacao = (props) => {
    

  return (
    <div>
      {props.pessoas.map((pessoa,index) => (
        <p key={index}>Olá {pessoa.name} sua idade é {pessoa.idade}</p>
      ))}
    
    </div>
  )
}

export default Saudacao
