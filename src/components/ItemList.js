import { Card, message } from 'antd'
import React, { useState } from 'react'
import { MoreOutlined } from '@ant-design/icons'
import Popup from 'reactjs-popup'
import { useDispatch } from 'react-redux'
import axios from 'axios'

function ItemList({ item }) {
  const dispatch = useDispatch()

  const [data, setData] = useState(item)

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...item, quantity: 1 },
    });
  }

  const handleUpdate = async (item) => {
    const data = {
      itemId: item._id,
      status: false,
    }
    try {
      dispatch({ type: "SHOW_LOADING" });
      await axios.put("https://kashier-krusty-krab-server.azurewebsites.net/item/update-item", data);
      message.success("Item Updated Succesfully");
      setData({...item, status: false})
      dispatch({ type: "HIDE_LOADING" });
    } catch (error) {
      dispatch({ type: "HIDE_LOADING" });
      message.error("Something Went Wrong");
      console.log(error);
    }
  }

  console.log(data);

  return (
    <Card className='card-style'>
      {data.status === true ?
        <Popup trigger={<MoreOutlined style={{ color: 'white' }} className='more-popup' />} nested position="bottom right" >
          <div>
            <span style={{ cursor: 'pointer' }} onClick={() => handleUpdate(data)} className='a-popup'>SOLD</span>
          </div>
        </Popup> : null
      }

      <div className='bubble-card'>
        <p><img src={data.image} alt={data.name} height="60" width="60" /></p>
      </div>
      <p className='text-style-card'>{data.name}</p>
      <p className='text-style-card'>$ {data.price.toLocaleString().replace(',', '.')}</p>
      <div>
        {data.status === true ?
          <button className='item-button button-ready item-text-button text-button-ready' onClick={() => handleAddToCart()}><span>&#10009;</span> Add to cart</button>
          :
          <button className='item-button button-sold item-text-button text-button-sold' onClick={() => handleAddToCart()} disabled> SOLD</button>
        }
      </div>
    </Card>
  )
}

export default ItemList