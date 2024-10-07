

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Lorem from '../components/Lorem'

function Home() {
  return (
    <div className='home-page'>
      <Nav />
      <div className="content">
        <h1>Home</h1>
        <Lorem />
      </div>
      <Footer />
    </div>
  )
}

export default Home