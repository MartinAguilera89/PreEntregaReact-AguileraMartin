import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {

  if (!productos || !Array.isArray(productos) || productos.length === 0) {   
    return null;
  }

  return (
    <div className="container">
      {productos.map((p) =>  (
          <Item className='card'
          key={p.id} 
          itemId={p.id} 
          nombre={p.nombre} 
          price={p.price} 
          image={p.image}
          stock={p.stock}
          />
          ))
      }
    </div>
  )
}

export default ItemList