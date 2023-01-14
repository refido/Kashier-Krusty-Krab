import { Col, Row } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import ItemList from '../components/ItemList'

function Homepage() {
    const dispatch = useDispatch()
    const [itemsData, setItemsData] = useState([])

    const category = [
        {
            name: "All",
            imgSrc: process.env.PUBLIC_URL + '/image/krustykrab.png'
        },
        {
            name: "Food",
            imgSrc: process.env.PUBLIC_URL + '/image/krabby_patty.png'
        },
        {
            name: "Drink",
            imgSrc: process.env.PUBLIC_URL + '/image/image 12.png'
        },
        {
            name: "Snack",
            imgSrc: process.env.PUBLIC_URL + '/image/image 13.png'
        },
    ]



    //useEffect
    useEffect(() => {
        const getAllItems = async () => {
            try {
                dispatch({type: "SHOW_LOADING"})
                const { data } = await axios.get("https://kashier-krusty-krab-server.azurewebsites.net/item/get-item");
                setItemsData(data);
                dispatch({ type: "HIDE_LOADING" });
            } catch (error) {
                console.log(error);
            }
        };
        getAllItems();
    }, []);
    return (
        <div>
            <DefaultLayout>
                <div className='block-head'>
                    <p>Choose Categori</p>
                    <input className='search-input' placeholder='Search Item'></input>
                </div>
                <div className='block-category'>
                    {category.map(cat => (
                        <div>
                            <div className='bubble-category'><img src={cat.imgSrc} alt={cat.name} /></div>
                        </div>
                    ))}

                </div>
                <Row>
                    {
                        itemsData.map((item => (
                            <Col key={item._id} xs={24} lg={6} md={12} sm={6}>
                                <ItemList item={item} />
                            </Col>
                        )))
                    }
                </Row>
            </DefaultLayout>
        </div>
    )
}

export default Homepage