import { Col, Row } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import ItemList from '../components/ItemList'

function Homepage() {
    const dispatch = useDispatch()
    const [itemsData, setItemsData] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("all")
    const category = [
        {
            name: "all",
            imgSrc: process.env.PUBLIC_URL + '/image/krustykrab.png'
        },
        {
            name: "foods",
            imgSrc: process.env.PUBLIC_URL + '/image/krabby_patty.png'
        },
        {
            name: "drinks",
            imgSrc: process.env.PUBLIC_URL + '/image/image 12.png'
        },
        {
            name: "snacks",
            imgSrc: process.env.PUBLIC_URL + '/image/image 13.png'
        },
    ]

    const filteredMenu = itemsData.filter((item) => {
        switch (selectedCategory) {
            case "all":
                return true
            case "drinks":
                return item.category === selectedCategory
            case "foods":
                return item.category === selectedCategory
            case "snacks":
                return item.category === selectedCategory
            default:
                return item.category === selectedCategory
        }
    })

    //useEffect
    useEffect(() => {
        const getAllItems = async () => {
            try {
                dispatch({ type: "SHOW_LOADING" })
                const { data } = await axios.get("https://kashier-krusty-krab-server.azurewebsites.net/item/get-item");
                setItemsData(data);
                dispatch({ type: "HIDE_LOADING" });
            } catch (error) {
                console.log(error);
            }
        };
        getAllItems();
    }, [dispatch]);
    return (
        <div>
            <DefaultLayout listOrder={true}>
                <div className='block-head'>
                    <p>Choose Category</p>
                </div>
                <div className='block-category'>
                    {category.map(cat => (
                        <div key={cat.name}>
                            <div className='bubble-category' onClick={() => setSelectedCategory(cat.name)}><img src={cat.imgSrc} alt={cat.name} /></div>
                        </div>
                    ))}
                </div>
                <Row>
                    {
                        filteredMenu.length > 0 ? (
                            filteredMenu.map((item) => (
                                <Col key={item._id} xs={24} lg={6} md={12} sm={6}>
                                    <ItemList item={item} />
                                </Col>
                            ))
                        ) : "Menu Empty"
                    }
                </Row>
            </DefaultLayout>
        </div>
    )
}

export default Homepage