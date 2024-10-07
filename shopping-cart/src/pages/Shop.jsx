
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Product from '../components/Product';

import { useEffect, useState } from 'react'


function Shop() {

  const [productList, setProductList] = useState([]);

  const [error, setError] = useState(null);

  // so we don't fetch data 24h during dev (useEffect later)
  const handleFetch = () => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setProductList(json);
      })
      .catch((error) => setError(error))
  }

  return (
    <div className="shop-page">
      <Nav />
      <div className="content">
        <div style={ 
          {display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px'}
          }>
          <h1>Shop</h1>
          <button 
            style={{padding: '5px', margin: '10px'}}
            onClick={handleFetch}>
            Fetch data
          </button>
        </div>
        
        <div className="product-list">
          {productList.map((p) => {
            return <Product key={p.id} obj={p} />
          })}
        </div>
        
      </div>
      <Footer />
    </div>
  )
}


export default Shop