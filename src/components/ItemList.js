import { Button, Card } from 'antd'
import React, { useState } from 'react'
import { MoreOutlined } from '@ant-design/icons'
import Popup from 'reactjs-popup'
// import { white } from 'ant-design/colors'

function ItemList({ item }) {
  // const [popUpMenu, setPopUpMenu] = useState(false)
  return (
    <Card
      className='card-style'
    // extra={<a href="#">More</a>}
    >
      <Popup trigger={<MoreOutlined className='more-popup' />} nested position="bottom" >
        <div>
          <a href='#'>Sold item</a>
        </div>
      </Popup>
      <div className='bubble-card'>
        <p>asdw</p>
      </div>
      <p className='text-style-card'>{item.name}</p>
      <p className='text-style-card'>Rp. {item.price.toLocaleString().replace(',', '.')}</p>
      {/* <Meta title={item.name} /> */}
      <div>
        <button className='item-button item-text-button'><span>&#10009;</span> Add to cart</button>
      </div>
    </Card>
  )
}

export default ItemList