
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <header>
      <nav>
        <Link className='link' to='/'>HOME</Link>
        <Link className='link' to='/shop'>SHOP</Link>
      </nav>
      <Link className='link' to='/checkout'>CART</Link>
    </header>
  )
}

export default Nav