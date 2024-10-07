/* eslint-disable react/prop-types */

// category: "jewelery"
// description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days."
// id: 6
// image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
// price: 168
// rating: {rate: 3.9, count: 70}
// title: "Solid Gold Petite Micropave "

function Product({ obj }) {
  return (
    <div className="product">
      <img src={obj.image} alt={obj.title} />
      <p>{obj.title}</p>
      <p>{obj.price}$</p>
      <p>{obj.rating.rate} ({obj.rating.count})</p>
      {/* <p>{obj.description}</p> */}
      <div className="quantity">
        <button className="add">+</button>
        <button className="rm">-</button>
        <p>Total 0</p>
      </div>
    </div>
  )
}

export default Product