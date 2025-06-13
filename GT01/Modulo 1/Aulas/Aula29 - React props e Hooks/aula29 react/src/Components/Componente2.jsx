import React from 'react'

const Componente2 = (props) => {
  return (
    <div className='container'>
        <div className='produto'>
            <img src={props.produto.image} alt="imagem do produto" width={'200px'} />
        </div>
    </div>
  )
}

export default Componente2
