
import { Link } from 'react-router-dom'



import '../styles/Nav.css'

function Nav() {
  return (
    <header>
      <nav>
        <Link to='/'>HOME</Link>
        <Link to='/shop'>SHOP</Link>
      </nav>
      <Link to='/checkout'>CART</Link>
    </header>
  )
}

export default Nav