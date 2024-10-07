
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Checkout() {
  return (
    <div className="checkout-page">
      <Nav />
      <div className="content">
        <h1>Checkout</h1>
        <ul>
          <li>3.99</li>
          <li>2.99</li>
          <li>5.99</li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Checkout
