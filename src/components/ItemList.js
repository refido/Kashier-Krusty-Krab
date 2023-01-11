import { Button, Card } from 'antd'
import React, { useState } from 'react'
import { MoreOutlined } from '@ant-design/icons'
import Popup from 'reactjs-popup'

function ItemList({ item }) {
  return (
    <Card className='card-style'>
      <Popup trigger={<MoreOutlined style={{ color: 'white' }} className='more-popup' />} nested position="bottom right" >
        <div>
          <a className='a-popup' href='#'>SOLD</a>
        </div>
      </Popup>
      <div className='bubble-card'>
        <p>gambar</p>
      </div>
      <p className='text-style-card'>{item.name}</p>
      <p className='text-style-card'>Rp. {item.price.toLocaleString().replace(',', '.')}</p>
      <div>
        <button className='item-button item-text-button'><span>&#10009;</span> Add to cart</button>
      </div>
    </Card>
  )
}

export default ItemList