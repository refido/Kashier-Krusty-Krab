import { Card } from 'antd'
import React from 'react'
import { MoreOutlined } from '@ant-design/icons'
import Popup from 'reactjs-popup'
import { useDispatch } from 'react-redux'

function ItemList({ item }) {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...item, quantity: 1 },
    });
  }

  return (
    <Card className='card-style'>
      <Popup trigger={<MoreOutlined style={{ color: 'white' }} className='more-popup' />} nested position="bottom right" >
        <div>
          <a href='##' className='a-popup'>SOLD</a>
        </div>
      </Popup>
      <div className='bubble-card'>
        <p><img src={item.image} alt={item.name} height="60" width="60" /></p>
      </div>
      <p className='text-style-card'>{item.name}</p>
      <p className='text-style-card'>$. {item.price.toLocaleString().replace(',', '.')}</p>
      <div>
        <button className='item-button item-text-button' onClick={() => handleAddToCart()}><span>&#10009;</span> Add to cart</button>
      </div>
    </Card>
  )
}

export default ItemList