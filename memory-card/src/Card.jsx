/* eslint-disable react/prop-types */

function Card({ id, name, path, click }) {

  return (
    <div key={id} className='card'>
      <img src={path} onClick={click} alt={name}/>
      <h1>{name}</h1>
    </div>
  )
}

export default Card