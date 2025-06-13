import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
          <Link to='/'>Home</Link>
          <Link to='/sobre'>Sobre</Link>
          <Link to='/conteudo'>Contato</Link>
      </nav>
    </div>
  )
}

export default Navbar
